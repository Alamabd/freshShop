import { useEffect, useState } from "react"
import useCart from "../store/useCart"
import FormatIdr from "../utils/FormatIdr"

function CardDetails() {
    const { cart } = useCart()

    const [ fees, setFees ] = useState(0)

    let totalPrice = 0 - fees

    useEffect(() => {
        cart.length !== 0 && setFees(2000 * cart.length)
        console.log(totalPrice);        
    })
    
    return (
        <>
            { cart.length !== 0 && 
            <div className="p-8 shadow rounded border max-md:p-4">
                <h2 className="font-semibold">Card Details</h2>
                <table className="mt-4 table-auto max-sm:w-full">
                    <tbody>
                        {
                            cart.map(val => {
                                totalPrice += parseInt(val.price)
                                return (
                                    <tr key={val._id}>
                                        <td>{val.name}</td>
                                        <td className="px-12 text-nowrap max-lg:px-4">{val.amount} pcs</td>
                                        <td className="text-end">{FormatIdr(parseInt(val.price) * val.amount)}</td>
                                    </tr>
                                )
                            })
                        }
                        <tr className="border-b">
                            <td className="pt-4 pb-2 text-nowrap">handling fees</td>
                            <td className="pt-4 pb-2"></td>
                            <td className="pt-4 pb-2 text-end">{FormatIdr(fees)}</td>
                        </tr>
                        <tr className="border-b">
                            <td className="py-2 text-nowrap">Total Price</td>
                            <td className="py-2"></td>
                            <td className="py-2 text-end">{FormatIdr(totalPrice)}</td>
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