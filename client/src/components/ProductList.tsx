import axios from "axios"
import { useEffect, useState } from "react"
import Toast from "./fragment/Toast";
import useCart, { cartItem } from "../store/useCart";

type openToastType = {
    open: boolean,
    message: string,
    status: 'succes' | 'warning' | 'info'
}

function ProductList() {
    const [ product, setProduct ] = useState<cartItem[]>();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]
    const [ openToast, setOpenToast ] = useState<openToastType>({
        open: false,
        message: 'hello world',
        status: 'succes'
    })
    const { cart, addCart } = useCart()

    async function getProduct() {
        try {
             const result = await axios.get('http://localhost:8000/product')
            if(result.status === 200) {
                const { data } = result.data
                setProduct(data)
            }
        } catch (error) {
            setOpenToast({
                open: true,
                message: 'Falied fecth data product',
                status: 'warning'
            })
            console.log(error)
        }
    }

    function adToCart(product: cartItem) {
        const exits = cart.find(item => item._id === product._id)
        if(!exits) {
            addCart({...product, amount: 1})
            setOpenToast({
                open: true,
                message: `${product.name} added to cart`,
                status: 'succes'
            })
        } else {
            setOpenToast({
                open: true,
                message: `${product.name} has been added`,
                status: 'info'
            })
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="mt-12">
            <Toast message={openToast?.message} positionX="right" positionY="bottom" status={openToast.status} open={openToast?.open} timeout={3000} onClose={(close) => setOpenToast({...openToast, open: !close})} />
            <h1 className="text-xl font-semibold">Shopping</h1>
            {/* Product list */}
            <div className="py-2 px-1 flex overflow-auto gap-4" style={{scrollbarWidth: "none"}}>
                {
                    product ? 
                        product.map((product) => {
                            return(
                                <div key={product._id} className="p-4 flex gap-4 rounded-xl shadow">
                                    <img src={product.img} alt="apple" className="w-24 aspect-square rounded-xl" />
                                    <div className="flex flex-col justify-between w-52">
                                        <span>
                                            <h2 className="font-semibold text-nowrap">{product.name}</h2>
                                            <p className="text-sm text-nowrap">Rp {product.price}</p>
                                        </span>
                                        <button onClick={() => adToCart(product)} className="p-2 text-nowrap bg-emerald-700 text-white text-xs rounded shadow max-sm:text-xs">Add to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    : 
                        skeleton.map(product => {
                            return(
                                <div key={product} className="p-4 flex gap-4 w-max rounded-xl shadow">
                                    <div className="bg-slate-100 w-24 aspect-square rounded-xl"></div>
                                    <div className="flex flex-col justify-between w-28">
                                        <div>
                                            <div className="bg-slate-100 h-4"></div>
                                            <div className="mt-2 bg-slate-100 h-4"></div>
                                        </div>
                                        <div className="mt-4 bg-slate-100 h-7"></div>
                                    </div>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    )
}

export default ProductList