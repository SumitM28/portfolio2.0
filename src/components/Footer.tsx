import React from "react";
import { AiTwotoneHeart } from "react-icons/ai";
export default function Footer() {
  return (
    <div className="max-w-screen-xl m-auto px-3 py-5 border-t-2 border-dark dark:border-light">
      <div className="flex md:justify-between dark:text-light flex-col md:flex-row items-center">
        <p className="">© 2023 Sumit Mahour. All Rights Reserved.</p>
        <p className="flex items-center gap-1">
          Made With <AiTwotoneHeart className="text-red-600" size={20} /> By
          Sumit Mahour
        </p>
      </div>
    </div>
  );
}
