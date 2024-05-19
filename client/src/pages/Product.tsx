import Carausel from "../components/Carausel"
import Header from "../components/Header"
import Nav from "../components/Nav"
import ProductList from "../components/ProductList"

function Product() {
  return (
    <div>
      <Header />
      <Nav />
      <main className="mx-12 mt-8">
        <Carausel />
        <div className="w-2/3">
          <ProductList />
        </div>
      </main>
    </div>
  )
}

export default Product