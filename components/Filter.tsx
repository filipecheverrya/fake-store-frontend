'use client'

import { XMarkIcon } from "@heroicons/react/24/outline"
import { FunnelIcon } from "@heroicons/react/24/outline"
import { FunnelIcon as FunnelIconSolid } from "@heroicons/react/24/solid"
import { useState } from "react"

import Categories from "./Categories"
import Prices from "./Prices"
import Names from "./Names"
import { useFilter } from "@/context/FilterContext"

type FilterType = {
  products: Promise<ListProductsType>
}

export default function Filter({ products }: FilterType) {
  const [visible, setVisible] = useState(false)
  const { state, actions } = useFilter()

  const handleFilter = () => setVisible(!visible)

  const categoryChange = (params: string[]) => actions.setCategory(params)
  const priceChange = (params: string[]) => actions.setPrice(params)
  const nameChange = (params: string[]) => actions.setName(params)
  const hasFilters = () => {
    return state.category.length > 0 || state.price.length > 0 || state.name.length > 0
  }

  return (
    <>
      <button type="button" onClick={handleFilter}>
        {hasFilters() ? <FunnelIconSolid className="w-9 h-9 text-blue-500" /> : <FunnelIcon className="w-9 h-9 text-blue-500" />}
      </button>
      {visible && (
        <>
          <div className="bg-black opacity-70 fixed top-0 left-0 w-full h-lvh z-10" onClick={handleFilter}></div>
          <div className="bg-white rounded-md p-4 absolute left-1/2 top-1/2 -translate-1/2 z-20 w-[90%] md:max-w-fit flex flex-col">
            <header className="flex items-center justify-between">
              <p className="text-xl font-bold">
                Filter
              </p>
              <button type="button" onClick={handleFilter}>
                <XMarkIcon className="w-8 h-8 text-blue-500" />
              </button>
            </header>
            <div className="my-2">
              <p className="mb-2 text-base text-gray-500 font-semibold">Categories</p>
              <Categories products={products} change={categoryChange} />
            </div>
            <div className="my-2">
              <p className="mb-2 text-base text-gray-500 font-semibold">Price</p>
              <Prices change={priceChange} />
            </div>
            <div className="my-2">
              <p className="mb-2 text-base text-gray-500 font-semibold">Name</p>
              <Names change={nameChange} />
            </div>
          </div>
        </>
      )
      }
    </>
  )
}