import AccountPage from "@/template/AccountPage";
import connectDb from "@/utils/connectDb";
import { authOptions } from "../api/auth/[...nextauth]/route";
import  {getServerSession}  from "next-auth";
import User from "@/models/User";

async function Account() {
  await connectDb();
  const session = await getServerSession(authOptions)
  const user =await User.findOne({email:session.user.email})
  
  return <AccountPage user={user}/>;
}

export default Account;
