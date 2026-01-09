import productsMock from '@/mock/products.json'
// const BASE = process.env.NEXT_PUBLIC_VERCEL_URL

export async function getAllProducts(): Promise<ListProductsType | undefined> {
  try {
    return productsMock
    // const response = await fetch(`${BASE}/products`, { cache: 'no-store' })
    // if (!response.ok) {
    // throw new Error('Failed to fetch get_all_products')
    // }
    // return response.json()
  } catch (err) {
    console.log('Failed to fetch get_all_products', err)
  }
}

export async function getProductById({ id }: { id: string | string[] | undefined }): Promise<ProductType | undefined> {
  try {
    return productsMock.filter(item => String(item.id) === id)[0]
    // const response = await fetch(`${BASE}/products/${id}`, { cache: 'no-store' })
    // if (!response.ok) {
    // throw new Error('Failed to fetch get_product_by_id')
    // }
    // return response.json()
  } catch (err) {
    console.log('Failed to fetch get_product_by_id', err)
  }
}