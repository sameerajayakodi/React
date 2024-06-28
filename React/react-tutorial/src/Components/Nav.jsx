import React from 'react'

const Nav = ({label}) => {
  return (
    <div >
        {label}

        <div class="w-full md:block md:w-auto hidden" id="mobile-menu">
        <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
       
          <a
            href="#"
            class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
            aria-current="page"
          >
            {label}
          </a>
        </ul>
        </div>
    </div>


  )
}

export default Nav