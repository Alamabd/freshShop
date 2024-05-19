import Cart from "./components/Cart"
import Nav from "./components/Nav"
import Product from "./components/Product"

function App() {

  return (
    <>
      <div className="mt-4 mx-12">
        
        <main>
          <article>
            <h1 className="mt-4 text-2xl font-semibold">Shopping Cart</h1>
            <div className="flex">
              <Product />
              <Cart />
            </div>
          </article>
        </main>
      </div>
    </>
  )
}

export default App
