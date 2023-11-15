import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import SignupPage from "@/template/SignupPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

function Signup() {
    const session =getServerSession(authOptions)
    if(session) redirect("/")
    return (
       <SignupPage/>
    );
}

export default Signup;