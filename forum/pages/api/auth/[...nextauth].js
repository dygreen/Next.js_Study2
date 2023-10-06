import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'e5e91a71bf6f238263c4',
      clientSecret: '517142339c3988911955c626412bc5e266f07d79',
    }),
  ],
  secret : 'qwer1234'
};
export default NextAuth(authOptions); 