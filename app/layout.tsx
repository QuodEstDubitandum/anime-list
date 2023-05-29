import "./globals.css";
import { Montserrat } from "next/font/google";
import { ReactQueryProvider } from "@/components/ReactQueryProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Dans Top 50 Anime List",
  description:
    "The only correct top 50 anime tier list that ends all other tier lists",
  openGraph: {
    title: "Dans Top 50 Anime List",
    description:
      "The only correct top 50 anime tier list that ends all other tier lists",
    images: [
      {
        url: "/todo.jpg",
        width: 524,
        height: 465,
      },
    ],
  },
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
