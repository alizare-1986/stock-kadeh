"use client";
import { e2p, sp } from "@/utils/replaceNumber";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

function AdminCard({
  data: { _id, title, phone, location, description, price },
}) {
  const router = useRouter();
  const publishHandler = async () => {
    const res = await fetch(`/api/product/publish/${_id}`, {
      method: "PATCH",
    });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };
  return (
    <div className="flex flex-row m-10 ">
      <div  className=" flex flex-col justify-center  items-center border rounded-xl w-80 p-10">
        <h3 className=" mb-3 text-lg">{title}</h3>
        <p className=" mb-3 text-lg">{description}</p>

        <span className=" mb-3 text-lg">{location}</span>
        <span className=" mb-3 text-lg">{e2p(phone)}</span>
        <span className=" mb-3 text-lg">{sp(price)}</span>

        <button className=" mb-3 text-lg text-blue-800 border w-40 rounded shadow-2xl shadow-blue-800" onClick={publishHandler}>انتشار</button>
      </div>
      <Toaster />
    </div>
  );
}

export default AdminCard;
