import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import Product from "@/models/Product";
import AdminPage from "@/template/AdminPage";
import SidebarAccount from "@/layout/SidebarAccount";

async function Admin() {
  await connectDb();
  const session = await getServerSession(authOptions);
  if (!session) redirect("/signin");
  const user = await User.findOne({ email: session.user.email });
  if (user.role !== "ADMIN") redirect("/account");
  const product = await Product.find({ published: false });

  return (
    <SidebarAccount role={user.role} email={user.email}>
      <AdminPage product={product} />
    </SidebarAccount>
  );
}

export default Admin;
