import { useTranslation } from "react-i18next"
import HUDContainer from "./HUDContainer"
import ButtonsContainer from "./ButtonsContainer"
import DangerAlert from "./DangerAlert"

const BoxTop = ({
  handleLetter,
  letter,
  word,
  level,
  wordsLength,
  wordsLengthTotal,
  topic,
  refBox
}) => {
  const { t } = useTranslation()

  return (
    <>
      <HUDContainer
        level={level}
        wordsLength={wordsLength}
        wordsLengthTotal={wordsLengthTotal}
        topic={topic}
      />
      <div className='text-center mt-5'>
        <ButtonsContainer handleButton={handleLetter} arr={letter} />
      </div>
      <div className='min-h-[50px] text-gray-900 dark:text-gray-400 text-xl font-semibold text-center'>
        <p ref={refBox}>{word}</p>
      </div>
      <DangerAlert show={word.length >= 20} text={`${t("alerts.dangerAlert1")}`} />
    </>
  )
}

export default BoxTop
