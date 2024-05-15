// // import NextAuth from "next-auth";
// // import "next-auth/jwt";

// // import Google from "next-auth/providers/google";
// // import Apple from "next-auth/providers/apple"
// // import Auth0 from "next-auth/providers/auth0"
// // import AzureB2C from "next-auth/providers/azure-ad-b2c"
// // import BoxyHQSAML from "next-auth/providers/boxyhq-saml"
// // import Cognito from "next-auth/providers/cognito"
// // import Coinbase from "next-auth/providers/coinbase"
// // import Discord from "next-auth/providers/discord"
// // import Dropbox from "next-auth/providers/dropbox"
// // import Facebook from "next-auth/providers/facebook"
// // import GitHub from "next-auth/providers/github"
// // import GitLab from "next-auth/providers/gitlab"
// // import Hubspot from "next-auth/providers/hubspot"
// // import Keycloak from "next-auth/providers/keycloak"
// // import LinkedIn from "next-auth/providers/linkedin"
// // import Netlify from "next-auth/providers/netlify"
// // import Okta from "next-auth/providers/okta"
// // import Passage from "next-auth/providers/passage"
// // import Passkey from "next-auth/providers/passkey"
// // import Pinterest from "next-auth/providers/pinterest"
// // import Reddit from "next-auth/providers/reddit"
// // import Slack from "next-auth/providers/slack"
// // import Spotify from "next-auth/providers/spotify"
// // import Twitch from "next-auth/providers/twitch"
// // import Twitter from "next-auth/providers/twitter"
// // import WorkOS from "next-auth/providers/workos"
// // import Zoom from "next-auth/providers/zoom"
// // import { createStorage } from "unstorage";
// // import memoryDriver from "unstorage/drivers/memory";
// // import vercelKVDriver from "unstorage/drivers/vercel-kv";
// // import { UnstorageAdapter } from "@auth/unstorage-adapter";
// // import type { NextAuthConfig } from "next-auth";

// // const storage = createStorage({
// //   driver: process.env.VERCEL
// //     ? vercelKVDriver({
// //         url: process.env.AUTH_KV_REST_API_URL,
// //         token: process.env.AUTH_KV_REST_API_TOKEN,
// //         env: false,
// //       })
// //     : memoryDriver(),
// // });

// // const config = {
// //   theme: { logo: "https://authjs.dev/img/logo-sm.png" },
// //   adapter: UnstorageAdapter(storage),
// //   providers: [
// //     Google({
// //       clientId: process.env.AUTH_GOOGLE_ID,
// //       clientSecret: process.env.AUTH_GOOGLE_SECRET,
// //     }),
// //   ],
// //   basePath: "/auth",
// //   callbacks: {
// //     authorized({ request, auth }) {
// //       const { pathname } = request.nextUrl;
// //       if (pathname === "/middleware-example") return !!auth;
// //       return true;
// //     },
// //     jwt({ token, trigger, session, account }) {
// //       if (trigger === "update") token.name = session.user.name;
// //       if (account?.provider === "keycloak") {
// //         return { ...token, accessToken: account.access_token };
// //       }
// //       return token;
// //     },
// //     async session({ session, token }) {
// //       if (token?.accessToken) {
// //         session.accessToken = token.accessToken;
// //       }
// //       return session;
// //     },
// //   },
// //   experimental: {
// //     enableWebAuthn: true,
// //   },
// //   debug: process.env.NODE_ENV !== "production" ? true : false,
// // } satisfies NextAuthConfig;

// // export const { handlers, auth, signIn, signOut } = NextAuth(config);

// // declare module "next-auth" {
// //   interface Session {
// //     accessToken?: string;
// //   }
// // }

// // declare module "next-auth/jwt" {
// //   interface JWT {
// //     accessToken?: string;
// //   }
// // }


// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import Auth0Provider from "next-auth/providers/auth0";
// import Credentials from "next-auth/providers/credentials";

// export const authOptions = {
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET,
//     }),
//     Auth0Provider({
//       clientId: process.env.AUTH0_ID,
//       clientSecret: process.env.AUTH0_SECRET,
//       issuer: process.env.AUTH0_ISSUER,
//     }),
//   ],
//   theme: {
//     colorScheme: "light",
//   },
//   callbacks: {
//     async jwt({ token }) {
//       token.userRole = "admin";
//       return token;
//     },
//   },
// };
// const handler = NextAuth(authOptions);

// export {handler as GET, handler as POST};