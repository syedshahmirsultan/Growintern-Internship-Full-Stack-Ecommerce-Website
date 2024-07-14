import Image from "next/image";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";

export default function Home() {

  return (
    <main className="h-full w-full">
      <Hero/>
      <ProductsSection/>
    </main>
  )

}