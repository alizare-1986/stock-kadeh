import Product from "@/models/Product";
import User from "@/models/User";
import connectDb from "@/utils/connectDb";
import { Types } from "mongoose";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function GET(req) {
  try {
    await connectDb();
    const product = await Product.find({published:true}).select("-userId");
    return NextResponse.json({ data: product }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "مشکلی سمت سرور است" }, { status: 500 });
  }
}
export async function POST(req) {
  try {
    await connectDb();
    const {
      title,
      location,
      phone,
      shop,
      price,
      constructionDate,
      category,
      description,
    } = await req.json();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
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
    if (
      !title ||
      !location ||
      !phone ||
      !shop ||
      !price ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const newProduct = await Product.create({
      title,
      location,
      phone,
      shop,
      price: +price,
      constructionDate,
      category,
      description,
      userId: new Types.ObjectId(user._id),
    });
    console.log(newProduct);
    return NextResponse.json(
      { message: "آگهی جدید اضافه شد" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
export async function PATCH(req) {
  try {
    await connectDb();
    const {
      _id,
      title,
      description,
      location,
      phone,
      shop,
      price,
      constructionDate,
      category,
    } = await req.json();
    const session = await getServerSession(req);
    if (!session) {
      return NextResponse.json(
        {
          error: "لطفا وارد حساب کاربری خود شوید",
        },
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
    if (
      !_id ||
      !title ||
      !location ||
      !description ||
      !phone ||
      !price ||
      !shop ||
      !constructionDate ||
      !category
    ) {
      return NextResponse.json(
        { error: "لطفا اطلاعات معتبر وارد کنید" },
        { status: 400 }
      );
    }
    const product = await Product.findOne({ _id });
    if (!user._id.equals(product.userId)) {
      return NextResponse.json(
        {
          error: "دستری شما به این آگهی محدود شده است",
        },
        { status: 403 }
      );
    }

    product.title = title;
    product.description = description;
    product.location = location;
    product.phone = phone;
    product.shop = shop;
    product.price = price;
    product.constructionDate = constructionDate;
    product.category = category;
    product.save();
    return NextResponse.json(
      {
        message: "آگهی با موفقیت ویرایش شد",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "مشکلی در سرور رخ داده است" },
      { status: 500 }
    );
  }
}
