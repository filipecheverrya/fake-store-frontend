declare module '*.css';

type ProductType = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
  rating: {
    rate: bumber
    count: nunmber
  }
}

type ListProductsType = ProductType[]