'use client'

import { useFilter } from "@/context/FilterContext"
import { use, useState } from "react"

type CategoriesType = {
  products: Promise<ListProductsType>
  change: (ctg: string[]) => void
}

export default function Categories({ products, change }: CategoriesType) {
  const allProducts = use(products)
  const uniqueSet = new Set(allProducts.map(item => item.category))
  const categories = [...uniqueSet]
  const { state } = useFilter()
  const [selecteds, setSelecteds] = useState<string[]>(state.category)

  const handleClick = (item: string) => {
    setSelecteds([item])
    change([item])
  }

  return (
    <ul className="flex gap-2 flex-wrap">
      {categories.map(item => (
        <li key={item}>
          <button
            type="button"
            className={`rounded-full text-center px-4 py-1 border border-blue-500 ${selecteds.includes(item) ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}
