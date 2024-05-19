import Header from "../components/Header"
import ProductList from "../components/ProductList"

function Product() {
  return (
    <div>
        <Header />
        <main className="mx-12 mt-8">
            <ProductList />
        </main>
    </div>
  )
}

export default Product