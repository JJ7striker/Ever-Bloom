import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const Product = ({ product }) => {
  return (
    <div className='w-full px-3 py-4 bg-white rounded-sm shadow-sm shadow-pink-300 h-80 hover:scale-102 transition-all duration-200'>
      <Image src={product.image} alt='Product Image' height={70} width={75} className='object-fit rounded-l h-[50%]  w-full' />
      <div className='w-full flex flex-col gap-2 items-start px-2 py-1 '>
        <h2 className='text-lg font-bold text-pink-700'>{product.name}</h2>
        <p className='text-lg font-bold text-gray-700'>${product.price.toFixed(2)}</p>
        <Button className={"w-3/5 bg-pink-600 text-gray-100 font-bold hover:shadow-sm focus:shadow-none hover:shadow-pink-600 focus:ring focus:ring-purple-500"} variant='outline'>
        Add To Cart
        </Button>
      </div>
    </div>
  )
}

export default Product