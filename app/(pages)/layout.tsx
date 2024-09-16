import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="bg-grey">{children}</main>
        <CTA />
        <Footer />
      </body>
    </html>
  );
}
