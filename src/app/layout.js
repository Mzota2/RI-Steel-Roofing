import Footer from "@/components/Footer/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import "aos/dist/aos.css";
import Help from "@/components/Help/Help";
import Greetings from "@/components/Greetings/Greetings";
export const metadata = {
  title: {
    default: "R & I Steel Roofing",
    absolute:"R & I Steel Roofing",
    template: "%s | R & I Steel Roofing",
  },
      
  description: "Your trusted partner for steel and roofing solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className="flex flex-col h-full"
      >
        <Greetings/>
        <Help/>
        <Navbar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
