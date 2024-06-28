import React from 'react'

const Nav = ({label}) => {
  return (
    <div className=' hover:underline text-zinc-900'>
        {label}

        <nav class="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow">

        <div class="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" class="flex items-center">
        <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
          Test
        </span>
        </a>
        </div>

        </nav>
    </div>


  )
}

export default Nav