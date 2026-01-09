import { useFilter } from "@/context/FilterContext"
import { useState } from "react"

type PricesType = {
  change: (order: string[]) => void
}

export default function Prices({ change }: PricesType) {
  const orders = ['ASC', 'DESC']
  const { state } = useFilter()
  const [selecteds, setSelecteds] = useState<string[]>(state.price)

  const handleClick = (item: string) => {
    const result = item === 'ASC' ? ['ASC'] : ['DESC']
    setSelecteds(result)
    change(result)
  }

  return (
    <ul className="flex gap-2">
      {orders.map((order) => (
        <li key={order}>
          <button className={`rounded-full text-center px-4 py-1 border border-blue-500 text-blue-500 ${selecteds.includes(order) ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'}`} onClick={() => handleClick(order)}>
            {order}
          </button>
        </li>
      ))}
    </ul>
  )
}