import { useTranslation } from "react-i18next"
import confetti from "canvas-confetti"
import Button from "./Button"
import CirclesContainer from "./CirclesContainer"
import { TOTAL_LEVELS } from "../utils/CONSTANTS"

const ResultContainer = ({ win, level, nextLevel, tryAgain }) => {
  const { t } = useTranslation()

  if(win.nextLevel && level > TOTAL_LEVELS) confetti()

  return (
    <div className='bg-white lg:w-1/3 mx-auto flex flex-col gap-5 p-8 rounded-lg dark:bg-slate-800 border border-gray-200 shadow dark:border-gray-700 animate-fade-in-down'>
      <h3 className='text-center'>
        {win.nextLevel ? t("title.win") : t("title.lost")}
      </h3>
      <CirclesContainer arr={win.arr} />
      {win.nextLevel && level > TOTAL_LEVELS && (
        <p className='p-2 bg-green-600 text-green-100 text-center mt-5'>{t("endText")}</p>
      )}
      <div className="text-center">
        {win.nextLevel && level <= TOTAL_LEVELS && (
          <Button handleButton={nextLevel} text={t("buttons.nextLevel")} />
        )}
        {!win.nextLevel && (
          <Button handleButton={tryAgain} text={t("buttons.tryAgain")} />
        )}
      </div>
    </div>
  )
}

export default ResultContainer
