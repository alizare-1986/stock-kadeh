"use client";
import Loader from "@/module/Loader";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const signupHnadler = async (e) => {
    e.preventDefault();
    if (username.length < 3) {
      toast.error("نام معتبر وارد شود");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error("ایمیل معتبر وارد شود");
      return;
    }
    if (password.length < 6) {
      toast.error("رمز شما کوتاه است");
      return
    } else if (password !== rePassword) {
      toast.error("رمز و تکرار ان برابر نیست");
      return;
    }
    setLoading(true);
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (res.status === 201) {
      router.push("/");
    } else {
      toast.error(data.error);
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center min-h-min mt-auto  ">
      <h4 className="text-sky-500 font-semibold text-3xl mb-5 ">فرم ثبت نام</h4>
      <form className="flex flex-col max-w-3xl shadow-lg border border-solid border-amber-600 rounded-lg p-10 mb-8 bg-indigo-300">
        <label className="mb-3 text-sky-800 font-medium ">نام کاربر</label>

        <input
          className="mb-10 w-64 border rounded-lg border-amber-950 bg-slate-200 p-2 h-10 font-base "
          name="username"
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

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
        <label className="mb-3 text-sky-800 font-medium ">
          تکرار رمز عبور:
        </label>
        <input
          className="mb-10 w-64 border rounded-lg border-amber-950 bg-slate-200 p-2 h-10 font-base "
          name="repassword"
          type="password"
          value={rePassword}
          placeholder="repassword"
          onChange={(e) => setRePassword(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) : (
          <button type="submit" onClick={signupHnadler}>
            ثبت نام
          </button>
        )}
      </form>
      <p>
        اگر حساب کاربری دارید؟
        <br></br>
        <Link href={"/signin"}>ورود</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SignupPage;
