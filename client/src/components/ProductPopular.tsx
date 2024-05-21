import axios from "axios"
import { useEffect, useState } from "react"
import Toast from "./fragment/Toast";
import useCart, { cartItem } from "../store/useCart";

type openToastType = {
    open: boolean,
    message: string,
    status: 'succes' | 'warning' | 'info'
}

function ProductPopular() {
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
            <h1 className="text-xl font-semibold">Popular</h1>
            {/* Product list */}
            <div className="py-2 px-1 flex flex-col gap-4" style={{scrollbarWidth: "none"}}>
                {
                    product ? 
                        product.map((product) => {
                            return(
                                <div key={product._id} className="p-4 flex gap-4 rounded-xl shadow">
                                    <img src={product.img} alt="apple" className="w-24 aspect-square rounded-xl" />
                                    <div className="relative text-ellipsis overflow-hidden">
                                        <span>
                                            <h2 className="font-semibold text-nowrap">{product.name}</h2>
                                            <p className="text-sm text-nowrap">Rp {product.price}</p>
                                        </span>
                                        <button onClick={() => adToCart(product)} className="absolute bottom-0 right-0 p-2 text-nowrap bg-emerald-500 text-white text-xs rounded shadow max-sm:text-xs">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4.00488 16V4H2.00488V2H5.00488C5.55717 2 6.00488 2.44772 6.00488 3V15H18.4433L20.4433 7H8.00488V5H21.7241C22.2764 5 22.7241 5.44772 22.7241 6C22.7241 6.08176 22.7141 6.16322 22.6942 6.24254L20.1942 16.2425C20.083 16.6877 19.683 17 19.2241 17H5.00488C4.4526 17 4.00488 16.5523 4.00488 16ZM6.00488 23C4.90031 23 4.00488 22.1046 4.00488 21C4.00488 19.8954 4.90031 19 6.00488 19C7.10945 19 8.00488 19.8954 8.00488 21C8.00488 22.1046 7.10945 23 6.00488 23ZM18.0049 23C16.9003 23 16.0049 22.1046 16.0049 21C16.0049 19.8954 16.9003 19 18.0049 19C19.1095 19 20.0049 19.8954 20.0049 21C20.0049 22.1046 19.1095 23 18.0049 23Z"></path></svg>
                                        </button>
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

export default ProductPopular