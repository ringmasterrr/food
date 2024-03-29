import React from "react";
import { FaStar } from "react-icons/fa";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa";

const ProductGallery = () => {
  const products = [
    {
      id: 1,
      name: "Gyro Sandwhich",
      image: "/images/foods/cards/sandwich.png",
      price: "$19.99",
      ratings: 4.5,
    },
    {
      id: 2,
      name: "Enchilade",
      image: "/images/foods/cards/beef.png",
      price: "$24.99",
      ratings: 3.8,
    },
    {
      id: 3,
      name: "Green Beans",
      image: "/images/foods/cards/beans.png",
      price: "$14.99",
      ratings: 4.2,
    },
    {
      id: 4,
      name: "Pizza",
      image: "/images/foods/cards/pizza.png",
      price: "$29.99",
      ratings: 4.8,
    },
    {
      id: 5,
      name: "Chicken Pot Pie",
      image: "/images/foods/cards/pie.png",
      price: "$9.99",
      ratings: 3.5,
    },
    {
      id: 6,
      name: "Green Salad",
      image: "/images/foods/cards/salad.png",
      price: "$39.99",
      ratings: 4.7,
    },
  ];

  return (
    <div>
      <div className="items-center mt-24 mb-14 ">
        <div className="text-center justify-between mb-9">
          <p className="text-base font-semibold text-[#F48E28]  ">Product</p>
          <p className="text-3xl font-extrabold">Most Popular Items</p>
        </div>

        <div className="grid grid-cols-3 mx-28 items-center justify-center h-full gap-y-28 ">
          {products.map((product) => (
            <div key={product.id} className="flex justify-center">
              <div className="w-96 border rounded-3xl shadow-md">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="w-full h-72 object-cover mb-1 rounded-tr-3xl rounded-tl-3xl"
                />

                {/* <div className="text-lg font-semibold mb-2 text-center">{product.name}</div> */}

                <div className="flex justify-between px-5 py-2">
                  <div className="text-lg font-bold">{product.name}</div>
                  <div className="items-center">
                    <div className=" flex mr-1 text-sm text-black ">
                      <FaStar className="text-yellow-500 mt-[2px] mr-[2px] " />{" "}
                      {product.ratings}
                    </div>
                  </div>
                </div>

                <div className="flex justify-between mb-2 px-5 py-2">
                  <button className="bg-gradient-to-b from-[#EFAB68] to-[#F48E28] text-white text-xs font-normal px-2 py-2 w-[100px] h-[30px] rounded-2xl">
                    Add to Cart
                  </button>
                  <div className="text-base font-medium">{product.price}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="relative">
          <button className=" items-center inline-flex bg-gradient-to-b from-[#EFAB68] to-[#F48E28] text-white text-base font-normal pl-4 px-1 w-[235px] rounded-full ">
          See More Product
            <span className="ml-auto">
              <Image
                src="/images/arrow.svg"
                alt="Play Button"
                width={128}
                height={128}
                className="p-2 w-16 "
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductGallery;
