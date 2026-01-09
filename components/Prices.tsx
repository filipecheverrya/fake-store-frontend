import { useFilter } from "@/context/FilterContext"

type PricesType = {
  change: (order: string[]) => void
}

export default function Prices({ change }: PricesType) {
  const orders = ['ASC', 'DESC']
  const { state } = useFilter()

  const handleClick = (item: string) => {
    if (item === state.price[0]) {
      change([])
      return
    }
    const result = item === 'ASC' ? ['ASC'] : ['DESC']
    change(result)
  }

  return (
    <ul className="flex gap-2">
      {orders.map((order) => (
        <li key={order}>
          <button 
            className={`rounded-full text-center px-4 py-1 border border-blue-500 text-blue-500 ${
              state.price.includes(order) ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`} 
            onClick={() => handleClick(order)}
          >
            {order}
          </button>
        </li>
      ))}
    </ul>
  )
}