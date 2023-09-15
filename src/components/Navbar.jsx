import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='bg-blue-200 flex justify-around items-center font-sans py-4'>
        <div className="left">
            <h1 className='text-3xl font-bold'>Your List</h1>
        </div>
        <div className="right">
            <ul className='flex items-center gap-10 font-semibold text-2xl'>
                <Link to={"/all"} className='cursor-pointer'>All</Link>
                <Link to={"/add"} className='cursor-pointer'>Add</Link>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar