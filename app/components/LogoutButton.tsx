"use client";

import { useRouter } from "next/navigation";
import { resetAuthCookies } from "../lib/actions";

import MenuLink from "./navbar/MenuLink";
import { cookies } from "next/headers";

const LogoutButton: React.FC = () => {
  const router = useRouter();
  const submitLogout = async () => {
    resetAuthCookies();
    router.push("/");
  };
  return <MenuLink lable="Log out" onClick={submitLogout} />;
};
export default LogoutButton;
