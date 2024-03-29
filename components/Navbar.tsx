import Link from "next/link";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="relative z-50 flex items-center justify-between h-20 mx-28 bg-transparent text-grey-700 overflow-x-hidden">
      <div className="hidden md:flex">
        <Link href="/" className=" items-center text-xl font-bold">
          <Image
            src="/images/logo.svg"
            alt="Logo"
            width={200}
            height={200}
            className="w-2/3  xl:w-full "
          />
        </Link>
      </div>

      <div>
        <ul className="hidden md:flex space-x-4  text-sm font-bold gap-12 pl-[400px]  ">
          <li>
            <Link
              href="/"
              className="transition-all cursor-pointer hover:text-gray-500"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="transition-all cursor-pointer hover:text-gray-500"
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="transition-all cursor-pointer hover:text-gray-500"
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="transition-all cursor-pointer hover:text-gray-500"
            >
              Shope
            </Link>
          </li>
        </ul>
      </div>

      <div>
        <form className="w-[300px] relative">
          <div className="relative">
            <input
              type="search"
              placeholder="Search"
              className="w-full p-4 rounded-lg text-sm font-bold bg-white border pl-12 placeholder-black drop-shadow-md"
            />
            <button className="absolute left-1 top-1/2 -translate-y-1/2 ">
              <AiOutlineSearch className=" pl-4 w-10 h-10"/>
            </button>

            <button className="absolute right-1 top-1/2 -translate-y-2/3 ">
              <Image
                src="/images/cart.svg"
                alt="Logo"
                width={200}
                height={200}
                className="w-5 xl:w-10 "
              />
            </button>
          </div>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
