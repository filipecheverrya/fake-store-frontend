declare module '*.css';

declare module 'swiper/css';
declare module 'swiper/css/navigation';
declare module 'swiper/css/pagination';

type ProductType = {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

type ListProductsType = ProductType[]