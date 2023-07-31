import Menu from "./Menu"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-cols-1 place-content-between bg-white dark:bg-zinc-800'>
      <Menu />
      <main className='lg:w-1/3 mx-auto min-h-[70vh] rounded-xl'>
        <div className='h-full p-8 text-zinc-800 dark:text-white grid grid-cols-1 place-content-center'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
