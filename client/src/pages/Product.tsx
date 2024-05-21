import Carausel from "../components/Carausel"
import Header from "../components/Header"
import Nav from "../components/Nav"
import ProductList from "../components/ProductList"
import ProductPopular from "../components/ProductPopular"

function Product() {
  return (
    <div className="mx-12 max-sm:mx-4">
      <Header />
      <Nav />
      <main className="mt-8 mx-4 w-full grid gap-8 grid-cols-3 max-md:grid-cols-2">
        <article className="col-span-2">
          <Carausel />
          <ProductList />
        </article>
        <aside className="max-md:col-span-2">
          <ProductPopular />
        </aside>
      </main>
    </div>
  )
}

export default Product