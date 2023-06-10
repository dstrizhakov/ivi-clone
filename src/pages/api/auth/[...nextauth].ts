import NextAuth from 'next-auth/next';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import VkProvider from 'next-auth/providers/vk';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (credentials?.email && credentials?.password) {
          return await SignInUser(credentials.email, credentials.password);
        } else {
          throw new Error('Не введен email или пароль');
        }
      },
    }),
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
    VkProvider({
      clientId: process.env.VK_CLIENT_ID || '',
      clientSecret: process.env.VK_CLIENT_SECRET || '',
    }),
  ],
  secret: process.env.JWT_SECRET,

  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60, // 30 days
    updateAge: 24 * 60 * 60, // 24 hours
  },

  // JSON Web tokens are only used for sessions if the `strategy: 'jwt'` session
  // option is set - or by default if no database is specified.
  // https://next-auth.js.org/configuration/options#jwt
  jwt: {
    // A secret to use for key generation (you should set this explicitly)
    secret: process.env.JWT_SECRET,
    // Set to true to use encryption (default: false)
    // encryption: true,
    // You can define your own encode/decode functions for signing and encryption
    // if you want to override the default behaviour.
    // encode: async ({ secret, token, maxAge }) => {},
    // decode: async ({ secret, token, maxAge }) => {},
  },
  // https://next-auth.js.org/configuration/pages
  pages: {
    // signIn: '/auth/signin', // Displays signin buttons
    // signOut: '/auth/signout', // Displays form with sign out button
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // Used for check email page
    // newUser: null // If set, new users will be directed here on first sign in
  },

  callbacks: {
    // async signIn({ user, account, profile, email, credentials }) {
    //   return true;
    // },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },

    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      console.log('====================================================');
      console.log('JWT TOKEN:', token);
      console.log('ACCOUNT:', account);
      // Пример ответа от сервера 3001
      //       JWT TOKEN: {
      //   name: undefined,
      //   email: undefined,
      //   picture: undefined,
      //   sub: undefined
      // }
      // ACCOUNT: {
      //   providerAccountId: undefined,
      //   type: 'credentials',
      //   provider: 'credentials'
      console.log('====================================================');

      if (account) {
        token.accessToken = account.access_token;
        token.idToken = account.id_token;
      }
      return token;
    },
    async session({ session, token }) {
      // Send properties to the client, like an access_token from a provider.
      console.log('====================================================');
      console.log('SESSION TOKEN:', token);
      // Пример ответа от сервера 3001
      //       SESSION TOKEN: {
      //   iat: 1685435580,
      //   exp: 1688027580,
      //   jti: 'c70d4fa0-f608-4a11-b5b4-45014cecc2af'
      // }
      console.log('====================================================');
      return session;
    },
  },

  // Events are useful for logging
  // https://next-auth.js.org/configuration/events
  events: {},
  debug: process.env.NODE_ENV !== 'production',
});

const SignInUser = async (email: string, password: string) => {
  const url = `http://localhost:3001/auth/login`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const user = await res.json();
  console.log('====================================================');
  console.log('USER:', user);
  // Пример ответа от сервера 3001
  //   {
  //   token: {
  //     token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAbWFpbC5ydSIsImlkIjoxLCJpYXQiOjE2ODU0MzUzMzcsImV4cCI6MTY4NTUyMTczN30.9b2y9u24gR_Dnjt7mtWrbeWVifHdE3Z1RTEe20h1P2s'
  //   },
  //   profileInfo: {
  //     id: 1,
  //     url: '',
  //     name: 'Александр',
  //     surname: 'Иванов',
  //     nickname: 'stas9n',
  //     country: 'Россия',
  //     city: 'Москва',
  //     createdAt: '2023-05-29T20:55:09.408Z',
  //     photo: null,
  //     userId: 1
  //   }
  // }
  console.log('====================================================');

  if (res.ok && user) {
    return {
      name: user.profileInfo.name,
      email: email,
      picture: user.profileInfo.photo,
      sub: undefined,
      token: user.token.token,
    };
  }
  return null;
};
