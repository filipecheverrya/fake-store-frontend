import Products from "@/components/Products"
import { getAllProducts } from "@/services/fake-api"
import { Suspense } from "react"

export default function Home() {
  const products = getAllProducts()

  return (
    <div className="font-sans ml-4 mt-4">
      <h2 className="text-xl font-semibold mb-5">
        Ofertas do dia
      </h2>
      <div className="flex">
        <Suspense fallback={<div>Loading...</div>}>
          <Products products={products} />
        </Suspense>
      </div>
    </div>
  )
}

