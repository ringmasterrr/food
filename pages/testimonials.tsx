import React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Heading = () => (
  <div className="items-center my-24 ">
    <div className="text-center justify-between mb-9">
      <p className="text-base font-semibold text-[#F48E28]  ">Services</p>
      <p className="text-3xl font-extrabold">Why Choose Our Favorite Food</p>
    </div>
  </div>
);

const Testimonials = () => {
  const products = [
    {
      id: 1,
      name: "William Vacuum",
      Occupation: "Founder",
      imgsrc: "/images/photos/man.png",
      Message:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus",
    },
    {
      id: 2,
      name: "William Piano",
      Occupation: "Founder",
      imgsrc: "/images/photos/man.png",
      Message:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor egestas mus",
    },
    {
      id: 3,
      name: "William Keyboard",
      Occupation: "Founder",
      imgsrc: "/images/photos/man.png",
      Message:
        "“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet nisl tincidunt adipiscing dictumst blandit hac. Lectus cras velit sed dignissim ac, aliquet. Metus egestas habitant feugiat neque ultrices nunc, dolor Message",
    },
  ];

  return (
    <div className="mx-28 py-20 ">
      <Heading />
      <div className="w-full flex justify-center ">
        <div className="w-1/2 flex justify-center items-center  z-50">
          <Carousel
            className="w-9/12 rounded-3xl"
            style={{ boxShadow: "0 0 30px rgba(0, 0, 0, 0.1)" }}
          >
            <CarouselContent>
              {products.map((product, idx) => (
                <CarouselItem
                  key={idx}
                  className="w-48 min-h-96 flex flex-col justify-center items-center px-12 "
                >
                  <div className="flex items-center gap-3 ">
                    <div className="flex">
                      <Image
                        src={product.imgsrc}
                        alt="Product"
                        className="w-14  rounded-full"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div>
                      <div className="flex justify-start items-start text-black w-fit text-sm font-bold bg-white  rounded-3xl flex-col ">
                        {product.name}
                      </div>
                      <div className="flex justify-start items-start text-xs ">
                        {product.Occupation}
                      </div>
                    </div>
                  </div>

                  <ul className="text-center text-sm font-semibold  my-2">
                    {product.Message}
                  </ul>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#F48E28]  z-50 absolute translate-x-8 " />
            <CarouselNext className="bg-[#F48E28]  z-50 absolute -translate-x-8" />
          </Carousel>
        </div>
        <div className="w-1/2 flex items-end justify-center ">
          <Image
            src="/images/banner.svg"
            alt="howto"
            width={1000}
            height={1000}
            className="p-2 w-10/12 "
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
