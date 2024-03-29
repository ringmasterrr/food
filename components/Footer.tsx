import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-black py-8 mx-52">
      <div className=" mx-auto px-4 flex flex-wrap items-start justify-between">
        <div className="flex flex-col mb-4 sm:mb-0 w-1/5">
          <div className="mr-4 ">
            <Image
              src="/images/logo.svg"
              alt="Logo"
              width={100}
              height={100}
              className="w-28 h-28 items-start justify-start"
            />
          </div>

          <div>
            <p className="text-sm text-left text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo
              libero viverra dapibus odio sit malesuada in quis. Arcu tristique
              elementum viverra integer id.
            </p>
          </div>

          <div className="flex items-center mt-4">
            <div className="rounded-full bg-[#EFAB68]  h-8 w-8 flex items-center justify-center mr-2">
              <FaFacebook size={30} className="w-4 text-orange-500"/>
            </div>
            <div className="rounded-full bg-[#EFAB68]  h-8 w-8 flex items-center justify-center mr-2">
              <FaTwitter size={30} className="w-4 text-orange-500 "/>
            </div>
            <div className="rounded-full bg-[#EFAB68] - h-8 w-8 flex items-center justify-center mr-2">
              <FaInstagram size={30} className="w-4 text-orange-500"/>
            </div>
            <div className="rounded-full bg-[#EFAB68]  h-8 w-8 flex items-center justify-center">
              <FaLinkedin size={30} className="w-4 text-orange-500"/>

        </div>
        </div>
        </div>

        <div className="mt-12">
          <div>
            <h2 className="font-semibold text-xl mb-8">Opening Restaurant</h2>
            <ul className="flex flex-col justify-end text-gray-500 text-sm ">
              <li>Sat-Wet: 09:00am-10:00PM</li>
              <li>Sat-Wet: 09:00am-10:00PM</li>
              <li>Sat-Wet: 09:00am-10:00PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div>
            <h2 className="font-semibold text-xl mb-8">User Link</h2>
            <ul className="flex flex-col justify-end ">
              <li>
                <a className="text-gray-500  text-sm hover:text-black">Home</a>
              </li>
              <li>
                <a className="text-gray-500 text-sm hover:text-black">About</a>
              </li>
              <li>
                <a className="text-gray-500 text-sm hover:text-black">
                  Services
                </a>
              </li>
              <li>
                <a className="text-gray-500 text-sm hover:text-black">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <div>
            <h2 className="font-semibold text-xl mb-8">Contact Us</h2>
            <ul className="flex flex-col justify-end text-gray-500 text-sm ">
              <li>
                <p>
                  1234 Country Club Ave
                  <br />
                  NC 123456, London, UK <br />
                  +0123 456 7891 <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
