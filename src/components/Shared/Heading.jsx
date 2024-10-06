import React from "react";

const Heading = ({ title, text }) => {
  return (
    <div className="w-[30%] mx-auto text-center">
      <p className="text-[#D99904]">---{title}---</p>
      <h1 className="border-b-2 border-t-2 text-2xl py-2 mt-2 text-[#151515]">
        {text}
      </h1>
    </div>
  );
};

export default Heading;
