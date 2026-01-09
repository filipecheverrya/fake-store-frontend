const BASE = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL || 'https://fakestoreapi.com'

export async function getAllProducts(): Promise<ListProductsType | undefined> {
  try {
    const response = await fetch(`${BASE}/products`, { cache: 'no-store' })
    if (!response.ok) {
      throw new Error('Failed to fetch get_all_products')
    }
    return response.json()
  } catch (err) {
    console.log('Failed to fetch get_all_products', err)
  }
}

export async function getProductById({ id }: { id: string | string[] | undefined }): Promise<ProductType | undefined> {
  try {
    const response = await fetch(`${BASE}/products/${id}`, { cache: 'no-store' })
    if (!response.ok) {
      throw new Error('Failed to fetch get_product_by_id')
    }
    return response.json()
  } catch (err) {
    console.log('Failed to fetch get_product_by_id', err)
  }
}