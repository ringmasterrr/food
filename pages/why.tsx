import React from "react";

import Image from "next/image";
import { FaUtensils } from "react-icons/fa";
import { FaClock, FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const Whychooseus = () => {
  return (
    <div className=" items-center my-44 ">
      <div className="items-center my-24 ">
        <div className="text-center justify-between mb-9">
          <p className="text-base font-semibold text-[#F48E28]  ">Services</p>
          <p className="text-3xl font-extrabold">
            Why Choose Our Favorite Food
          </p>
        </div>
      </div>

      <div className="grid grid-cols-3 mx-28 place-items-center">
        <div className="w-96 rounded-3xl flex flex-col items-center justify-center text-center border-gray-300 border-[1px] h-full px-12 py-20">
          <div className=" rounded-full bg-orange-200 flex items-center justify-center w-14 h-14 ">
            <FaUtensils
              size={16}
              className="mx-auto mt-auto mb-4 text-[#F48E28] p-3 w-14 h-14 flex items-center justify-center"
            />
          </div>
          <h2 className="text-lg mt-6 font-semibold">Qualityfull Food</h2>
          <p className="text-xs mt-4 font-semibold text-shadow">
            But I must explain to you how all this mistaken idea of denouncing
            pleasur and prasising pain was bron.
          </p>
        </div>
        <div style={{ boxShadow: "0 0 25px rgba(0, 0, 0, 0.2)" }} className="w-96 rounded-3xl flex flex-col items-center justify-center text-center border-gray-300 h-full px-12 py-20">
          <div className=" rounded-full bg-orange-200 flex items-center justify-center w-14 h-14 ">
            <FaUtensils
              size={16}
              className="mx-auto mt-auto mb-4 text-[#F48E28] p-3 w-14 h-14 flex items-center justify-center"
            />
          </div>
          <h2 className="text-lg mt-6 font-semibold">Qualityfull Food</h2>
          <p className="text-xs mt-4 font-semibold text-shadow">
            But I must explain to you how all this mistaken idea of denouncing
            pleasur and prasising pain was bron.
          </p>
        </div>
        <div className="w-96 rounded-3xl flex flex-col items-center justify-center text-center border-gray-300 border-[1px] h-full px-12 py-20">
          <div className=" rounded-full bg-orange-200 flex items-center justify-center w-14 h-14 ">
            <FaUtensils
              size={16}
              className="mx-auto mt-auto mb-4 text-[#F48E28] p-3 w-14 h-14 flex items-center justify-center"
            />
          </div>
          <h2 className="text-lg mt-6 font-semibold">Qualityfull Food</h2>
          <p className="text-xs mt-4 font-semibold text-shadow">
            But I must explain to you how all this mistaken idea of denouncing
            pleasur and prasising pain was bron.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Whychooseus;
