import { useTranslation } from "react-i18next"
import { BsQuestionCircle } from "react-icons/bs"
import { useModal } from "../hooks/useModal"
import Modal from "./Modal"
import ListItem from "./ListItem"

const HowToPlay = () => {
  const { t } = useTranslation()
  const { isOpenModal, openModal, closeModal } = useModal()

  return (
    <>
      <button
        onClick={openModal}
        className='transition-all hover:-translate-y-0.5'
      >
        <BsQuestionCircle size={22} />
      </button>
      <Modal
        isOpen={isOpenModal}
        closeModal={closeModal}
        title={t("howToPlay.title")}
      >
        <div className='mt-5 flex flex-col gap-5'>
          <div>
            <p>{t("howToPlay.description")}</p>
            <p>{t("howToPlay.goal")}</p>
          </div>
          {[...Array(4)].map((_, i) => {
            return (
              <ListItem
                key={i}
                num={i + 1}
                text={t(`howToPlay.item${i + 1}`)}
              />
            )
          })}
        </div>
      </Modal>
    </>
  )
}

export default HowToPlay
