import { navLinks } from "../constants";
import { FiAlignJustify, FiUser, FiShoppingCart, FiSearch } from "react-icons/fi";
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header className="py-2 absolute z-10 w-full bg-black">
      <nav className="flex h-16 justify-between items-center max-container">
      <div className='hidden sm:block w-nav-i-width lr-12'></div>
        <ul className='flex-1 flex justify-center items-center gap-10 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='leading-normal text-sm text-white font-merriweather '
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden lg:block w-nav-i-width pr-12'>
          <IconContext.Provider value={{ color: "white", size: "25px" }}>
            <ul className="flex flex-row justify-between items-center hover:cursor-pointer">
              <li><FiSearch /></li> 
              <li><FiShoppingCart /></li> 
              <li><FiUser /></li> 
            </ul>
          </IconContext.Provider>
        </div>
        <div className='block lg:hidden pr-10 hover:cursor-pointer'>
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <FiAlignJustify />
          </IconContext.Provider>
        </div>
      </nav>
    </header>
  )
}

export default Nav;