'use client'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Scrollbar, A11y } from 'swiper/modules'
import Image from "next/image"
import { use } from "react"

import 'swiper/css'
import 'swiper/css/navigation'

type ProductsType = {
  products: Promise<ListProductsType>
}

export default function Products({ products }: ProductsType) {
  const allProducts = use(products)
  return (
    <>
      <Swiper
        modules={[Navigation, Scrollbar, A11y]}
        spaceBetween={16}
        slidesPerView={1.8}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        breakpoints={{
          769: {
            slidesPerView: 4.8
          },
          1024: {
            slidesPerView: 6.8
          }
        }}
        navigation
      >
        {allProducts.length && allProducts.map(item => (
          <SwiperSlide 
            key={item.id}
            className="bg-white rounded-md p-4 w-full mb-10 max-h-fit"
          >
            <a href={`/products/${item.id}`} title={item.title} className="text-black flex flex-col gap-2">
              <picture className="mb-4 flex items-center h-40">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={130} 
                  height={130}
                  loading="eager"
                  className="mx-auto w-200 max-h-40"
                />
              </picture>
              <span className="border bg-blue-500 text-white rounded-full text-center text-[12px] w-fit py-1 px-2">
                {item.category}
              </span>
              <h4 className="text-xs md:text-sm line-clamp-2 min-h-8 opacity-55">
                {item.title}
              </h4>
              <p className="text-base font-semibold">
                {`$ ${String(item.price).replaceAll('.', ',')}`}
              </p>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}