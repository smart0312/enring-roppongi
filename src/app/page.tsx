import { About } from "@/components/sections/About";
import { Access } from "@/components/sections/Access";
import { Hero } from "@/components/sections/Hero";
import { NightBar } from "@/components/sections/NightBar";
import { Workshop } from "@/components/sections/Workshop";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Workshop />
      <NightBar />
      <Access />
    </>
  );
}
