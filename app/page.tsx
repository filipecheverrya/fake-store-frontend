export const dynamic = 'force-dynamic'

import Filter from "@/components/Filter"
import Products from "@/components/Products"
import { getAllProducts } from "@/services/fake-api"

export default async function HomePage() {
  const products = await getAllProducts()

  return (
    <div className="font-sans mx-4 mt-4 mb-10">
      <header className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">
          All Products
        </h2>
        {products && <Filter products={products} />}
      </header>
      <div className="flex">
        {products && <Products products={products} />}
      </div>
    </div>
  )
}

