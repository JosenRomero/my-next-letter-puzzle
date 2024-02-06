const Modal = ({ children, isOpen, closeModal, title }) => {
  const handleModalDialogClick = (e) => e.stopPropagation()

  return (
    <div
      className={`bg-black/75 fixed top-0 left-0 w-screen h-screen z-10 justify-center items-center ${
        isOpen ? "grid" : "hidden"
      }`}
      onClick={closeModal}
    >
      <div
        className='bg-white p-5 rounded-xl m-3 dark:bg-slate-800 overflow-y-scroll h-[90vh] sm:overflow-auto sm:h-auto animate-fade-in-down'
        onClick={handleModalDialogClick}
      >
        <div className='flex'>
          <h2 className='text-center text-slate-500 dark:text-white grow'>
            {title}
          </h2>
          <button className='flex-none' onClick={closeModal}>
            X
          </button>
        </div>
        {children}
      </div>
    </div>
  )
}

export default Modal
