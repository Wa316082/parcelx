import HeroSlider from "@/components/HomePages/HeroSlider";
import PricingSection from "@/components/HomePages/PricingSection";
import WhyChooseUs from "@/components/HomePages/WhychooseUs";
import ServicesSection from "@/components/HomePages/ServicesSection";


export default function Home() {
  return (
    <div className="">
        <HeroSlider />
        <PricingSection />
        <WhyChooseUs/>
        <ServicesSection/>
    </div>
  );
}
