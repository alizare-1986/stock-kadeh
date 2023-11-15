import User from "@/models/User";
import { hashPassword } from "@/utils/authFunction";
import connectDb from "@/utils/connectDb";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDb();
    const { username, email, password } = await req.json();
    if (!username || !email || !password) {
      return NextResponse.json(
        { error: "اطلاعات معتبر وارد شود" },
        { status: 422 }
      );
    }
    const existUser = await User.findOne({ email });
    if (existUser) {
      return NextResponse.json(
        { error: "قبلا این حساب ثبت نام کرده است" },
        { status: 422 }
      );
    }
    const hashedPassword = await hashPassword(password);
    const createUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    console.log(createUser);
    return NextResponse.json(
      { message: "حساب کاربری با موفقیت ایجاد شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی سمت سرور پیش آمده دوبار تلاش کنید" },
      { status: 500 }
    );
  }
}
