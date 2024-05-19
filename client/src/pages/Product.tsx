import Carausel from "../components/Carausel"
import Header from "../components/Header"
import Nav from "../components/Nav"
import ProductList from "../components/ProductList"

function Product() {
  return (
    <div className="mx-12 max-sm:mx-4">
      <Header />
      <Nav />
      <main className="mt-8 mx-4">
        <Carausel />
        <ProductList />
      </main>
    </div>
  )
}

export default Product