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
      <div className="flex text-xl mx-1 max-sm:text-sm">
        <Link href={"/"} className="flex mx-4">
          <AiOutlineHome />
          خانه
        </Link>
        <Link href={"/buy-products"} className="flex">
          <FiAlignCenter />
          آگهی ها
        </Link>
      </div>
      <h1 className="text-4xl text-orange-800 [text-shadow:2px_2px_2px_var(--tw-shadow-color)] shadow-green-800 max-sm:text-2xl">استوک کده</h1>
      {data ? (
        <div className="text-2xl  border rounded-lg border-green-400  mx-10 bg-lime-300 box-border">
          <Link href={"/account"}>
            <RiAccountPinBoxFill className="flex text-4xl " />
          </Link>
        </div>
      ) : (
        <div className="text-2xl  border rounded-lg border-green-400 bg-indigo-500 p-1 m-3">
          <Link href={"/signin"} className="flex">
            ورود
            <LiaSignInAltSolid  />
          </Link>
        </div>
      )}
    </div>
  );
}

export default Header;
