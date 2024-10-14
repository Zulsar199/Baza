import { Footer } from "@/components/Footer";
import { FooterLinks } from "@/components/FooterLinks";
import { Header } from "@/components/Header";
import { Section1 } from "@/components/Section1";
import { Section2 } from "@/components/Section2";

export default function Home() {
  return (
    <div>
      <Header />
      <Section1 />
      <Section2 />
      <Footer />
      <FooterLinks />
    </div>
  );
}
