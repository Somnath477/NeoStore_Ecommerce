import { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import ProductSkeleton from '../components/ProductSkeleton'
import ProductHero from '../components/ProductHero'
import { fetchProducts } from '../api/products'

export default function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProducts().then(data => {
      setProducts(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <ProductHero />

      <section className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold mb-6">
          Explore our collection
        </h2>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading &&
            Array.from({ length: 8 }).map((_, i) => (
              <ProductSkeleton key={i} />
            ))}

          {!loading && products.length === 0 && (
            <div className="glass p-10 rounded-2xl col-span-full text-center">
              <h3 className="text-xl font-semibold">No products found</h3>
              <p className="text-muted">Please check back later.</p>
            </div>
          )}

          {!loading &&
            products.map(p => (
              <ProductCard key={p.id} product={p} />
            ))}
        </div>
      </section>
    </>
  )
}
