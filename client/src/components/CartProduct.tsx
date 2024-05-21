import useCart from "../store/useCart"

type amountUpdateType = {
    idx: number,
    change: 'increment' | 'decrement'
}

function CartProduct() {
    const { cart, updateAmount } = useCart()

    function changeAmount({idx, change}: amountUpdateType) {
        const add = change === 'increment' ? cart[idx].amount + 1 : cart[idx].amount - 1
        updateAmount(add, idx)
    }

    return (
        <>
            { cart.length !== 0 ?
                <table className="table-fixed max-sm:w-full">
                    <thead className="text-left">
                        <tr>
                            <th className="py-4">
                                Product
                            </th>
                            <th className="py-4">
                                Amount
                            </th>
                            <th className="py-4">
                                Price
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((val, idx) => {
                                return (
                                    <tr className="text-center" key={val._id}>
                                        <td className="pr-12 py-2 max-sm:pr-4 text-left">
                                            <div className="flex relative">
                                                <img src={val.img} alt="apple" className="w-24 h-24 object-cover rounded-2xl" />
                                                <span className="absolute left-4 top-4 text-white">
                                                    <h2 className="font-semibold">{val.name}</h2>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="pr-12 py-2 max-sm:pr-4">
                                            <div className="flex items-center gap-4">
                                                <button onClick={() => changeAmount({idx, change: 'decrement'})}>
                                                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 11H5V13H19V11Z"></path></svg>
                                                </button>
                                                {val.amount}
                                                <button onClick={() => changeAmount({idx, change: 'increment'})}>
                                                    <svg className="w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"></path></svg>
                                                </button>
                                            </div>
                                        </td>
                                        <td className="pr-12 py-2 max-sm:pr-4">{val.price}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            :
                <div className="text-center mt-24">
                    <h2 className="text-2xl opacity-10 font-semibold">
                        <svg className="w-20 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 9.5C12.8284 9.5 13.5 8.82843 13.5 8C13.5 7.17157 12.8284 6.5 12 6.5C11.1716 6.5 10.5 7.17157 10.5 8C10.5 8.82843 11.1716 9.5 12 9.5ZM14 15H13V10.5H10V12.5H11V15H10V17H14V15Z"></path></svg>
                        product not found
                    </h2>
                </div>
            }
        </>
    )
}

export default CartProduct