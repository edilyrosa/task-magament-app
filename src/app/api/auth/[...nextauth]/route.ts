// import NextAuth from "next-auth";
// import GoogleProvider from 'next-auth/providers/google'

// const handler = NextAuth({
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID as string,
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET  as string
//         })
//     ],
//     // callbacks: {
//     //     async jwt(token, user, account, profile, isNewUser) {
//     //         if (user) {
//     //             token.id = user.id;
//     //             token.email = user.email;
//     //         }
//     //         return token;
//     //     },
//     //     async session(session, token) {
//     //         session.user.id = token.id;
//     //         session.user.email = token.email;
//     //         return session;
//     //     }
//     // }
// })

// export {handler as GET, handler as POST}