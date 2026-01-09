'use client'

import { useFilter } from "@/context/FilterContext"
import Image from "next/image"
import { use, useEffect, useMemo } from "react"

type ProductsType = {
  products: Promise<ListProductsType | undefined>
}

export default function Products({ products }: ProductsType) {
  const allProducts = use(products)
  const { state } = useFilter()

  const filteredProducts = useMemo(() => allProducts?.filter(item => {
    const categoryMatch = state.category.length === 0 || state.category.includes(item.category)
    return categoryMatch
  }) || [], [allProducts, state.category])

  const sortedProducts = useMemo(() => [...filteredProducts].sort((a, b) => {
    if (state.price[0] === 'ASC') return a.price - b.price
    if (state.price[0] === 'DESC') return b.price - a.price
    if (state.name[0] === 'ASC') return a.title.localeCompare(b.title)
    if (state.name[0] === 'DESC') return b.title.localeCompare(a.title)
    return 0
  }), [filteredProducts, state.price, state.name])

  const Template = (item: ProductType) => (
    <li className="bg-white rounded-md p-4 w-40 md:w-60">
      <a href={`/products/${item.id}`} title={item.title} className="text-black flex flex-col gap-2">
        <picture className="mb-4 flex items-center h-40">
          <Image 
            src={item.image} 
            alt={item.title} 
            width={130} 
            height={130}
            loading="lazy"
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
          {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(item.price)}
        </p>
      </a>
    </li>
  )
  
  return (
    <>
      <ul className='flex flex-wrap gap-2 md:gap-3'>
        {sortedProducts.map(item => <Template key={item.id} {...item} /> )}
      </ul>
    </>
  )
}