"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import {
  registerUser,
  loginUserWithGoogle,
  loginUserWithMetaMask,
} from "@/Hooks/authAPI";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import EyeSvg from "@/components/svg/eye";
import GoogleSvg from "@/components/svg/google";
import MetamaskSvg from "@/components/svg/metamask";
import TwitterSvg from "@/components/svg/twitter";
import { useSDK } from "@metamask/sdk-react";
import { useGoogleLogin } from "@react-oauth/google";

const RegisterPage: React.FC = () => {
  const router = useRouter();
  const { sdk, connected, connecting, provider, chainId, account } = useSDK();
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rePassword, setRePassword] = useState<string>("");
  const [isChecked, setChecked] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRePasswordVisible, setIsRePasswordVisible] = useState(false);
  const token = useSelector((state: any) => state.UserReducer.token);
  const [stateText, setStateText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const signInWithMetaMask = async () => {
    try {
      // Assuming sdk.connect() returns a promise that resolves with accounts
      const accounts = await sdk?.connect();

      // Check if accounts is defined and has at least one entry
      if (accounts?.[0]) {
        console.log("Address:", accounts[0]);
        await loginUserWithMetaMask({ address: accounts[0] });
        setStateText("MetaMask connected successfully!");
      } else {
        throw new Error("No MetaMask accounts found.");
      }
    } catch (err) {
      const errorMessage = (err as Error)?.message || "Failed to connect.";
      setStateText(errorMessage);
      console.warn("Failed to connect...", err);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isChecked || password !== rePassword || !password || !rePassword) {
      setError("Passwords do not match or Terms not accepted.");
      return;
    }

    const formData = {
      username: fullName,
      email,
      password,
    };

    try {
      await registerUser(formData);
    } catch (error) {
      setError("Failed to register. Please try again.");
    }
  };

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleRePasswordVisibility = () => {
    setIsRePasswordVisible(!isRePasswordVisible);
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (credential) => {
      const userInfo = await fetch(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: { Authorization: `Bearer ${credential.access_token}` },
        }
      );

      const user = await userInfo.json();

      const formData = {
        email: user.email,
        username: `${user.given_name} ${user.family_name}`,
      };
      loginUserWithGoogle(formData);
    },
    onError: () => console.log("Login Failed"),
  });

  return (
    <div className="flex min-h-screen font-space-mono">
      <Head>
        <title>Login - DÆTA</title>
      </Head>
      <div className="hidden lg:flex lg:w-1/2 bg-[#262626] items-center justify-center SpaceMono">
        <img
          src="https://vesting.daeta.xyz/AuthBg1.png"
          alt="auth_logo"
          className="h-[calc(100vh-100px)]"
        />
      </div>
      <div className="w-full lg:w-1/2 flex bg-[#1c1c1c] py-[84px] px-5 lg:px-[84px] xl:px-[146px]">
        <div className="w-full max-w-[580px] mx-auto">
          <div className="flex flex-col gap-5 items-center">
            <div className="text-[#F7FF98] text-[28px] sm:text-[36px] space-mono font-bold tracking-[0.3px] text-center">
              Welcome to the DÆTA Storage
            </div>
          </div>

          <div className="w-full text-black mt-[60px] rounded-md bg-[#262626] pt-8 pb-8 px-10 flex flex-col items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="text-[20px] sm:text-[24px] text-[#D9D9D9] font-bold leading-7">
                Sign Up
              </div>
              <div className="text-[#E0DECF] text-[12px] sm:text-16px">
                to continue with DÆTA
              </div>
            </div>

            <div className="mt-3 flex flex-row items-center justify-center w-full gap-10">
              <div
                className="cursor-pointer "
                onClick={() => loginWithGoogle()}
              >
                <GoogleSvg width={24} height={24} />
              </div>

              {/* MetaMask Register */}
              <div className="cursor-pointer " onClick={signInWithMetaMask}>
                <MetamaskSvg width={24} height={24} />
              </div>

              {/* Twitter Register */}
              <div
                className="cursor-pointer w-6 h-6 bg-[#1C1C1C] rounded-[3px] flex items-center justify-center"
                onClick={() => console.log("Goole Login")}
              >
                <TwitterSvg width={16.34} height={14.809} />
              </div>
            </div>
            <div className="mt-3 text-green-500 text-[12px] text-center">
              {stateText}
            </div>
            {error && (
              <div className="mt-1 text-[red] text-[12px] text-center">
                {error}
              </div>
            )}

            <div className="w-full px-7 gap-2 justify-center items-center mt-10 flex flex-row">
              <div className="h-[0.351px] bg-[#E0DECF] w-full" />
              <div className="text-[#E0DECF] text-[10px] leading-[15px] min-w-fit">
                Or Sign Up with E-mail
              </div>
              <div className="h-[0.351px] bg-[#E0DECF] w-full" />
            </div>
            <form
              onSubmit={handleRegister}
              className="w-full flex flex-col mt-10"
            >
              <div className="relative">
                <input
                  type="string"
                  value={fullName}
                  placeholder="Enter Username"
                  onChange={(e) => setFullName(e.target.value)}
                  className="text-start w-full min-h-12 px-5 py-2 border border-[#F7FF98] rounded-lg focus:outline-none bg-transparent text-[14px] text-[#D9D9D9] leading-5"
                  required
                />
              </div>
              <div className="relative mt-3">
                <input
                  type="email"
                  value={email}
                  placeholder="Enter email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-start w-full min-h-12 px-5 py-2 border border-[#F7FF98] rounded-lg focus:outline-none bg-transparent text-[14px] text-[#D9D9D9] leading-5"
                  required
                />
              </div>
              <div className="relative mt-3">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="text-start w-full min-h-12 px-5 py-2 border border-[#F7FF98] rounded-lg focus:outline-none bg-transparent text-[14px] text-[#D9D9D9] leading-5"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-[22px] flex items-center cursor-pointer"
                  onClick={togglePasswordVisibility}
                  style={{ zIndex: 1 }}
                >
                  <EyeSvg width={20} height={20} isOff={!isPasswordVisible} />
                </span>
              </div>
              <div className="relative mt-3">
                <input
                  type={isRePasswordVisible ? "text" : "password"}
                  value={rePassword}
                  placeholder="Retype password"
                  onChange={(e) => setRePassword(e.target.value)}
                  className="text-start w-full min-h-12 px-5 py-2 border border-[#F7FF98] rounded-lg focus:outline-none bg-transparent text-[14px] text-[#D9D9D9] leading-5"
                  required
                />
                <span
                  className="absolute inset-y-0 right-0 pr-[22px] flex items-center cursor-pointer"
                  onClick={toggleRePasswordVisibility}
                  style={{ zIndex: 1 }}
                >
                  <EyeSvg width={20} height={20} isOff={!isPasswordVisible} />
                </span>
              </div>
              <label className="flex items-center mt-4">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setChecked(!isChecked)}
                  className="peer w-[18px] h-[18px] peer-checked:bg-[#F7FF98]"
                />

                <div className="ml-2 text-[#E0DECF] select-none text-[12px] sm:text-16px">
                  I agree with&nbsp;
                  <span
                    onClick={() => router.push("/terms-condition")}
                    className="text-[#F7FF98] font-bold inline-block hover:cursor-pointer hover:underline text-[12px] sm:text-16px"
                  >
                    Terms and Conditions
                  </span>
                </div>
              </label>
              <button
                type="submit"
                className="mt-6 text-[#1C1C1C] border border-[#F7FF98] hover:text-[#F7FF98] font-bold leading-7 bg-[#F7FF98] hover:bg-transparent rounded-lg w-full py-[10px] transition-all ease-in-out duration-300"
              >
                Register
              </button>
            </form>
            <div className="text-[#E0DECF] mt-4 text-[12px] sm:text-16px">
              Already have account?{" "}
              <span
                onClick={() => router.push("/login")}
                className="inline-block text-[#F7FF98] font-bold hover:underline hover:cursor-pointer"
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
