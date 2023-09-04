import Menu from "./Menu"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-cols-1 place-content-between bg-gray-200 dark:bg-slate-900 font-mono'>
      <Menu />
      <main className='w-full mx-auto min-h-[70vh] rounded-xl'>
        <div className='h-full p-8 text-zinc-800 dark:text-white grid grid-cols-1 place-content-center'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
