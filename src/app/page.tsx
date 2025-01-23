'use client'
import Image from "next/image";
import Hero from "./component/hero";
import Logosection from "./component/logoSection";
import ProductSection from "./component/productSection";
import TopCategory from "./component/topCategory";
import ExploreSection from "./component/exploreSection";
import OurProducts from "./component/ourProducts";
import { client } from "../sanity/lib/client";
import { product } from "@/sanity/schemaTypes/product";
import Loading from "./loading";

import { useState, useEffect } from "react";
const getProduct = async () => {
  try {
    const products = await client.fetch(`
      *[_type == "product"]{
        price,
        name,
        category,
        "imageUrl": image.asset->url
        isNew,
      }
    `);
    
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
};
interface product{
  _id: string;
  name: string;
  price: number;
  category: string;
  imageUrl: string;
  isNew: boolean;
}

export default function Home() {
  const [products, setProducts] = useState<product[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true); // Set loading to true before fetching
        const fetchedProducts = await getProduct();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false); // Set loading to false after fetching (success or failure)
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loading /> // Render Loading component while loading
      ) : (
        products.map(
          (product: product) => (
            <div key={product._id}>
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <p>Category: {product.category}</p>
              <Image src={product.imageUrl} alt="wasay" height={100} width={100}></Image>
            </div>
          )
        )
      )}
    </div>
  );
}
