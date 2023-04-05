import React from 'react';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './homepage.css'
import { useNavigate } from 'react-router-dom';

//INTERFACES
interface ItemInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
  }

interface Rating {
    rate: number;
    count: number;
  }
  

const HomePage = () => {
    const [item, setItem] = useState<ItemInterface[]>([])
    const navigate = useNavigate();

    //API FETCH

    const getApi = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setItem(response.data)
        })
    }

    useEffect(() => {
        getApi()
    },[])

    //HORIZONTAL SCROLL FUNCTIONS

    const sliderRight = () => {
        var slider = document.getElementById('slider')!;
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const sliderLeft = () => {
        var slider = document.getElementById('slider')!;
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    return (
        <div>
            <div className="flex flex-row overflow-x-scroll scroll scroll-smooth sliderClass" id='slider'>
                {/* HORIZONTAL SCROLL BUTTONS */}
            <button type="button" className="text-white absolute top-1/2 right-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sliderRight}>
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Icon description</span>
            </button>
            <button type="button" className="text-white absolute top-1/2 left-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sliderLeft}>
            <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 010 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
            <span className="sr-only">Icon description</span>
            </button>


            {item.map((e) => (

                //PRODUCT CARDS

<div className="m-2 mt-10 w-64 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between items-center" >
        <img className="p-8 rounded-t-lg h-52 w-48 cursor-pointer" src={e.image} alt="product image" onClick={() => {
    navigate(`/item/${e.id}`, {
        state: {
            id: e.id,
            image: e.image,
            title: e.title,
            description: e.description,
            category: e.category,
            price: e.price,
            rating: {
                rate: e.rating.rate,
                count: e.rating.count
            }
        }
    })
}} />
        <h5 className="text-m text-left font-semibold break-normal tracking-tight text-gray-900 flex p-5 dark:text-white">{e.title}</h5>

    <div className="px-5 pb-5 w-72">
        <div className="flex mx-5 mt-2.5 mb-5">
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">{e.rating.rate}</span>
        </div>
        <div className="flex items-center justify-evenly">
            <span className="text-l font-bold text-gray-900 dark:text-white">${e.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xs px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
        </div>
    </div>
</div>
            ))}


            </div>
            
        </div>
    );
}

export default HomePage;