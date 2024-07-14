import Image from "next/image";
import Hero from "./components/Hero";
import ProductsSection from "./components/ProductsSection";

export default function Home() {

  return (
    <main className="bg-white dark:bg-slate-900">
      <Hero/>
      <ProductsSection/>
    </main>
  )

}