import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

import {
  ClerkProvider,
  SignIn,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Watsapp Chats",
  description: "Watsapp Chat By Hitkumar Patel",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>

    <html lang="en">

      <body className={inter.className}>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        >
        <header>
            <SignedOut>
              {/* <SignInButton /> */}

              <SignIn />
            </SignedOut>
            <SignedIn>
              <UserButton />
              <main>
            {children}
          </main>

            </SignedIn>
          </header>
        
      </ThemeProvider>
        </body>
    </html>
        </ClerkProvider>
  );
}
