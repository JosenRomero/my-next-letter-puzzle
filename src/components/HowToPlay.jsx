import { BsQuestionCircle } from "react-icons/bs"
import { useModal } from "../hooks/useModal"
import Modal from "./Modal"

const HowToPlay = () => {
  const { isOpenModal, openModal, closeModal } = useModal()

  return (
    <>
      <button
        onClick={openModal}
        className='transition-all hover:-translate-y-0.5'
      >
        <BsQuestionCircle size={22} />
      </button>
      <Modal isOpen={isOpenModal} closeModal={closeModal} title={"How to play"}>
        <div className='mt-5 flex flex-col gap-5'>
          <p>Description...</p>
        </div>
      </Modal>
    </>
  )
}

export default HowToPlay
