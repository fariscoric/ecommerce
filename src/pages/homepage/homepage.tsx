import React from 'react';
import Navbar from '../../components/navbar/navbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface ItemArray {
    arr: ItemInterface[]
}

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
    const [item, setItem] = useState<ItemInterface>({
        id: 0,
        title: '',
        price: 0,
        description: '',
        category: '',
        image: '',
        rating: {
            rate: 0,
            count: 0,
        },
    })

    const getApi = () => {
        axios.get('https://fakestoreapi.com/products')
        .then((response) => {
            setItem({
                id: response.data[0].id,
                title: response.data[0].title,
                price: response.data[0].price,
                description: response.data[0].description,
                category: response.data[0].category,
                image: response.data[0].image,
                rating: {
                    rate: response.data[0].rate,
                    count: response.data[0].count
                }
            })
        })
    }

    useEffect(() => {
        getApi()
    },[])

    return (
        <div>
            <Navbar/>
        </div>
    );
}

export default HomePage;