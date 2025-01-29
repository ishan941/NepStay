"use client";

import Image from "next/image";
import Modal from "./Modal";
import React, { useState } from "react";
import useAddPropertyModal from "@/app/hooks/useAddPropertyModal";
import CustomButton from "../forms/CustomButton";
import Categories from "../addproperty/Categories";
import SelectCountry, { SelectCountryValue } from "../forms/SelectCountry";

const AddPropertyModel = () => {
  //
  // states
  const [currentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  //
  //
  const addPropertymodal = useAddPropertyModal();
  //
  //set datas
  const setCategory = (categories: string) => {
    setDataCategory(categories);
  };
  //
  //

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          {" "}
          <h2 className="mb-6 text-2xl"> Choose categories</h2>
          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />
          <CustomButton label={"Next"} onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <p className="mb-6, text-2xl">Describe your place</p>
          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label> Title</label>
              <input
                className="w-full p-4 border border-gray-600 rounded-xl"
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
              />
              <label> Description</label>
              <textarea
                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
              ></textarea>
            </div>
          </div>
          <CustomButton label={"Next"} onClick={() => setCurrentStep(3)} />{" "}
          <CustomButton
            className="mt-2 bg-gray-300 hover:bg-gray-500 text-gray-800 hover:text-white border-gray-400"
            label={"Previous"}
            onClick={() => setCurrentStep(1)}
          />
        </>
      ) : currentStep == 3 ? (
        <>
          <h1 className="mb-6, text-2xl">Details</h1>
          <div className="flex flex-col space-y-2 mb-2">
            <label> Price per night</label>
            <input
              className="w-full p-4 border border-gray-600 rounded-xl"
              type="number"
              value={dataPrice}
              onChange={(e) => setDataPrice(e.target.value)}
            />{" "}
            <label>Maximum number of Guests</label>
            <input
              className="w-full p-4 border border-gray-600 rounded-xl"
              type="number"
              value={dataGuests}
              onChange={(e) => setDataGuests(e.target.value)}
            />
            <div className="flex flex-row w-full">
              <div className="flex flex-col w-full">
                <label>Bedrooms</label>
                <input
                  className="w-full p-4 border border-gray-600 rounded-xl"
                  type="number"
                  value={dataBedrooms}
                  onChange={(e) => setDataBedrooms(e.target.value)}
                />
              </div>
              <div className="flex flex-col w-full px-2">
                <label>Bathrooms</label>
                <input
                  className="w-full p-4 border border-gray-600 rounded-xl"
                  type="number"
                  value={dataBathrooms}
                  onChange={(e) => setDataBathrooms(e.target.value)}
                />
              </div>
            </div>
          </div>
          <CustomButton label={"Next"} onClick={() => setCurrentStep(4)} />{" "}
          <CustomButton
            className="mt-2 bg-gray-300 hover:bg-gray-500 text-gray-800 hover:text-white border-gray-400"
            label={"Previous"}
            onClick={() => setCurrentStep(2)}
          />
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="mb-6, text-2xl">Location</h2>
          <div className="mb-2 flex flex-col space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>
          <CustomButton label={"Next"} onClick={() => setCurrentStep(5)} />{" "}
          <CustomButton
            className="mt-2 bg-gray-300 hover:bg-gray-500 text-gray-800 hover:text-white border-gray-400"
            label={"Previous"}
            onClick={() => setCurrentStep(3)}
          />
        </>
      ) : (
        <p>step 2</p>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertymodal.isOpen}
        close={addPropertymodal.close}
        lable="Add property"
        content={content}
      />
    </>
  );
};

export default AddPropertyModel;
