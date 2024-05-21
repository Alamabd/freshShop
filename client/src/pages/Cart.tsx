import CardDetails from "../components/CardDetails"
import CartProduct from "../components/CartProduct"
import Header from "../components/Header"
import Nav from "../components/Nav"

function Cart() {
  return (
    <div className="mx-12 max-sm:mx-4">
      <Header />
      <Nav />
      <main>
        <h1 className="mt-8 text-2xl font-semibold">Cart Shopping</h1>
        <div className="flex gap-4 justify-between max-md:flex-col">
          <CartProduct />
          <CardDetails />
        </div>
      </main>
    </div>
  )
}

export default Cart