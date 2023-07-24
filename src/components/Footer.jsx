const Footer = () => {
  return (
    <footer className='text-center p-2 [&_*]:text-zinc-800 [&_*]:dark:text-white'>
      <p>
        <span>Developed by </span>
        <a
          className='hover:underline hover:text-zinc-800'
          href='https://github.com/JosenRomero'
          target='_blank'
        >
          José Romero
        </a>
      </p>
    </footer>
  )
}

export default Footer
