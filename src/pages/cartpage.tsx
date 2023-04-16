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
    <div className='dark:text-white dark:bg-neutral-700'>
        <h1 className='text-3xl m-5'>Your cart:</h1>
        <div className='border border-neutral-200 dark:border-red-400 rounded-lg m-10 min-h-64 bg-blue-500 dark:bg-red-800'>
        {cartItems.cart.items.map((e:any) => (
                <div key={e.id} className="border dark:bg-neutral-800 border-neutral-200 dark:border-neutral-500 rounded-lg p-5 m-3 bg-white shadow-md overflow-hidden flex sm:flex-row flex flex-col items-center">
                    <div className='bg-white rounded-lg p-2'>
                <img src={e.image} className="h-36 w-32"/>
                    </div>
                <div className="flex flex-col justify-between h-36 pl-5 w-full h-auto sm:h-44">
                    <div className="flex flex-row h-auto">
                        <h1 className="text-3xl">{e.title}</h1>
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-center w-full">
                        <h1 className="text-3xl">${e.price}</h1>
                        <div className="flex flex-col items-center sm:flex-row text-center"><h1 className='pr-5 text-xl pt-2'>Amount: {e.quantity}</h1>
                        <button onClick={() => removeHandler(e)} className="dark:bg-red-700 dark:hover:bg-red-800 mt-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:focus:ring-red-400">Remove from cart</button></div>
                    </div>
                </div>
                </div>
        ))}
        </div>
        <div className='flex flex-row justify-between items-center'>
            <h1 className='text-3xl m-5'>Total price: ${totalPrice.toFixed(2)}</h1>
            <button className="text-white m-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">Proceed to checkout</button>
        </div>
    </div>
  )
}

export default CartPage