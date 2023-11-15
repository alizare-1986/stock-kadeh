"use client";
import Loader from "@/module/Loader";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const signinHnadler = async (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("ایمیل معتبر وارد شود");
      return;
    }
    setLoading(true);
    const res = await signIn("credentials", {
    
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };
  return (
    <div className="flex flex-col justify-center items-center mt-auto border border-solid shadow-lg  mb-8 p-20">
      <h4 className="text-sky-500 font-semibold text-3xl mb-5 ">فرم ورود </h4>
      <form className="flex flex-col shadow-lg border border-solid border-amber-600 rounded-lg p-10 mb-8 bg-indigo-300">
        <label className="mb-3 text-sky-800 font-medium ">ایمیل:</label>
        <input
          className="mb-10 w-64 border rounded-lg border-amber-950 bg-slate-200 p-2 h-10 font-base "
          name="email"
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label className="mb-3 text-sky-800 font-medium ">رمز عبور:</label>
        <input
          className="mb-10 w-64 border rounded-lg border-amber-950 bg-slate-200 p-2 h-10 font-base "
          name="password"
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signinHnadler}>
            ورود
          </button>
        )}
      </form>
      <p>
        ثبت نام کنید!..
        <Link href={"/signup"}>ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
