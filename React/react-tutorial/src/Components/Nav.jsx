import React from 'react'

const Nav = ({label}) => {
  return (
    <div className=' hover:underline text-zinc-900'>
       

        <div class="w-full md:block md:w-auto hidden" id="mobile-menu">
        <ul class="text-2xl flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
       
         
            {label}
         
        </ul>
        </div>
    </div>


  )
}

export default Nav