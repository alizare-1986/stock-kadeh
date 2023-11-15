import User from "@/models/User";
import { verifyPass } from "@/utils/authFunction";
import connectDb from "@/utils/connectDb";
import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";

export const authOptions = {
  session: { strategy:'jwt' },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          await connectDb();
        } catch (error) {
          throw new Error("مشکل سمت سرور است");
        }
        if (!email | !password) throw new Error("لطفا اطلاعات معتبر وارد کنید");

        const user = await User.findOne({ email });
        if (!user) throw new Error("لطفا ابتدا حساب کاربری ایجاد کنید");
        const isValid = await verifyPass(password, user.password);
        if (!isValid) throw new Error("ایمیل یا رمز عبور اشتباه است");
        return { email };
      },
    }),
  ],
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
