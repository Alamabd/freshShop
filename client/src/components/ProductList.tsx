function ProductList() {
  return (
    <div>
        <h1 className="text-xl font-semibold">Shopping</h1>
        {/* Product list */}
        <div className="flex gap-4 flex-wrap">
            {/* Item */}
            <div className="p-4 flex gap-4 w-max rounded-xl shadow">
                <img src="./apple.jpg" alt="apple" className="w-32 rounded-xl" />
                <div className="flex flex-col justify-between">
                    <span>
                        <h2 className="font-semibold">Apple</h2>
                        <p className="text-sm">Rp 20.000</p>
                    </span>
                    <button className="p-2 bg-emerald-700 text-white text-xs rounded shadow">Add to cart</button>
                </div>
            </div>
            {/* Item */}
            <div className="p-4 flex gap-4 w-max rounded-xl shadow">
                <img src="./apple.jpg" alt="apple" className="w-32 rounded-xl" />
                <div className="flex flex-col justify-between">
                    <span>
                        <h2 className="font-semibold">Apple</h2>
                        <p className="text-sm">Rp 20.000</p>
                    </span>
                    <button className="p-2 bg-emerald-700 text-white text-xs rounded shadow">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList