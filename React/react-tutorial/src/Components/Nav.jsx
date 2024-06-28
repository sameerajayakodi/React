import React from 'react'

const Nav = ({label}) => {
  return (
    <div className=' hover:underline text-zinc-900'>
        {label}

        <nav class="bg-white border border-gray-200 dark:border-gray-700 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800 shadow"></nav>
    </div>


  )
}

export default Nav