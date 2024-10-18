import api from "./api";
import { store } from "@/Store/store";
import { clearUser, setToken, setUser } from "@/Store/reducers/UserReducer";
import setAuthToken from "./setAuthToken";

export const registerUser = async (userInfo) => {
  try {
    const response = await api.post("/users", userInfo);

    localStorage.setItem("token", response.data.token);
    store.dispatch(setToken(response.data.token));
  } catch (error) {
    store.dispatch(setToken(null));
  }
};

export const loginUser = async (userInfo) => {
  try {
    const response = await api.post("/auth", userInfo);

    localStorage.setItem("token", response.data.token);
    store.dispatch(setToken(response.data.token));
  } catch (error) {
    store.dispatch(setToken(null));
  }
};

export const loginUserWithGoogle = async (userInfo) => {
  try {
    const response = await api.post("/auth/google-auth", userInfo);

    localStorage.setItem("token", response.data.token);
    store.dispatch(setToken(response.data.token));
  } catch (error) {
    store.dispatch(setToken(null));
  }
};

export const loginUserWithMetaMask = async (userInfo) => {
  try {
    const response = await api.post("/auth/wallet-auth", userInfo);

    console.log("response", response);

    localStorage.setItem("token", response.data.token);
    store.dispatch(setToken(response.data.token));
  } catch (error) {
    store.dispatch(setToken(null));
  }
};

export const getCurrentUser = async () => {
  try {
    const response = await api.get("/auth");
    store.dispatch(setUser(response.data));
  } catch (error) {
    store.dispatch(setUser(null));
  }
};

export const logOut = () => {
  localStorage.removeItem("token");

  setAuthToken(null);
  store.dispatch(clearUser());
};
