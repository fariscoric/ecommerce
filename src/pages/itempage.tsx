import React from "react";
import { useLocation } from "react-router-dom";
import { store } from '../redux/redux'



const ItemPage = () => {
    const { state } = useLocation();
    const itemId = state.id;
    const itemImage = state.image;
    const itemTitle = state.title;
    const itemDescription = state.description;
    const itemCategory = state.category;
    const itemPrice = state.price;
    const itemRating = state.rating;

    function addToCart(productId:number, quantity:number, title:string, image:string, price: number, description: string,) {
        return {
            type: 'cart/addToCart',
            payload: {
                productId,
                quantity,
                title,
                image,
                price,
                description,
            },
        };
    }

    const onClickHandler = (e:any) => {
        store.dispatch(addToCart(e.id,1,e.title,e.image,e.price,e.description))
    }

    return (
        <div className="dark:bg-neutral-700">
            <div className="dark:bg-neutral-800 dark:text-white border border-neutral
            -200 shadow-md rounded-lg m-10 p-5 flex sm:flex-row flex flex-col dark:border-red-300 items-center">
                <img src={itemImage} className="h-72 rounded-lg"/>
                <div className="flex flex-col justify-between h-full pl-5">
                    <div className="flex flex-row">
                        <h1 className="text-3xl">{itemTitle}</h1>
                        <span className="bg-red-100 text-red-800 text-s font-semibold mr-2 h-full px-2.5 py-2.5 rounded dark:bg-red-200 dark:text-red-800 ml-3">{itemRating.rate}</span>
                    </div>
                    <div className="w-3/4"><h1>{itemDescription}</h1></div>
                    <div className="flex flex-row justify-between">
                        <h1 className="text-3xl">${itemPrice}</h1>
                        <button onClick={() => onClickHandler(state)} className="dark:bg-red-700 dark:hover:bg-red-800 mt-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:focus:ring-red-400">Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;