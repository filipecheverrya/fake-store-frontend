import { useFilter } from "@/context/FilterContext"

type CategoriesType = {
  products: ListProductsType
  change: (ctg: string[]) => void
}

export default function Categories({ products, change }: CategoriesType) {
  const uniqueSet = new Set(products?.map(item => item.category))
  const categories = [...uniqueSet]
  const { state } = useFilter()

  const handleClick = (item: string) => {
    if (item === state.category[0]) {
      change([])
      return
    }
    change([item])
  }


  return (
    <ul className="flex gap-2 flex-wrap">
      {categories.map(item => (
        <li key={item}>
          <button
            type="button"
            className={`rounded-full text-center px-4 py-1 border border-blue-500 ${
              state.category.includes(item) ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
            }`}
            onClick={() => handleClick(item)}
          >
            {item}
          </button>
        </li>
      ))}
    </ul>
  )
}
