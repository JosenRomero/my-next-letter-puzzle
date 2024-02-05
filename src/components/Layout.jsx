import Menu from "./Menu"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className='min-h-screen grid grid-cols-1 place-content-between bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-slate-900 font-mono'>
      <Menu />
      <main className='w-full mx-auto min-h-[70vh] rounded-xl'>
        <div className='h-full p-2 sm:p-8 text-zinc-800 dark:text-white grid grid-cols-1 place-content-center'>
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Layout
