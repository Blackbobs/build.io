import { Poppins } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@/providers/ToastProvider";
import AuthProvider from "@/providers/AuthProvider";
import { AppStateProvider } from "@/lib/contexts/AppContext";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "build.io",
  description: "Techies collaboration platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <AppStateProvider>
          <AuthProvider>
            <ToastProvider>{children}</ToastProvider>
          </AuthProvider>
        </AppStateProvider>
      </body>
    </html>
  );
}
