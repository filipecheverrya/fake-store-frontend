import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { StarIcon } from '@heroicons/react/24/outline'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { Metadata } from 'next'

import { getProductById } from '@/services/fake-api'

type ProductPageType = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageType): Promise<Metadata> {
  const { id } = await params
  const product = await getProductById({ id })

  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'The requested product could not be found.'
    }
  }

  return {
    title: product.title,
    description: product.description
  }
}

export default async function ProductPage({ params }: ProductPageType) {
  const { id } = await params
  const data = await getProductById({ id })

  const filledCount = Math.max(0, Math.min(5, Math.round(data?.rating.rate || 0)))
  const emptyCount = 5 - filledCount
  const stars = [
    ...Array(filledCount).fill(1),
    ...Array(emptyCount).fill(0)
  ]

  return (
    <div className='flex flex-col gap-4 px-4 md:gap-8 mb-12'>
      <nav className="mt-4">
        <Link href="/" className="flex items-center gap-2 text-blue-500" title="Go back to products">
          <span className="block w-9">
            <ArrowLeftIcon className="w-full text-blue-500" />
          </span>
        </Link>
      </nav>
      <h2 className="text-2xl md:text-4xl font-normal">
        {data?.title}
      </h2>
      <picture className="block my-10">
        <Image
          src={data?.image || ''}
          alt={data?.title || 'Product Image'}
          width={600}
          height={600}
          className="w-fit max-h-90 mx-auto"
        />
      </picture>
      <div className="flex justify-between items-center">
        <span className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full uppercase text-sm w-fit">
          {data?.category}
        </span>
        <div className="flex flex-col items-center">
          <ul className="flex">
            {stars.map((star, index) => (
              <li key={index}>
                {star === 1 ? (
                  <StarIconSolid className="w-6 text-blue-500" />
                ) : (
                  <StarIcon className="w-6 text-stone-400" />
                )}
              </li>
            ))}
          </ul>
          <p className="text-stone-500">
            ({data?.rating.count}) reviews
          </p>
        </div>
      </div>
      <p className="text-2xl font-semibold">
        {new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(data?.price || 0)}
      </p>
      <p className="text-base">
        {data?.description}
      </p>
    </div>
  )
}