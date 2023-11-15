"use client"
import Card from "./Card";
import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AccountCard({ data }) {
  const router = useRouter()
  const editHandler = ()=>{
    router.push(`/account/my-product/${data._id}`)
  }
  const deleteHandler =async()=>{
    const res = await fetch(`/api/product/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    console.log(result);
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.replace("/account/my-product")
      router.refresh();
    }
  }
  return (
    <div className="flex flex-col border rounded-xl border-green-700 w-96 mb-5 m-5">
      <div className=" flex justify-center items-center ">
      <Card  data={data} />
      </div>
      <div className="flex justify-center  p-3 ">
        <button onClick={editHandler}  className=" flex ml-2 justify-between items-center w-18 p-1 cursor-pointer h-8 border text-base rounded-lg border-lime-600">
          ویرایش
          <FiEdit className=" text-blue-700"/>
        </button>
        <button onClick={deleteHandler} className=" flex justify-between items-center w-18 p-1 cursor-pointer h-8 border text-base rounded-lg border-lime-600">
          حذف
          <AiOutlineDelete className="text-red-600" />
        </button>
      </div>
      <Toaster/>
    </div>
  );
}

export default AccountCard;
