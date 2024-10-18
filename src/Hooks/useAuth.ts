// hooks/useAuth.ts
"use client";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const token = useSelector((state: any) => state.UserReducer.token);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);
};

export default useAuth;
