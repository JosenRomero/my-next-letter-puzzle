import { useTranslation } from "react-i18next"
import Button from "./Button"
import CirclesContainer from "./CirclesContainer"
import { TOTAL_LEVELS_IN_CHAPTER_G } from "../utils/CONSTANTS"

const ResultContainer = ({ win, level, nextLevel, tryAgain }) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-center'>
        {win.nextLevel ? t("title.win") : t("title.lost")}
      </h3>
      <CirclesContainer arr={win.arr} />
      {win.nextLevel && level + 1 > TOTAL_LEVELS_IN_CHAPTER_G && (
        <p className='p-2 bg-lime-500 text-white text-center'>{t("endText")}</p>
      )}
      {win.nextLevel && level + 1 <= TOTAL_LEVELS_IN_CHAPTER_G && (
        <Button handleButton={nextLevel} text={t("buttons.nextLevel")} />
      )}
      {!win.nextLevel && (
        <Button handleButton={tryAgain} text={t("buttons.tryAgain")} />
      )}
    </div>
  )
}

export default ResultContainer
