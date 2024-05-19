import axios from "axios"
import { useEffect, useState } from "react"

type productProps = {
    _id: string;
    name: string;
    price: string;
    img: string;
}[]

function ProductList() {
    const [ product, setProduct ] = useState<productProps>();
    const skeleton = [1, 2, 3, 4, 5, 6, 7, 8]

    async function getProduct() {
        try {
             const result = await axios.get('http://localhost:8000/product')
            if(result.status === 200) {
                const { data } = result.data
                setTimeout(() => {
                    setProduct(data)
                }, 2000);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div className="mt-12">
            <h1 className="text-xl font-semibold">Shopping</h1>
            {/* Product list */}
            <div className="py-2 px-1 flex overflow-auto gap-4" style={{scrollbarWidth: "none"}}>
                {
                    product ? 
                        product.map((val) => {
                            return(
                                <div key={val._id} className="p-4 flex gap-4 rounded-xl shadow">
                                    <img src={val.img} alt="apple" className="w-24 aspect-square rounded-xl" />
                                    <div className="flex flex-col justify-between w-52">
                                        <span>
                                            <h2 className="font-semibold text-nowrap">{val.name}</h2>
                                            <p className="text-sm text-nowrap">Rp {val.price}</p>
                                        </span>
                                        <button className="p-2 text-nowrap bg-emerald-700 text-white text-xs rounded shadow max-sm:text-xs">Add to cart</button>
                                    </div>
                                </div>
                            )
                        })
                    : 
                        skeleton.map(val => {
                            return(
                                <div key={val} className="p-4 flex gap-4 w-max rounded-xl shadow">
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