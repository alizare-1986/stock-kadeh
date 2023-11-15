import BoxDetails from "@/module/BoxDetails";
import { sp } from "@/utils/replaceNumber";
import { icons } from "src/constant/icons";

function DetailsPage({ data }) {
  return (
    <div className=" flex flex-col mt-4 items-center border rounded-xl mx-40 max-sm:mx-12">
      <p className=" text-8xl mt-5">{icons[data.category]}</p>
      <div className="flex flex-col justify-center items-center mt-2">
        <BoxDetails>
         
          <p className=" text-lg font-normal    text-blue-700">
            شرکت سازنده
          </p>
          
          <p className="flex text-lg"> {data.category}</p>
        </BoxDetails>
        <BoxDetails>
        <p className=" text-lg font-normal  text-blue-700">
          مدل گوشی
        </p>
        <p>{data.title}</p></BoxDetails>
       
        <BoxDetails>
        <p className=" text-lg font-normal  text-blue-700">
          قیمت
        </p>
        <p>تومان :  {sp(data.price)}
        </p></BoxDetails>
        <BoxDetails>
        <p className=" text-lg font-normal  text-blue-700">
          فروشگاه
        </p>
        <p>{data.shop}</p>
        </BoxDetails>
        <BoxDetails>
        <p className=" text-lg font-normal  text-blue-700">
          تلفن تماس
        </p>
        <p>{data.phone}</p>
        </BoxDetails>
        <BoxDetails>
        <p className=" text-lg font-normal  text-blue-700">
          آدرس
        </p>
        <span>{data.location}</span>
        </BoxDetails>
       
        <p className=" text-lg font-normal  text-blue-700">
          توضیحات گوشی
        </p>
        <p className=" mt-2">{data.description}</p>
        <div className=" flex mt-5">
          <p className=" text-lg font-normal border-b-2 mb-5 pb-3">
            تاریخ آگهی
          </p>
          <p className=" mx-2 border p-1 h-8  rounded-xl  text-blue-700">
            {new Date(data.constructionDate).toLocaleDateString("fa-IR")}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
