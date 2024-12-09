import Image from "next/image";
import Hero from "./component/hero";
import Logosection from "./component/logoSection";
import ProductSection from "./component/productSection";
import TopCategory from "./component/topCategory";
import ExploreSection from "./component/exploreSection";
import OurProducts from "./component/ourProducts";

export default function Home() {
  return (
    <div>
      <Hero></Hero>
      <Logosection></Logosection>
      <ProductSection></ProductSection>
      <TopCategory></TopCategory>
      <ExploreSection></ExploreSection>
      <OurProducts></OurProducts>
      
  </div>
  );
}
