import React from "react";
import PropertyList from "../components/properties/PropertyList";

const MyProperties = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {" "}
        <PropertyList />
      </div>
    </main>
  );
};

export default MyProperties;
