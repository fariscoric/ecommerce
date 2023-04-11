import React , {createContext} from 'react'
import { useState } from 'react';
const PageContext = createContext({
    activePage: `men's clothing`,
    setActivePage: (arg:string) => {},
});

const PageContextProvider = ({children}:any) => {
    const [activePage, setActivePage] = useState(`home`)
    const values = {
        activePage,
        setActivePage,
    }
    
    return (
        <div className='flex flex-col justify-between h-full'>
            <PageContext.Provider value={values}>
                {children}
            </PageContext.Provider>
        </div>
    )
}

export {PageContext, PageContextProvider}