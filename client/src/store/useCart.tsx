import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export interface cartItem {
  _id: string
  name: string
  price: string
  img: string
  amount: number
}

interface cartState {
  cart: cartItem[]
  addCart: (data: cartItem) => void
  updateAmount: (number: number, idx: number) => void
}

const useCart = create(
  persist<cartState>(
    set => ({
      cart: [],
      addCart: (data) => {
        set((state) => ({cart: [...state.cart, data]}))
      },
      updateAmount: (number, idx) => {
        set((state) => {
          const newCart = [...state.cart]
          if(newCart[idx]) {
            newCart[idx] = {...newCart[idx], amount: number}
          }
          return {cart: newCart}
        })
      }
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => sessionStorage)
    },
  ),
)

useCart.subscribe(() => {
  console.log(useCart.getState())  
})

export default useCart