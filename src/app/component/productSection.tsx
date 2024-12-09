import Products from "./products";
import React from 'react'

const ProductSection = () => {
  return (
      <section className="max-w-[1500px] justify-self-center">
          <h1 className="text-[#272343] text-[32px]">Featured Products</h1>
          <Products></Products>
    </section>
  )
}

export default ProductSection