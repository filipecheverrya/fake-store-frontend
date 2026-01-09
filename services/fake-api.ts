const BASE = process.env.API_BASE_URL

export async function getAllProducts(): Promise<ListProductsType> {
  const response = await fetch(`${BASE}/products`)
  if (!response.ok) {
    throw new Error('Failed to fetch get_all_products')
  }
  return response.json()
}

export async function getProductById({ id }: { id: string | string[] | undefined }): Promise<ProductType> {
  const response = await fetch(`${BASE}/products/${id}`)
  if (!response.ok) {
    throw new Error('Failed to fetch get_product_by_id')
  }
  return response.json()
}