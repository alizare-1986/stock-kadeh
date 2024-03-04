"use client";
import Link from "next/link";
import { RiAccountPinBoxFill } from "react-icons/ri";
import { LiaSignInAltSolid } from "react-icons/lia";
import { AiOutlineHome } from "react-icons/ai";
import { FiAlignCenter } from "react-icons/fi";
import { useSession } from "next-auth/react";
function Header() {
  const { data } = useSession();

  return (
    <div className=" flex p-1 h-20  border rounded-lg bg-blue-400 justify-between items-center  ">
      <div className="flex text-3xl mx-1 max-sm:text-sm">
        <Link href={"/"} className="flex mx-4 hover:scale-150">
          <AiOutlineHome />
        </Link>
        <Link href={"/buy-products"} className="flex mr-5 hover:scale-150">
          <FiAlignCenter />
        </Link>
      </div>
      <h1 className="text-4xl text-gray-800 [text-shadow:4px_4px_4px_var(--tw-shadow-color)] shadow-green-800 max-sm:text-2xl">استوک کده</h1>
      {data ? (
        <div className="text-2xl  border rounded-lg border-green-400  mx-10 bg-lime-300 box-border">
          <Link href={"/account"}>
            <RiAccountPinBoxFill className="text-4xl hover:scale-150" />
          </Link>
        </div>
      ) : (
        <div className=" flex flex-row text-2xl  items-center  border rounded-lg border-green-400 bg-indigo-500 p-1 m-3 hover:scale-110">
          <Link href={"/signin"} className="flex ">
            ورود
            <LiaSignInAltSolid   className=" text-3xl "/>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
