"use client";

import React from "react";

interface MenuLinkProps {
  lable: string;
  onClick: () => void;
}
const MenuLink: React.FC<MenuLinkProps> = ({ lable, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-5 py-4 text-center hover:bg-gray-100 transition"
    >
      {lable}
    </div>
  );
};

export default MenuLink;
