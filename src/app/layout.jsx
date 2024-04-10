import { Allerta} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const allur = Allerta({ subsets: ["latin"],
weight: "400" });

export const metadata = {
  title: "Blogging Platform",
  description: "A Web development platform for web developers",
  keywords:'html,tailwind,css,js.javascript,react,next,vite'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body className={allur.className}>

       <Navbar/>

        <div className="min-h-screen">
          {children}

        </div>
        <Footer/>
          </body>
    </html>
  );

}
