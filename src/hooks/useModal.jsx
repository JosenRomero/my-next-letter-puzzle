import { useState, useEffect } from "react"

export const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false)

  useEffect(() => {
    let value = localStorage.getItem("HowToPlay")

    if (value === null) {
      localStorage.setItem("HowToPlay", JSON.stringify(true))
      openModal()
    }
  }, [])

  const openModal = () => setIsOpenModal(true)

  const closeModal = () => setIsOpenModal(false)

  return {
    isOpenModal,
    openModal,
    closeModal,
  }
}
