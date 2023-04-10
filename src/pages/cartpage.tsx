import React from 'react'
import { useSelector } from 'react-redux'
import { store } from '../redux/redux';


const CartPage = () => {
    const cartItems:any = useSelector(store => store)
    function removeFromCart(productId:number, quantity:number) {
        return {
            type: 'cart/removeFromCart',
            payload: {
                productId,
                quantity,
            },
        };
    }

    const removeHandler = (e:any) => {
        store.dispatch(removeFromCart(e.productId,e.quantity))
    }

    const totalPrice: number = cartItems.cart.items.reduce(
        (accumulator:number, product:any) => accumulator + product.price * product.quantity,
        0
      );

    return (
    <div>
        <h1 className='text-3xl m-5'>Your cart:</h1>
        <div className='border border-gray-200 rounded-lg m-10 min-h-64'>
        {cartItems.cart.items.map((e:any) => (
            <div>
                <div className="border border-gray-200 rounded-lg m-10 p-5 flex sm:flex-row flex flex-col items-center h-max">
                <img src={e.image} className="h-36 w-32"/>
                <div className="flex flex-col justify-between h-36 pl-5 w-full">
                    <div className="flex flex-row">
                        <h1 className="text-3xl">{e.title}</h1>
                    </div>
                    <div className="flex flex-row justify-between w-full">
                        <h1 className="text-3xl">${e.price}</h1>
                        <div className="flex flex-row"><h1 className='pr-5 text-xl pt-2'>Amount: {e.quantity}</h1>
                        <a href="#" onClick={() => removeHandler(e)}className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Remove from cart</a></div>
                    </div>
                </div>
                </div>
            </div>
        ))}
        </div>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-3xl m-5'>Total price: ${totalPrice.toFixed(2)}</h1>
            <button className="text-white m-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Proceed to checkout</button>
        </div>
    </div>
  )
}

export default CartPage