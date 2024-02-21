import { useTranslation } from "react-i18next"
import Button from "./Button"
import CirclesContainer from "./CirclesContainer"
import { TOTAL_LEVELS } from "../utils/CONSTANTS"

const ResultContainer = ({ win, level, nextLevel, tryAgain }) => {
  const { t } = useTranslation()

  return (
    <div className='bg-white lg:w-1/3 mx-auto flex flex-col gap-5 p-8 rounded-lg dark:bg-slate-800 border border-gray-200 shadow dark:border-gray-700 animate-fade-in-down'>
      <h3 className='text-center'>
        {win.nextLevel ? t("title.win") : t("title.lost")}
      </h3>
      <CirclesContainer arr={win.arr} />
      {win.nextLevel && level + 1 > TOTAL_LEVELS && (
        <p className='p-2 bg-lime-500 text-white text-center'>{t("endText")}</p>
      )}
      <div className="text-center">
        {win.nextLevel && level + 1 <= TOTAL_LEVELS && (
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
