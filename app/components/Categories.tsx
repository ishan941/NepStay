import Image from "next/image";
import React from "react";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2">
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category -Beach"
          width={20}
          height={20}
        />
        <span className="text-xs">Beach</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2">
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category -Beach"
          width={20}
          height={20}
        />
        <span className="text-xs">Villas</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2">
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category -Beach"
          width={20}
          height={20}
        />
        <span className="text-xs">Home</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2">
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category -Beach"
          width={20}
          height={20}
        />
        <span className="text-xs">Page</span>
      </div>
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2">
        <Image
          src="/icn_category_beach.jpeg"
          alt="Category -Beach"
          width={20}
          height={20}
        />
        <span className="text-xs">Water</span>
      </div>
    </div>
  );
};

export default Categories;
