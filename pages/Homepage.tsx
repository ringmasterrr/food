import Image from "next/image";
import Link from "next/link";
import Toggle from "@/components/Toggle";
import { FaClock, FaMapPin, FaPhone } from "react-icons/fa";
import ProductGallery from "./products";
import { FaAngleRight } from "react-icons/fa";
import Whychooseus from "./why";
import Howtowork from "./how";
import Testimonials from "./testimonials";
import Newsletter from "./newsletter";

const Homepage = () => {
  return (
    <>
      <div className=" flex mx-28 pt-10 justify-between">
        <div className="flex flex-col items-start w-1/3 justify-between">
          <Toggle />
          <div className="my-10">
            <h1 className="text-7xl font-bold leading-[100px] text-left">
              The Fastest
            </h1>
            <h1 className="text-7xl font-bold leading-[100px] text-left">
              Delivery
            </h1>
            <h1 className="text-7xl font-bold leading-[100px] text-left">
              In <span className="text-[#F48E28]">Your City</span>
            </h1>

            <p className=" text-base font-semibold pt-10 leading-[21.94px] text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo,
              sed proin amet a vestibulum enim volutpat lacus. Volutpat arcu sit
              sed tortor etiam volutpat ipsum.{" "}
            </p>
          </div>

          <div className="pt-8 flex w-full justify-between items-center">
            <button className=" bg-gradient-to-b from-[#EFAB68] to-[#F48E28] text-white text-lg font-bold px-4 py-2 w-[235px] h-[70px] rounded-lg ">
              Order Now
            </button>

            <button
              className="flex items-center justify-center w-16 h-16 rounded-full bg-white shadow-none"
              style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.1)" }}
            >
              <Image
                src="/images/play.svg"
                alt="Play Button"
                width={32}
                height={32}
                className="pl-2 w-9"
              />
            </button>
            <Link
              href="#"
              className="text-black no-underline text-xl font-bold pr-10 "
            >
              Order Process
            </Link>
          </div>
        </div>
        <div className=" flex items-start pt-48 pr-32">
          <Image
            src="/images/Abstract.svg"
            alt="Abstract art"
            width={200}
            height={200}
            className="w-[450px] justify-center"
          />
        </div>
        <div className=" items-center justify-center  h-2/3 w-1/4 rounded-3xl bg-gradient-to-b from-[#D9D9D9] to-white overflow-visible ">
          <div className=" absolute w-[500px] -translate-x-1/3 grid grid-cols-2  mt-4 overflow-visible">
            <Image
              src="/images/foods/Burger.svg"
              alt="Abstract art"
              width={200}
              height={200}
              className="w-[300px] justify-center"
            />

            <Image
              src="/images/foods/combo.svg"
              alt="Abstract art"
              width={200}
              height={200}
              className="w-[300px] justify-center"
            />

            <Image
              src="/images/foods/pizza.svg"
              alt="Abstract art"
              width={200}
              height={200}
              className="w-[300px] justify-center"
            />

            <Image
              src="/images/foods/cake.svg"
              alt="Abstract art"
              width={200}
              height={200}
              className="w-[300px] justify-center"
            />
          </div>
        </div>
      </div>

      <div
        style={{ boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}
        className="mx-28 rounded-3xl p-6 my-16"
      >
        <div className="flex justify-evenly items-center">
          <div className="flex flex-col items-center w-56">
            <div className="rounded-full bg-[#F48E28] w-12 h-12 flex justify-center items-center mb-2">
              <FaClock color="white" size={24} />
            </div>
            <div className="text-center">
              <p className="font-bold mb-1">Today 10:00am - 10:00pm</p>
              <p className="font-medium text-xs">Working time</p>
            </div>
          </div>

          <div className="border-l-2 border-slate-150 h-24"></div>

          <div className="flex flex-col items-center w-56">
            <div className="rounded-full bg-[#F48E28] w-12 h-12 flex justify-center items-center mb-2">
              <FaMapPin color="white" size={24} />
            </div>
            <div className="text-center">
              <p className="font-bold mb-1">Washington, D.C., DC, USA</p>
              <p className="font-medium text-xs">Our Location</p>
            </div>
          </div>

          <div className="border-r-2 border-slate-150 h-24 "></div>

          <div className="flex flex-col items-center w-56">
            <div className="rounded-full bg-[#F48E28] w-12 h-12 flex justify-center items-center mb-2">
              <FaPhone color="white" size={24} />
            </div>
            <div className="text-center">
              <p className="font-bold mb-1">+0123 456 7891</p>
              <p className="font-medium text-xs">Phone Number</p>
            </div>
          </div>
        </div>
      </div>

      <ProductGallery/>

      <Whychooseus/>

      <Howtowork/>

      <Testimonials/>

      <Newsletter/>

    </>
  );
};

export default Homepage;
