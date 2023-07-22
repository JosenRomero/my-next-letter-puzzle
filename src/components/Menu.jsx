import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <nav className='border-b border-gray-200 p-4'>
      <div className='md:w-3/4 mx-auto flex items-center gap-x-3'>
        <Link className='text-zinc-800 hover:underline hover:text-zinc-800' to={"/"}>Next Letter Puzzle</Link>
      </div>
    </nav>
  )
}

export default Menu
