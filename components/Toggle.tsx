"use client"
import { motion } from "framer-motion";
import { useState } from "react";

// Import your images
import dineInIcon from "../public/images/dine.svg";
import bikeDeliveryIcon from "../public/images/bike.svg";
import Image from "next/image";

export default function Toggle() {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-center">
      <div
        onClick={() => setToggle(!toggle)}
        className={`flex h-11 w-52 cursor-pointer rounded-full border-2 border-[#F5DDC4]  ${
          toggle ? "justify-start bg-[#FFF]" : "justify-end bg-[#F5DDC4]"
        } p-[3px] pt-[2px] relative`}
      >
        <motion.div
          className={`h-9 w-9 rounded-full ${toggle ? "bg-[#F48E28]" : "bg-white"}`}
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
        >
          <Image src={toggle ? dineInIcon : bikeDeliveryIcon} alt="Toggle Icon" className="h-full w-full object-cover rounded-full p-1" />
        
        </motion.div>
        <div className="absolute inset-0 flex items-center px-3 text-[#F48E28] text-sm font-bold" style={{ left: toggle ? "auto" : "5px", right: toggle ? "5px" : "auto" }}>
          {toggle ? "Dine in" : "Bike Delivery "}
        </div>
      </div>
    </div>
  );
}
