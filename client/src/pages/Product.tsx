import Header from "../components/Header"
import Nav from "../components/Nav"
import ProductList from "../components/ProductList"

function Product() {
  return (
    <div>
      <Header />
      <Nav />
      <main className="mx-12 mt-8 flex gap-8 max-sm:flex-col">
        <div className="w-2/3">
          <ProductList />
        </div>
        <div className="w-1/3 max-sm:w-full">
          <img src="./banner.jpg" alt="banner" />
        </div>
      </main>
    </div>
  )
}

export default Product