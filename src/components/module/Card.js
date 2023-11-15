import { sp } from "@/utils/replaceNumber";
import Link from "next/link";
import { icons } from "src/constant/icons";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiLeftArrowAlt } from "react-icons/bi";

function Card({ data }) {
  return (
    <div className=" w-80 border rounded-lg p-3 m-3 ">
      <div className=" text-6xl  flex border rounded-xl items-center justify-center shadow-xl ">
        {icons[data.category]}
      </div>
      <p className=" font-normal mx-3 mt-2">{data.title}</p>
      <p className="flex text-sm mt-2">
        <HiOutlineLocationMarker />
        {data.location}
      </p>
      <span className=" block text-sm font-normal mt-3">
        تومان: {sp(data.price)}{" "}
      </span>
      <Link
        className=" flex items-center justify-center mt-5 font-normal text-blue-700 text-base border rounded-3xl"
        href={`/buy-products/${data._id}`}
      >
        مشاهده آکهی
        <BiLeftArrowAlt />
      </Link>
    </div>
  );
}

export default Card;
