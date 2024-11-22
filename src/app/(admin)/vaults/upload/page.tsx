"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import ThreeDotsSvg from "@/components/svg/threeDots";
import DownloadSvg from "@/components/svg/Download";
import reducer from "@/Store/file";
import { useSelector } from "react-redux";
import { downloadFile, uploadFiles } from "@/Hooks/vaultAPI";
import { useRouter } from "next/navigation";
import { stringFormat } from "@/Store/StringFormat";

export default function Vault() {
  const [files, setFiles] = useState<any | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const isVerified = useSelector((state: any) => state.UserReducer.isVerified);
  const user = useSelector((state: any) => state.UserReducer.user);
  const vault = useSelector((state: any) => state.UserReducer.vault);
  const token = useSelector((state: any) => state.UserReducer.token);
  const router = useRouter();
  const selectedVault = user
    ? user.vaults.filter((item: any) => item.vault._id === vault._id)
    : null;

  if (!token) {
    router.push("/login");
  }

  useEffect(() => {
    if (!selectedVault) return;
    const files = selectedVault[0].vault.files;

    const _files: any[] = [];
    if (files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const obj = {
          _id: files[i]._id,
          name: files[i].origin,
          size: `${(files[i].size / 1024 / 1024).toFixed(4)} MB`,
          date: new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          }).format(new Date(files[i].created_at).getTime()),
          type: "file",
        };

        _files.push(obj);
      }

      setFiles(_files);
    }
  }, [user]);

  const [data, dispatch] = useReducer(reducer, {
    inDropZone: false,
    fileList: [],
  });

  if (!vault) return;

  const handleButtonClick = (e) => {
    e.preventDefault();

    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const files = e.target.files;
    if (!files || files?.length === 0) return;

    const formData = new FormData();
    formData.append("id", vault._id);

    for (let i = 0; i < files.length; i++) {
      formData.append("files[]", files[i]);
    }

    uploadFiles(formData);
  };

  const handleDownload = async (file) => {
    if (!file._id || !vault._id) return;

    const formData = {
      file_id: file._id,
      vault_id: vault._id,
    };

    const blob = new Blob([await downloadFile(formData)]);
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", file.name);
    document.body.appendChild(link);
    link.click();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDragLeave sets inDropZone to false
  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
  };

  // onDragOver sets inDropZone to true
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // set dropEffect to copy i.e copy of the source item
    e.dataTransfer.dropEffect = "copy";
    dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
  };

  // onDrop sets inDropZone to false and adds files to fileList
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    // get files from event on the dataTransfer object as an array
    let files = [...e.dataTransfer.files];

    // ensure a file or files are dropped
    if (files && files.length > 0) {
      // loop over existing files
      const existingFiles = data.fileList.map((f) => f.name);
      // check if file already exists, if so, don't add to fileList
      // this is to prevent duplicates
      files = files.filter((f) => !existingFiles.includes(f.name));
      console.log("----------------------------");
      console.log(data);
      // dispatch action to add droped file or files to fileList
      dispatch({ type: "ADD_FILE_TO_LIST", files });
      // reset inDropZone to false
      dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
    }
  };

  return (
    <>
      <div className="container mx-auto pt-8 px-7 pb-7 bg-[#1C1C1C] rounded-[16px]">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-200 mb-4">
          Vaults &gt; <span className="text-gray-100">{vault.name}</span>
        </nav>
        <div className="flex justify-between mb-6">
          <h1 className="text-2xl font-bold">{vault.name}</h1>
          {/* Upload Section */}
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <button
                onClick={handleButtonClick}
                className="bg-[#F7FF98] text-[#262626] hover:bg-transparent hover:text-[#D9D9D9] border border-[#F7FF98] transition-all duration-300 ease-in-out font-bold leading-7 px-4 py-2 rounded-lg"
              >
                Upload
              </button>
              <button
                disabled
                className="bg-[#F7FF98] cursor-not-allowed text-[#262626] hover:bg-transparent hover:text-[#D9D9D9] border border-[#F7FF98] transition-all duration-300 ease-in-out font-bold leading-7 px-4 py-2 rounded-lg"
              >
                New Folder
              </button>
              {/* <button
                disabled
                className="cursor-not-allowed bg-slate-600 text-gray-200 px-4 py-2 rounded-lg hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button> */}
            </div>
          </div>
        </div>

        {/* File Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-[#262626] rounded-[8px] border border-[rgba(255,255,255,0.09)]">
            <thead>
              <tr className="bg-[#262626] text-[#D9D9D9] rounded-[8px] uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-blue-600"
                  />
                </th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Size</th>
                <th className="py-3 px-6 text-left">Upload Date</th>
                <th className="py-3 px-6 text-right">Download</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm">
              {files &&
                files.map((file, index) => (
                  <tr
                    key={index}
                    className="border-b text-[#D9D9D9] border-[rgba(255,255,255,0.09)] hover:bg-[#1C1C1C] transition-all duration-300 ease-in-out hover:cursor-pointer"
                  >
                    <td className="py-3 px-6 text-left">
                      <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600 cursor-pointer"
                      />
                    </td>
                    <td className="py-3 px-6 text-left flex items-center">
                      <span className="mr-2">
                        {file.type === "folder" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M3 7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                            />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-blue-500"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M7 7h10M7 11h10m-5 4h5"
                            />
                          </svg>
                        )}
                      </span>
                      {stringFormat(file.name)}
                    </td>
                    <td className="py-3 px-6">{file.size}</td>
                    <td className="py-3 px-6">{file.date}</td>
                    <td className="py-3 px-6 flex gap-3 my-auto cursor-pointer justify-end">
                      <div onClick={() => handleDownload(file)}>
                        <DownloadSvg />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="text-sm text-gray-500 mt-5">
          {files ? files.length : 0} objects
        </div>
        <input
          className="hidden"
          type="file"
          multiple
          ref={fileInputRef}
          onChange={handleFileChange}
        />
      </div>
    </>
  );
}
