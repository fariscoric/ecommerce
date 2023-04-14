import React, { useEffect, useRef, useState } from 'react';
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
  const myElementRef = useRef<HTMLInputElement>(null)

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
    setTimeout(() => {
      setIsActive(false)
    },100)
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
      myElementRef.current?.blur()
    } else {
      setIsSticky(false);
    }
  };



  var themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
  var themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');
  
  // Change the icons inside the button based on previous settings
  if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      themeToggleLightIcon?.classList.remove('hidden');
  } else {
      themeToggleDarkIcon?.classList.remove('hidden');
  }
  
  var themeToggleBtn = document.getElementById('theme-toggle');
  
  const darkModeHandler = () => {
    themeToggleDarkIcon?.classList.toggle('hidden');
      themeToggleLightIcon?.classList.toggle('hidden');
  
      // if set via local storage previously
      if (localStorage.getItem('color-theme')) {
          if (localStorage.getItem('color-theme') === 'light') {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          } else {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          }
  
      // if NOT set via local storage previously
      } else {
          if (document.documentElement.classList.contains('dark')) {
              document.documentElement.classList.remove('dark');
              localStorage.setItem('color-theme', 'light');
          } else {
              document.documentElement.classList.add('dark');
              localStorage.setItem('color-theme', 'dark');
          }
      }
  }

    return (
        <div className={`${isSticky ? 'sticky top-0 transition-all duration-500 ease-in-out transform -translate-y-full' : 'sticky top-0'}`}>
            <nav className={`bg-white border-gray-200 dark:bg-gray-900 shadow-md w-full sticky`}>
  <div className="max-w-screen-xl flex flex-wrap flex-col sm:flex-row items-center justify-between mx-auto p-4">
  <a className="cursor-pointer flex items-center">
      <span className={`mb-2 self-center text-2xl font-semibold whitespace-nowrap dark:text-white ${activePage === 'home' ? 'text-emerald-700' : ''}`} onClick={() => {
        navigate('/')
        setActivePage('home')
      }}>FC SHOP</span>
  </a>

  <button id="theme-toggle" onClick={darkModeHandler} type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5">
    <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
    <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
</button>

  <div className="flex md:order-2">
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input type="search" id="search-navbar" ref={myElementRef} className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-emerald-500 dark:focus:border-emerald-500" onChange={(e) => handleInputChange(e)} placeholder="Search..." onBlur={handleBlur} onFocus={handleFocus}></input>
      {isActive === true ? (
        <div className='bg-white absolute bottom-auto w-52 h-64 border border-emerald-700 flex flex-col overflow-y-scroll'>
          {results.map((e) => (
            <div key={e.id} onClick={() => navigate(`/item/${e.id}`, {
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
          })} className='p-2 hover:bg-emerald-700 hover:text-white text-black border-b cursor-pointer border-gray-400'>{e.title}</div>
        ))}
        
        </div>
      ) : <></> }
    </div>
    <div className='flex items-center ml-5 cursor-pointer ' onClick={() => {
      navigate('/cart')
      setActivePage('cart')
    }}>
      <div className='bg-red-500 rounded-xl text-white w-5 h-5 flex items-center justify-center text-sm relative top-0 right-0'><h1>{cartStore.cart.total}</h1></div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-6 h-6 ${activePage === 'cart' ? 'text-emerald-700' : ''}`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    </div>
  </div>
  </div>
  <div className="bg-emerald-500 text-center text-white cursor-pointer">
    <ul className="flex flex-row justify-evenly">
    <li className={`hover:bg-emerald-600 w-full ${activePage === `men's clothing` ? 'bg-emerald-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage(`men's clothing`)
      }}>Men</li>
      <li className={`hover:bg-emerald-600 w-full ${activePage === `women's clothing` ? 'bg-emerald-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage(`women's clothing`)
      }}>Women</li>
      <li className={`hover:bg-emerald-600 w-full ${activePage === 'electronics' ? 'bg-emerald-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage('electronics')
      }}>Electronics</li>
      <li className={`hover:bg-emerald-600 w-full ${activePage === 'jewelery' ? 'bg-emerald-700' : ''}`} onClick={() => {
        navigate('/category')
        setActivePage('jewelery')
      }}>Jewellery</li>
    </ul>
  </div>
</nav>

        </div>
    );
}

export default Navbar;