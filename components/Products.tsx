'use client'

import { useFilter } from "@/context/FilterContext"
import Image from "next/image"
import { use, useEffect } from "react"

import 'swiper/css'
import 'swiper/css/navigation'

type ProductsType = {
  products: Promise<ListProductsType>
}

export default function Products({ products }: ProductsType) {
  const allProducts = use(products)
  const { state: { category, price, name } } = useFilter()
  
  useEffect(() => {
    if (category.length === 0 && price.length === 0 && name.length === 0) {
      return
    }
  }, [category, price, name])

  const Template = (item: ProductType) => (
    <li className="bg-white rounded-md p-4 w-40 md:w-60">
      <a href={`/products/${item.id}`} title={item.title} className="text-black flex flex-col gap-2">
        <picture className="mb-4 flex items-center h-40">
          <Image 
            src={item.image} 
            alt={item.title} 
            width={130} 
            height={130}
            loading="eager"
            className="mx-auto w-40 max-h-40"
          />
        </picture>
        <span className="border bg-blue-500 text-white rounded-full text-center text-[12px] w-fit py-1 px-2">
          {item.category}
        </span>
        <h4 className="text-xs md:text-sm line-clamp-2 min-h-8 opacity-55">
          {item.title}
        </h4>
        <p className="text-base font-semibold">
          {`$ ${String(item.price).replaceAll('.', ',')}`}
        </p>
      </a>
    </li>
  )

  return (
    <>
      <ul className='flex flex-wrap gap-2 md:gap-3'>
        {category.length === 0 ? allProducts.map(item => (
          <Template key={item.id} {...item} />
        )) : allProducts.filter(item => item.category === category[0]).map(item => (
          <Template key={item.id} {...item} />
        ))}
      </ul>
    </>
  )
}