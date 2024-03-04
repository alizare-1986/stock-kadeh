import Product from "@/models/Product";
import Card from "@/module/Card";
import connectDb from "@/utils/connectDb";
import Link from "next/link";
import { FaShopify } from "react-icons/fa";
import { FaSellcast } from "react-icons/fa6";
import { MdMobileFriendly } from "react-icons/md";
import { MdMobileScreenShare } from "react-icons/md";
import { icons } from "src/constant/icons";

async function HomePage() {
  await connectDb();
  const products = await Product.find();

 const product = products.slice(0,3)

  return (
    <div className=" mb-10">
      <div className="flex justify-center items-center  text-4xl p-10 text-blue-700 max-sm:text-xl">
        سایت نمایشگاهی گوشیهای شما
      </div>
      <div className="flex justify-center  items-center  text-2xl p-5 text-blue-700 max-sm:text-2xl">
        <p className="mx-6 flex border p-1 rounded-lg shadow-xl shadow-red-500">
          خرید <FaShopify />
        </p>
        <p className="mx-6 flex border p-1 rounded-lg shadow-xl shadow-red-500">
          فروش
          <FaSellcast />
        </p>
      
        <p className="mx-6 flex border p-1 rounded-lg shadow-xl shadow-gray-500">
          کارکرده <MdMobileScreenShare />
        </p>
        <p className="mx-6 flex border p-1 rounded-lg shadow-xl shadow-gray-500">
          آکبند
          <MdMobileFriendly />
        </p>
      </div>
      <div className=" flex justify-between items-center mt-10 border mx-40 text-6xl p-5 max-sm:mx-10 rounded-2xl bg-green-300 shadow-2xl shadow-teal-800">
        <Link href={"buy-products?category=apple"}>{icons.apple}</Link>
        <Link href={"buy-products?category=samsung"}>{icons.samsung}</Link>
        <Link href={"buy-products?category=xiaomi"}>{icons.xiaomi}</Link>
        <Link href={"buy-products?category=otherbrand"}>
          {icons.otherbrand}
        </Link>
      </div>
      <div className="flex flex-col justify-center rounded-2xl mt-10 items-center border mx-4 ">
       
      <div className="flex  mt-10 flex-wrap justify-center items-center  ">
        {product.map((item) => (
          <Card key={item._id} data={item} />
        ))}
      </div>
      <Link className="m-5 text-blue-700" href={"/buy-products"}>تمام آگهی ها</Link>
      </div>
    </div>
  );
}

export default HomePage;
