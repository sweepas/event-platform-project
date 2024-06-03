"use client";

import { useRouter } from "next/navigation";


interface LoginBtnProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}



export const LoginBtn = ({
  children,
  mode = "redirect",
  asChild,
}: LoginBtnProps) => {
    const router = useRouter();
  const onClick = () => {
    router.push('/auth/login');
  };
  return <span onClick={onClick}>{children}</span>;
};
