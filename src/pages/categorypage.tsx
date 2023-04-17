import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { PageContext } from '../context/context';
import { useContext } from 'react';
import { store } from '../redux/redux'

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


const CategoryPage = () => {
  const navigate = useNavigate();
  const {activePage, setActivePage} = useContext(PageContext)
  const [item, setItem] = useState<ItemInterface[]>([])

  const getApi = () => {
    axios.get('https://fakestoreapi.com/products')
    .then((response) => {
        setItem(response.data)
    })
}

useEffect(() => {
    getApi()
},[])

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
      {item.map((e) => (
            <div key={e.id}>
              {e.category === `${activePage}` ?
              <div className="dark:bg-neutral-900 dark:text-white border border-neutral-200 shadow-md rounded-lg m-10 p-5 flex sm:flex-row flex flex-col dark:border-red-500 items-center h-max">
                <div className='bg-white p-2 rounded-lg'>
              <img src={e.image} className="h-36 w-32 cursor-pointer" onClick={() => {
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
    setActivePage('')
}}/>
  </div>
              <div className="flex flex-col justify-between sm:h-36 pl-5 w-full">
                  <div className="flex flex-row">
                      <h1 className="text-3xl">{e.title}</h1>
                  </div>
                  <div className="flex flex-row justify-between flex-col sm:flex-row w-full">
                      <h1 className="text-3xl">${e.price}</h1>
                      <button onClick={() => onClickHandler(e)} className="bg-red-700 hover:bg-red-800  dark:bg-red-700 dark:hover:bg-red-800 mt-2 text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 text-center dark:focus:ring-red-400">Add to cart</button>
                  </div>
              </div>
              </div> : <></>}
                
            </div>
        ))}
    </div>
  )
}

export default CategoryPage