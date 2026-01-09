'use client'

import { createContext, useContext, ReactNode, useState } from 'react';

type FilterContextType = {
  price: string[]
  category: string[]
  name: string[]
}

type FilterStateType = {
  state: FilterContextType
  actions: {
    setName: (name: string[]) => void
    setPrice: (price: string[]) => void
    setCategory: (category: string[]) => void
  }
}

const FilterContext = createContext<FilterStateType | undefined>(undefined);

type FilterProviderProps = {
  children: ReactNode
}

export function FilterProvider({ children }: FilterProviderProps) {
  const [filter, setFilter] = useState<FilterContextType>({
    price: [],
    category: [],
    name: []
  })

  const value: FilterStateType = {
    state: {
      price: filter.price,
      category: filter.category,
      name: filter.name,
    },
    actions: {
      setName: (name: string[]) => setFilter({ name, price: [], category: [] }),
      setPrice: (price: string[]) => setFilter({ price, name: [], category: [] }),
      setCategory: (category: string[]) => setFilter({ category, price: [], name: [] }),
    }
  }

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  )
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (context === undefined) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}