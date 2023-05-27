import "./globals.css";
import { Montserrat } from "next/font/google";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="w-full h-fit">
        <div className="bg-gradient-to-br from-black via-blue-900 to-emerald-600 w-full h-full fixed top-0 left-0 -z-50"></div>
        <ReactQueryProvider>
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
