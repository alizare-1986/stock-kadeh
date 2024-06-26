import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { BiChevronLeftCircle } from "react-icons/bi";
import LogoutButton from "@/module/LogoutBotton";
function SidebarAccount({ children, role, email }) {
  return (
    <div className=" flex-col mt-3">
      <div className="flex items-center h-fit justify-around border shadow-xl shadow-slate-500 rounded-lg max-md:flex-col mx-5 bg-purple-400  ">
        <div className=" flex items-center max-sm:flex-col max-sm:mt-6">
          <p className="ml-1">{role === "ADMIN" ? "آدمین" : "کاربر"}</p>

          <CgProfile className=" text-5xl" />

          <p className=" w flex justify-center text-gray-600 text-xl font-normal m-2 border rounded-md items-center p-2  shadow-md shadow-slate-900 bg-blue-300">
            {email}
          </p>
          {role === "ADMIN" ? (
            <Link href={"/admin"}>در انتظار تایید...</Link>
          ) : null}
        </div>
        <div className="flex  m-7 text-lg max-sm:flex-col ">
          <Link href={"/account"} className="flex m-2">
            <BiChevronLeftCircle /> حساب کاربری
          </Link>
          <Link href={"/account/my-product"} className="flex m-2">
            <BiChevronLeftCircle /> آگهی های من
          </Link>
          <Link href={"/account/add"} className="flex m-2">
            <BiChevronLeftCircle /> ثبت آگهی
          </Link>
        </div>
        <LogoutButton />
      </div>

      <div className=" w-full mt-7"> {children}</div>
    </div>
  );
}

export default SidebarAccount;
