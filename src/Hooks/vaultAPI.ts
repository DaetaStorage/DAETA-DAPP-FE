import api from "./api";
import { store } from "@/Store/store";
import { getCurrentUser } from "./authAPI";
import { setVault } from "@/Store/reducers/UserReducer";

export const createVault = async (vaultData) => {
  try {
    await api.post("/vault", vaultData);

    await getCurrentUser();
  } catch (error) {
    return false;
  }
};

export const loginVault = async (vaultData) => {
  try {
    const response = await api.post("/vault/auth", vaultData);

    if (response.status === 200) {
      return true;
    } else return false;
  } catch (error) {
    return false;
  }
};

export const uploadFiles = async (fileData: FormData) => {
  try {
    await api.post("/vault/upload", fileData);

    await getCurrentUser();
  } catch (error) {
    return false;
  }
};

export const downloadFile = async (formData) => {
  try {
    const response = await api.post("/vault/download", formData, {
      responseType: "blob",
    });

    return response.data;
  } catch (error) {
    return false;
  }
};
