import "./globals.css";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

export const metadata = {
  title: "Meem Quran Academy",
  description: "Meem Online Quran Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
