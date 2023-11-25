"use client";
import CustomDate from "@/module/CustomDate";
import Loader from "@/module/Loader";
import OptionInput from "@/module/OptionInput";
import TextInput from "@/module/TextInput";
import TextList from "@/module/TextList";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function AddProductPage({ data }) {
  const router = useRouter();
  const [product, setProduct] = useState({
    title: "",
    location: "",
    phone: "",
    price: "",
    shop: "",
    constructionDate: new Date(),
    category: "",
    description: [],
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (data) setProduct(data);
  }, [data]);
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/product", {
      method: "POST",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.replace("/account/my-product");
      router.refresh();
    }
  };
  const editHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/product", {
      method: "PATCH",
      body: JSON.stringify(product),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      toast.success(data.message);
      router.replace("/account/my-product");
      router.refresh();
    }
  };

  return (
    <div className=" flex flex-col mb-10 items-center border rounded-xl  h-fit shadow-xl shadow-violet-800 mx-60  justify-center max-sm:mx-6 max-md:mx-12 ">
      {/* <h3 className=" text-2xl text-blue-800 m-4">ثبت آگهی</h3> */}
      <h3 className=" text-2xl text-blue-800 m-4">
        {data ? "ویرایش آگهی" : "ثبت آگهی"}
      </h3>
      <OptionInput product={product} setProduct={setProduct} />
      <TextInput
        title="نام محصول"
        name="title"
        product={product}
        setProduct={setProduct}
      />
      <TextList
        title="توضیحات محصول"
        desc="description"
        product={product}
        setProduct={setProduct}
      />

      <TextInput
        title="قیمت "
        name="price"
        product={product}
        setProduct={setProduct}
      />
      <TextInput
        title="فروشگاه"
        name="shop"
        product={product}
        setProduct={setProduct}
      />
      <TextInput
        title="شماره تماس"
        name="phone"
        product={product}
        setProduct={setProduct}
      />
      <TextInput
        title="آدرس"
        name="location"
        product={product}
        setProduct={setProduct}
      />
      <CustomDate product={product} setProduct={setProduct} />

      {loading ? (
        <Loader />
      ) : data ? (
        <button
          className=" bg-gray-300 mb-8 border w-20 text-blue-900 rounded-lg p-1 shadow-lg shadow-neutral-700"
          onClick={editHandler}
        >
          ویرایش
        </button>
      ) : (
        <button
          className=" bg-red-200 mb-8 border w-20 text-blue-900 rounded-lg p-1 shadow-lg shadow-neutral-700"
          onClick={submitHandler}
        >
          ثبت آگهی
        </button>
      )}
      <Toaster />
    </div>
  );
}

export default AddProductPage;
