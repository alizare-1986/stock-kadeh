import connectDb from "@/utils/connectDb";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";
import User from "@/models/User";
import SidebarAccount from "@/layout/SidebarAccount";

async function AccountLayout({ children }) {
  await connectDb();
  const session = await getServerSession(authOptions);

  if (!session) redirect("/signin");
  
  const user = await User.findOne({ email: session.user.email });

  if (!user) return <h2>مشکلی وجود دارد</h2>;

  return <SidebarAccount role={user.role} email={user.email}>{children}</SidebarAccount>;
}

export default AccountLayout;
