import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { BiChevronLeftCircle } from "react-icons/bi";
function SidebarAccount({ children, data }) {
  return (
    <div className=" flex-col mt-3">
      <div className="flex items-center h-fit justify-around border shadow-xl shadow-slate-500 rounded-lg max-sm:flex-col mx-12 bg-purple-400 ">
        <div className=" flex items-center max-sm:flex-col max-sm:mt-6">
          <CgProfile className=" text-5xl" />
          <p className=" w-64 flex justify-center text-gray-600 text-xl font-normal m-2 border rounded-md items-center p-2  shadow-md shadow-slate-900 bg-blue-300">
            {data.email}
          </p>
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
      </div>

      <div className=" w-full mt-7"> {children}</div>
    </div>
  );
}

export default SidebarAccount;
