import React from "react";
import { useLocation } from "react-router-dom";

const ItemPage = () => {
    const { state } = useLocation();
    const itemId = state.id;
    const itemImage = state.image;
    const itemTitle = state.title;
    const itemDescription = state.description;
    const itemCategory = state.category;
    const itemPrice = state.price;
    const itemRating = state.rating;
    return (
        <div>
            <div className="border border-gray-200 rounded-lg m-10 p-5 flex sm:flex-row flex flex-col items-center">
                <img src={itemImage} className="h-72"/>
                <div className="flex flex-col justify-between h-full pl-5">
                    <div className="flex flex-row">
                        <h1 className="text-3xl">{itemTitle}</h1>
                        <span className="bg-blue-100 text-blue-800 text-s font-semibold mr-2 h-full px-2.5 py-2.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{itemRating.rate}</span>
                    </div>
                    <div className="w-3/4"><h1>{itemDescription}</h1></div>
                    <div className="flex flex-row justify-between">
                        <h1 className="text-3xl">${itemPrice}</h1>
                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemPage;