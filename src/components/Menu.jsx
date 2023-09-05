import { Link } from "react-router-dom"
import ChangeTheme from "./ChangeTheme"
import HowToPlay from "./HowToPlay"
import icon from "../images/icon.svg"

const Menu = () => {
  return (
    <nav className='p-4'>
      <div className='md:w-3/4 mx-auto flex items-center md:justify-between gap-x-3'>
        <div className='flex gap-2 items-center'>
          <img className='w-9 h-9' src={icon} />
          <Link
            className='text-zinc-800 hover:underline hover:text-zinc-800 dark:text-white font-bold text-lg'
            to={"/"}
          >
            Next Letter Puzzle
          </Link>
        </div>
        <div className='text-zinc-800 dark:text-white flex gap-x-5'>
          <HowToPlay />
          <ChangeTheme />
        </div>
      </div>
    </nav>
  )
}

export default Menu
