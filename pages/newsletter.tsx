import React from "react";
import Image from "next/image";

const Newsletter = () => {
  return (
    <div className=" mx-52 my-28 items-center ">
      <div className=" flex justify-between rounded-3xl bg-black px-36 ">
        <div className="w-1/2">
          <Image
            src="/images/newsletterburger.svg"
            alt="howto"
            width={1000}
            height={1000}
            className=" w-8/12 object-cover transform scale-150 "
          />
        </div>
        <div className="flex flex-col w-2/5 text-white text-justify justify-center">
          <h1 className=" font-bold text-3xl mb-2">
            Subcribe To Our Newsletter
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipidrscing elit. Purus
            mauris sem sed urna venenatis vivamus. Egestas in velit nulla
            viverra turpis id ac. Amet faucibus tempus.
          </p>

          <div className="relative max-w-md w-full rounded-2xl overflow-hidden bg-white px-4 py-2 mt-3">
            <input
              type="email"
              placeholder="Type your email..."
              className="w-full px-3 py-2 rounded-l-md placeholder-slate-400 "
            />
            <button
              type="submit"
              className="bg-[#F48E28] text-white px-4 text-sm font-medium rounded-2xl absolute right-1 top-1 h-12  "
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
