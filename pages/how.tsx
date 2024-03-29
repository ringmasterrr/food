import React from "react";
import Image from "next/image";

const Howtowork = () => {
  return (
    <div className=" items-center ">
      <div className="items-center ">
        <div className="text-center justify-between">
          <p className="text-base font-semibold text-[#F48E28]  ">
            How to work
          </p>
          <p className="text-3xl font-extrabold">
            Food Us An Important Part Of A Balanced Diet
          </p>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/howto.svg"
          alt="howto"
          width={1600}
          height={450}
          className="p-2 w-4/5 "
        />
      </div>
    </div>
  );
};

export default Howtowork;
