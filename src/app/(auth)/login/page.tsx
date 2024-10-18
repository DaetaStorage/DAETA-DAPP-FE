"use client";

import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import {
  loginUser,
  loginUserWithGoogle,
  loginUserWithMetaMask,
} from "@/Hooks/authAPI";
import { useGoogleLogin } from "@react-oauth/google";

import EyeSvg from "@/components/svg/eye";
import MetamaskSvg from "@/components/svg/metamask";
import { useSDK } from "@metamask/sdk-react";

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [stateText, setStateText] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { sdk, account } = useSDK();

  const token = useSelector((state: any) => state.UserReducer.token);

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

  useEffect(() => {
    if (token) {
      router.push("/dashboard");
    }
  }, [token]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Handle login logic here
    const formData = {
      email,
      password,
    };

    loginUser(formData);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
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

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex min-h-screen font-space-mono">
      <Head>
        <title>Login - Daeta</title>
      </Head>
      <div className="hidden lg:flex lg:w-1/2 bg-[#262626] pt-[84px] pl-8 items-center justify-center">
        <img src="/AuthBg.png" alt="auth_logo" className="h-full" />
      </div>
      <div className="w-full lg:w-1/2 flex bg-[#1c1c1c] py-[84px] px-5 lg:px-[84px] xl:px-[146px]">
        <div className="w-full max-w-[415px] mx-auto">
          <div className="flex flex-col gap-5 items-center">
            <div className="text-[#F7FF98] text-[36px] space-mono font-bold tracking-[0.3px]">
              Welcome back!
            </div>
            <div className="text-[#E0DECF] text-[16px] font-normal space-mono tracking-[0.3px] text-center">
              Enter your email and password below to access your account
            </div>
          </div>

          <div className="w-full text-black mt-[60px] rounded-md bg-[#262626] py-6 px-10 shadow-[0px_0px_16px_4px_rgba(247,255,152,0.20)] flex flex-col items-center">
            <div className="flex flex-col items-center gap-3">
              <div className="text-[24px] text-[#D9D9D9] font-bold leading-7">
                Sign in
              </div>
              <div className="text-[#E0DECF]">to continue with Daeta</div>
            </div>

            <div className="mt-6 flex flex-col items-center w-full gap-3">
              <button
                className="rounded-lg border border-[#E0DECF] flex items-center justify-center gap-2 w-full h-12"
                onClick={() => loginWithGoogle()}
              >
                <img
                  className="cursor-pointer w-[22px] h-[22px]"
                  src="/google.svg"
                  alt="Google"
                />
                <div className="text-[#D9D9D9] leading-7 text-[12px] sm:text-[16px]">
                  Sign in with Google
                </div>
              </button>
              <button
                className="rounded-lg border border-[#E0DECF] flex items-center justify-center gap-2 w-full h-12"
                onClick={signInWithMetaMask}
              >
                <MetamaskSvg width={22} height={22} />
                <div className="text-[#D9D9D9] leading-7 text-[12px] sm:text-[16px]">
                  Sign in with MetaMask
                </div>
              </button>
            </div>

            <div className="mt-3 text-green-500 text-[12px] text-center">
              {stateText}
            </div>
            {error && (
              <div className="mt-1 text-[red] text-[12px] text-center">
                {error}
              </div>
            )}

            <div className="w-full px-7 gap-2 justify-center items-center mt-6 flex flex-row">
              <div className="h-[0.351px] bg-[#E0DECF] w-full" />
              <div className="text-[#E0DECF] text-[10px] leading-[15px] min-w-fit">
                Or Login with E-mail
              </div>
              <div className="h-[0.351px] bg-[#E0DECF] w-full" />
            </div>
            <form onSubmit={handleLogin} className="w-full flex flex-col mt-8">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-start w-full min-h-12 px-5 py-2 border border-[#F7FF98] rounded-lg focus:outline-none bg-transparent text-[14px] text-[#D9D9D9] leading-5"
                  required
                />
              </div>
              <div className="relative mt-3">
                <input
                  type={isPasswordVisible ? "text" : "password"}
                  value={password}
                  placeholder="Password"
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
              <button
                type="submit"
                className="mt-6 text-[#1C1C1C] border border-[#F7FF98] hover:text-[#F7FF98] font-bold leading-7 bg-[#F7FF98] hover:bg-transparent rounded-lg w-full py-[10px] transition-all ease-in-out duration-300"
              >
                Continue
              </button>
            </form>
          </div>
          <div className="mt-10 w-full flex flex-col gap-7">
            <div className="flex items-center justify-between">
              <div className="text-[#E0DECF] leading-7 text-[12px] sm:text-[16px]">
                No account?&nbsp;
                <div
                  className="text-[#F7FF98] font-bold leading-7 inline-block cursor-pointer hover:underline transition-all duration-300 ease-in-out text-[12px] sm:text-[16px]"
                  onClick={() => handleNavigation("/register")}
                >
                  Sign Up
                </div>
              </div>
              <div
                className="underline text-[#E0DECF] cursor-pointer hover:text-[#F7FF98] transition-all duration-300 ease-in-out text-[12px] sm:text-[16px]"
                onClick={() => router.push("/forgot-password")}
              >
                Forgot Password?
              </div>
            </div>
            <div className="w-full text-[#E0DECF] leading-7 text-center text-[12px] sm:text-[16px]">
              By clicking continue you agree to our&nbsp;
              <p className="underline inline-block text-[#E0DECF] leading-7 hover:cursor-pointer hover:text-[#F7FF98] transition-all duration-300 ease-in-out text-[12px] sm:text-[16px]">
                Terms of Service
              </p>
              &nbsp;and&nbsp;
              <p className="underline inline-block text-[#E0DECF] leading-7 hover:cursor-pointer hover:text-[#F7FF98] transition-all duration-300 ease-in-out text-[12px] sm:text-[16px]">
                Privacy Policy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
