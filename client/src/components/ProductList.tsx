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
    const skeleton = [1,2,3]

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
            console.log(error);   
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    return (
        <div>
            <h1 className="text-xl font-semibold">Shopping</h1>
            {/* Product list */}
            <div className="flex gap-4 flex-wrap">
                {
                    product ? 
                    product.map((val) => {
                        return(
                            <div key={val._id} className="p-4 flex gap-4 w-max rounded-xl shadow">
                                <img src={val.img} alt="apple" className="min-w-32 min-h-24 max-w-32 max-h-24 rounded-xl" />
                                <div className="flex flex-col justify-between w-32">
                                    <span>
                                        <h2 className="font-semibold">{val.name}</h2>
                                        <p className="text-sm">Rp {val.price}</p>
                                    </span>
                                    <button className="p-2 bg-emerald-700 text-white text-xs rounded shadow">Add to cart</button>
                                </div>
                            </div>
                        )
                    })
                    : 
                        skeleton.map(val => {
                            return(
                                <div key={val} className="p-4 flex gap-4 w-max rounded-xl shadow">
                                    <div className="bg-slate-100 w-32 rounded-xl"></div>
                                    <div className="flex flex-col justify-between w-20">
                                        <div>
                                            <div className="bg-slate-100 h-5"></div>
                                            <div className="mt-4 bg-slate-100 h-5"></div>
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