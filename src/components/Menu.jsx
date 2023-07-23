import { Link } from "react-router-dom"
import ChangeTheme from "./ChangeTheme"

const Menu = () => {
  return (
    <nav className='border-b border-gray-200 p-4'>
      <div className='md:w-3/4 mx-auto flex items-center md:justify-between gap-x-3'>
        <Link
          className='text-zinc-800 hover:underline hover:text-zinc-800 dark:text-white'
          to={"/"}
        >
          Next Letter Puzzle
        </Link>
        <div className='text-zinc-800 dark:text-white flex gap-x-3'>
          <ChangeTheme />
        </div>
      </div>
    </nav>
  )
}

export default Menu
