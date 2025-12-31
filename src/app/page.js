import Hero from "@/components/Hero";
import Products from "@/components/Products";
import Features from "@/components/Features"; 
import Lifestyle from "@/components/Lifestyle";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  return (
    <main>
      <CustomCursor />
      <Hero />
      <Products />
      <Features />
      <Lifestyle />
      <Reviews />   
      <Location />
    </main>
  );
}