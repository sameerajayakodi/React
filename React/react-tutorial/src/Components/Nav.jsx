import React from 'react'

const Nav = ({label}) => {
  return (
    <div className=' hover:underline text-zinc-900'>
       

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
        <ul className="flex flex-col mt-4 text-2xl md:flex-row md:space-x-8 md:mt-0 md:font-medium">
       
         
            {label}
         
        </ul>
        </div>
    </div>


  )
}

export default Nav