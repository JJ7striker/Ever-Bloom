import React from 'react'
import Image1 from "@/public/image-1.jpeg"
import Image2 from "@/public/image-2.jpeg"
import Image3 from "@/public/image-3.jpeg"
import Image4 from "@/public/image-4.jpeg"
import Image5 from "@/public/image-5.jpeg"
import Image7 from "@/public/image-7.jpeg"
import Product from './Product'

const products = [
  {
    name: "Flower 1",
    number: 0,
    price: 2.33,
    image: Image1
  },
  {
    name: "Flower 2",
    number: 0,
    price: 2.40,
    image: Image2
  },
  {
    name: "Flower 3",
    number: 0,
    price: 4,
    image: Image3
  },
  {
    name: "Flower 4",
    number: 0,
    price: 2.33,
    image: Image4
  },
  {
    name: "Flower 5",
    number: 0,
    price: 3.50,
    image: Image5
  },
  {
    name: "Flower 7",
    number: 0,
    price: 4.00,
    image: Image7
  },
]

const ProductList = () => {
  return (
    <div className='w-full h-auto grid grid-cols-1 gap-5 pt-10 md:grid-cols-4 p-3'>
        {products.map((product, index) => (
          <Product key={index} product={product} />
        ))}
    </div>
  )
}

export default ProductList