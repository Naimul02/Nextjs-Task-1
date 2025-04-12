'use client'
import React, { useEffect, useState } from 'react'

export default function ClientLayout({children}) {

    
const [theme, setTheme] = useState('white')


useEffect(() => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    setTheme(savedTheme)
  }
}, [])

const toggleTheme = () => {
  const newTheme = theme === 'dark' ? 'white' : 'dark'
  setTheme(newTheme)
  localStorage.setItem('theme', newTheme)
}


  return (
    <div>
<main className={`${theme === 'dark' ? 'bg-gray-900 text-white' : theme === 'white' ? 'bg-white text black' : ''}`}>
      <nav>
        <div className="navbar border-b border-white shadow-sm px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      
    </div>
    <a className="btn btn-ghost text-xl">NESN39</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end">
  
  
          <input type="checkbox" className="toggle" onChange={toggleTheme} checked={theme === 'dark'} />
  
  </div>
</div>
        </nav>


        {children}

  <footer className={`${theme === 'dark' ? 'border-t border-white' : theme === 'white' ? 'bg-base-300 text black' : ''} footer sm:footer-horizontal footer-center   p-4`}>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer>
  
  </main>

    
    </div>
  )
}
