import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { PageContext } from '../context/context';
import { useContext } from 'react';
import axios from 'axios';

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



const Navbar = () => {
  const {activePage, setActivePage} = useContext(PageContext)
  const [isActive, setIsActive] = useState(false)
  const [isSticky, setIsSticky] = useState<boolean>(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<ItemInterface[]>([])
  const [item, setItem] = useState<ItemInterface[]>([])
  const navigate = useNavigate();
  const cartStore:any = useSelector(store => store)


  const handleInputChange = (e:any) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    const newResults = item.filter((option) =>
      option.title.toLowerCase().includes(newQuery.toLowerCase())
    );
    setResults(newResults);
  }

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

  const handleFocus = () => {
    setIsActive(true)
  }

  const handleBlur = () => {
    setIsActive(false)
  }


  //SCROLL ANIMATION

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);;
  
  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

    return (
        <div className={`${isSticky ? 'sticky top-0 transition-all duration-500 ease-in-out transform -translate-y-full' : 'sticky top-0'}`}>
            <nav className={`bg-white border-gray-200 dark:bg-gray-900 shadow-md w-full sticky`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="#" className="flex items-center">
      <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" onClick={() => {
        navigate('/')
        setActivePage('home')
      }}>FC SHOP</span>
  </a>
  <div className="flex md:order-2">
    <button type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search" aria-expanded="false" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1" >
      <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
      <span className="sr-only">Search</span>
    </button>
    <div className="relative hidden md:block">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="search" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e) => handleInputChange(e)} placeholder="Search..." onBlur={handleBlur} onFocus={handleFocus}></input>
      {isActive && (
        <ul className='bg-red-700'>
          {results.map((e) => ( 
            <li>{e.title}</li>
          ))}
        </ul>
      )}
    </div>
    <div className='flex items-center ml-5 cursor-pointer ' onClick={() => {
      navigate('/cart')
      setActivePage('cart')
    }}>
      <div className='bg-red-500 rounded-xl text-white w-5 h-5 flex items-center justify-center text-sm relative top-0 right-0'><h1>{cartStore.cart.total}</h1></div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${activePage === 'cart' ? 'text-blue-700' : ''}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </div>
    <button data-collapse-toggle="navbar-search" type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-search" aria-expanded="false">
      <span className="sr-only">Open menu</span>
      <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
      <div className="relative mt-3 md:hidden">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="search-navbar" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."></input>
      </div>
      <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        <div onClick={() => {
            navigate('/')
            setActivePage('home')
            console.log(activePage)
          }} className={`${activePage === 'home' ? 'text-blue-700' : ''}`}>
        <li>
        <a className={`block cursor-pointer py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700`}
          >Home</a>
        </li>
        </div>
        <li>
          <a href="#" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activePage === `about` ? 'text-blue-700' : ''}`}
          onClick={() => {
            navigate('/about')
            setActivePage('about')
          }}>About</a>
        </li>
        <li>
          <a href="#" className={`block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${activePage === 'contacts' ? 'text-blue-700' : ''}`} onClick={() => {
            navigate('/contact')
            setActivePage('contacts')
            console.log(activePage)
          }}>Contacts</a>
        </li>
      </ul>
    </div>
  </div>
  <div className="bg-blue-500 text-center text-white cursor-pointer">
    <ul className="flex flex-row justify-evenly">
    <li className={`hover:bg-blue-700 w-full ${activePage === `men's clothing` ? 'bg-blue-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage(`men's clothing`)
        console.log(activePage)
      }}>Men</li>
      <li className={`hover:bg-blue-700 w-full ${activePage === `women's clothing` ? 'bg-blue-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage(`women's clothing`)
        console.log(activePage)
      }}>Women</li>
      <li className={`hover:bg-blue-700 w-full ${activePage === 'electronics' ? 'bg-blue-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage('electronics')
        console.log(activePage)
      }}>Electronics</li>
      <li className={`hover:bg-blue-700 w-full ${activePage === 'jewelery' ? 'bg-blue-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage('jewelery')
        console.log(activePage)
      }}>Jewellery</li>
    </ul>
  </div>
</nav>

        </div>
    );
}

export default Navbar;