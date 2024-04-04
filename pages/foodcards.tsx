import Image from "next/image";
import "../app/globals.css";

const FoodCard = () => {
  return (
    <div className="flex h-screen justify-center items-center ">
    <div className=" rounded-3xl border w-60 "
    >

      <div>
        <Image
          src="/images/burg.svg"
          alt="Burger"
          width={2000}
          height={2000}
          className="relative justify-center "
          style={{ marginTop: "-40%" }}
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <div className="justify-center items-center">
          <h2 className="text-lg text-center font-bold">Burger</h2>
          <p className="text-sm text-center font-semibold text-gray-600">
            Mushroom Sauce
          </p>
          <p className="text-sm text-center font-semibold text-gray-600">$5</p>
        </div>
        <div>
          <div className="flex justify-center items-center space-x-1" style={{ marginBottom: "-25%" }} >
            <Image
              src="/images/arrowl.svg"
              alt="Play Button"
              width={64}
              height={64}
              className="w-15 relative justify-center"
            />
            <Image
              src="/images/arrowr.svg"
              alt="Play Button"
              width={64}
              height={64}
              className="w-15 relative justify-center"
            />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FoodCard;

<FoodCard />;
