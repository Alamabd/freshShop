function CartProduct() {
  return (
    <table className="table-fixed">
        <thead className="text-left bg-gray-50">
            <tr>
                <th className="p-4">
                    No
                </th>
                <th className="p-4">
                    Product
                </th>
                <th className="p-4">
                    Amount
                </th>
                <th className="p-4">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="text-center">
                <td className="border">
                    1
                </td>
                <td className="border p-2 text-left">
                    <div className="flex">
                        <img src="./apple.jpg" alt="apple" className="w-24 h-24 object-cover rounded-full" />
                        <span>
                            <h2 className="font-semibold">Apple fresh</h2>
                            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores delectus dicta dolorum?</p>
                        </span>
                    </div>
                </td>
                <td className="border">
                    2
                </td>
                <td className="border p-2">
                    Rp 10.000
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default CartProduct