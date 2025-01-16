"use client";

import React from "react";
import { useState } from "react";
import useLoginModal from "@/app/hooks/useLoginModal";
import Modal from "./Modal";
import CustomButton from "../forms/CustomButton";

const LoginModal = () => {
  const LoginModal = useLoginModal();
  const content = (
    <>
      <h2 className="mb-6 text-2xl">Welcome to NepStay, Please login</h2>
      <form className="space-y-4">
        <input
          placeholder="Your email address"
          type="email"
          className="w-full h-[54px] px-4 border rounded-xl"
        />
        <input
          placeholder="Your password"
          type="password"
          className="w-full h-[54px] px-4 border rounded-xl"
        />
        <div className="p-5 bg-airbnb text-white rounded-xl opacity-85">
          The Error message
        </div>
        <CustomButton label="Submit" onClick={() => console.log("csd")} />
      </form>
    </>
  );
  return (
    <Modal
      isOpen={LoginModal.isOpen}
      close={LoginModal.close}
      lable="Login "
      content={content}
    />
  );
};

export default LoginModal;
