import { useEffect, useState } from "react"
import useCart from "../store/useCart"

function CardDetails() {
    const { cart } = useCart()

    const [ fees, setFees ] = useState(0)

    let totalPrice = 0 - fees

    function totalPriceProduct(price: string, amount: number) {
        const total = parseInt(price.replace(/\D/g, '')) * amount
        totalPrice += total
        return total.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})
    }

    useEffect(() => {
        cart.length !== 0 && setFees(2000)
    })
    
    return (
        <>
            { cart.length !== 0 && 
            <div className="p-8 shadow rounded border max-sm:p-4">
                <h2 className="font-semibold">Card Details</h2>
                <table className="mt-4 table-auto">
                    <tbody>
                        {
                            cart.map(val => {
                                return (
                                    <tr key={val._id}>
                                        <td>{val.name}</td>
                                        <td className="px-12 text-nowrap">{val.amount} pcs</td>
                                        <td className="text-end">{totalPriceProduct(val.price, val.amount)}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr className="border-b">
                            <td className="pt-4 pb-2 text-nowrap">handling fees</td>
                            <td className="pt-4 pb-2"></td>
                            <td className="pt-4 pb-2 text-end">{fees.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 text-nowrap">Total Price</td>
                            <td className="py-2"></td>
                            <td className="py-2 text-end">{totalPrice.toLocaleString('id-ID', {style: 'currency', currency: 'IDR'})}</td>
                        </tr>
                    </tbody>
                </table>
                <button className="p-2 rounded-lg mt-8 w-full text-center bg-emerald-700 text-white text-lg font-semibold">Checkout</button>
            </div>
            }
        </>
    )
}

export default CardDetails