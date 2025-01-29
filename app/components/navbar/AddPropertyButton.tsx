"use client";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import React from "react";
import LoginModal from "../modals/LoginModal";
import useLoginModal from "@/app/hooks/useLoginModal";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const addPropertymodal = useAddPropertyModal();
  const loginModal = useLoginModal();
  const airbnbYourHome = () => {
    if (userId) {
      addPropertymodal.open();
    } else {
      loginModal.open();
    }
  };
  return (
    <div
      onClick={airbnbYourHome}
      className="cursor-pointer p-2 text-sm font-semibold rounded-full hover:bg-green-100"
    >
      {" "}
      Django your home{" "}
    </div>
  );
};

export default AddPropertyButton;
