import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

import { getProductById } from '@/services/fake-api'

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const data = await getProductById({ id })

  return (
    <div className='flex flex-col gap-4 px-4 md:gap-8 mb-12'>
      <nav className="mt-4">
        <Link href="/" className="flex items-center gap-2 text-blue-500">
          <span className="block w-10">
            <ArrowLeftIcon className="w-full text-blue-500" />
          </span>
        </Link>
      </nav>
      <h2 className="text-2xl md:text-4xl font-normal">
        {data.title}
      </h2>
      <picture className="block my-10">
        <Image
          src={data.image}
          alt={data.title}
          width={600}
          height={600}
          className="w-fit max-h-90 mx-auto"
        />
      </picture>
      <span className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full uppercase text-sm w-fit">
        {data.category}
      </span>
      <p className="text-2xl font-semibold">
        {`$ ${data.price}`}
      </p>
      <p className="text-base">
        {data.description}
      </p>
    </div>
  )
}