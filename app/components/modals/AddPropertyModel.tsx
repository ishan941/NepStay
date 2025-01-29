"use client";

import Image from "next/image";
import Modal from "./Modal";
import React from "react";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
const AddPropertyModel = () => {
  const addPropertymodal = useAddPropertyModal();
  return (
    <>
      <Modal
        isOpen={addPropertymodal.isOpen}
        close={addPropertymodal.close}
        lable="Add property"
        content={<p>yo</p>}
      />
    </>
  );
};

export default AddPropertyModel;
