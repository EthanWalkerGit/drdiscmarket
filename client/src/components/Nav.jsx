import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";

const Nav = () => {
  return (
    <header className="py-2 absolute z-10 w-full bg-header">
      <nav className="flex justify-between items-center max-container">
        <a href='/'>
          <img 
           src={headerLogo}
           alt='logo'
           width={200}
           height={80}
           className='m-0 w-[200px] h-[80px], pl-3'
          />
        </a>
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='leading-normal text-lg text-white font-ibm-plex-sans-bold-italic font-bold'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='flex gap-2 text-lg text-white leading-normal font-ibm-plex-sans-bold-italic font-bold max-lg:hidden lg:mr-24'> 
          <a href='/'>Sign Up</a>
          <span>/</span>
          <a href='/'>Log In</a>
        </div>
        <div className='hidden max-lg:block pr-10 hover:cursor-pointer'>
          <IconContext.Provider value={{ color: "white", size: "35px" }}>
            <GiHamburgerMenu />
          </IconContext.Provider>
        </div>
      </nav>
    </header>
  )
}

export default Nav;