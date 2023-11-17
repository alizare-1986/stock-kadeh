import Product from "@/models/Product";
import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function PATCH(req, context) {
  try {
    await connectDb();
    const id =  context.params.productId;
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        { error: "لطفا وارد حساب کاربری که ساخته اید وارد شوید" },
        { status: 401 }
      );
    }
    const user = await User.findOne({ email: session.user.email });
    if (!user) {
      return NextResponse.json(
        { error: "حساب کاربری یافت نشد" },
        { status: 404 }
      );
    }
    if (user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "دسترسی شما محدود است" },
        { status: 403 }
      );
    }
    const profile = await Product.findOne({ _id: id });
    profile.published = true;
    profile.save();
    return NextResponse.json({ message: "آگهی منتشر شد" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "مشکلی سمت سرور است" }, { status: 500 });
  }
}
