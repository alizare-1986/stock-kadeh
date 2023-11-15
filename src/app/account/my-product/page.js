import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Product from "@/models/Product";
import User from "@/models/User";
import MyProductPage from "@/template/MyProductPage";
import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";

async function MyProduct() {
  await connectDb();
  const session = await getServerSession(authOptions);

  const [user] = await User.aggregate([
    { $match: { email: session.user.email } },
    {
      $lookup: {
        from: "products",
        foreignField: "userId",
        localField: "_id",
        as: "products",
      },
    },
  ]);


 

  return <MyProductPage products={user.products}/>;
}

export default MyProduct;
