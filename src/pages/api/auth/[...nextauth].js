import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../model/User';
import bcrypt from "bcrypt"

export default NextAuth({
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // credentials: {
            //     username: { label: "Username", type: "text", placeholder: "jsmith" },
            //     password: { label: "Password", type: "password" }
            // },
            async authorize(credentials, req) {
                // Add logic here to look up the user from the credentials supplied
                // const user = { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
                const { email, password } = credentials;

                const user = await User.findOne({ email }).exec();
                const isMatched = await bcrypt.compare(password, user.password)

                if (user && isMatched) {
                    // Any object returned will be saved in `user` property of the JWT
                    // delete user.password
                    user.name={id:user._id,name:user.username}
                    return user
                } else {
                    // If you return null or false then the credentials will be rejected
                    return null
                    // You can also Reject this callback with an Error or with a URL:
                    // throw new Error('error message') // Redirect to error page
                    // throw '/path/to/redirect'        // Redirect to a URL
                }
            }
        })
    ],
    callbacks: {
        async session(session, user) {
            console.log("session",session);
            return session
        },
        async jwt(token, user, account, profile, isNewUser) {
            console.log("token",token);
            return token
        }
    }
})


