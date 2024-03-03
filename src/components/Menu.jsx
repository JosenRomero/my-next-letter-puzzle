import { NavLink } from "react-router-dom"
import ChangeTheme from "./ChangeTheme"
import HowToPlay from "./HowToPlay"
import icon from "../images/icon.svg"

const Menu = () => {
  return (
    <nav className='p-4'>
      <div className='md:w-3/4 mx-auto flex items-center md:justify-between gap-x-3'>
        <div className='flex gap-2 items-center'>
          <img className='w-16 h-16' src={icon} />
        </div>
        <div className='text-zinc-800 dark:text-white flex gap-x-5'>
          <NavLink
            className={({ isActive }) => 
              [
                isActive ? "border-b-2 border-cyan-500" : "",
                "font-bold text-lg text-cyan-500 hover:text-cyan-500 hover:opacity-60"
              ].join(" ")
            }
            to={"/"}
          >
            Inicio
          </NavLink>
          <HowToPlay />
          <ChangeTheme />
        </div>
      </div>
    </nav>
  )
}

export default Menu
