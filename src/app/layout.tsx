import type { Metadata } from "next";
import { Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import QueryProvider from "@components/ReactQuery/QueryProvider";
import { NextAuthProvider } from "@components/NextProvider";
import { getServerSession } from "next-auth";
import { authOptions } from "@lib/next-auth/options";



const robotoSans = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  weight: '300'
});

const robotoMono = Roboto_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Transiscale',
    default: 'Transiscale'
  },
  description: "Transiscale description",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  return (

    <html lang="pt-br">
      <body
        className={`${robotoSans.variable} ${robotoMono.variable} antialiased`}
      >
        <Toaster richColors />
        <QueryProvider>
          <NextAuthProvider session={session}>
            {children}
          </NextAuthProvider>
        </QueryProvider>
      </body>
    </html>

  );
}
