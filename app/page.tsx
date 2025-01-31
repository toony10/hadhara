import Image from "next/image";
import HeroSection from './commponents/HeroSection'
import AboutUs from "./commponents/AboutUs";
import Footer from "./commponents/Footer";
export default function Home() {
  return (
    <div className="h-[100rem]">
      <HeroSection />
      <AboutUs />

    </div>
  );
}
