import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'My Clerk + Next App',
  description: 'Next.js app with Clerk authentication',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <header className="p-4 flex justify-between items-center bg-gray-100 border-b">
            <div className="text-lg font-bold">My App</div>
            <div className="flex items-center">
              <SignedOut>
                <SignInButton mode="modal">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="ml-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                    Sign Up
                  </button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </header>
          <main className="p-4">
            <SignedIn>{children}</SignedIn>
            <SignedOut>
              <p className="text-center mt-4 text-gray-500">
                Please sign in to access the content.
              </p>
            </SignedOut>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
