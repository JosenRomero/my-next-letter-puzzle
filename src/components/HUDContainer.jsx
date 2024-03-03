import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"
import Indicator from "./Indicator"

const HUDContainer = ({ level, wordsLength, wordsLengthTotal, topic }) => {
  const progressBar = useRef(0)
  const { t } = useTranslation()

  useEffect(() => {

    if(wordsLengthTotal != 0 && wordsLength > 0) {
      progressBar.current.style.width = `${(100/wordsLengthTotal)*wordsLength}%`
    }

  }, [wordsLength])

  return (
    <div className='flex flex-col gap-6'>
      <div className="flex justify-center">
        <span className="bg-green-100 text-green-800 text-base font-medium px-3 py-1 rounded-full dark:bg-green-900 dark:text-green-300">
          {t("HUD.level")} {level}
        </span>
      </div>
      <div>
        <div className="mb-1 text-base font-medium text-slate-800 dark:text-white flex justify-end">
          {t("HUD.word")}: {wordsLengthTotal != 0 ? `${wordsLength}/${wordsLengthTotal}` : ""}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div ref={progressBar} className="bg-cyan-500 h-2.5 rounded-full dark:bg-cyan-600 w-[5%] transition-all ease-out duration-1000"></div>
        </div>
      </div>
      <Indicator text={t("HUD.topic")} textOutside={topic} />
    </div>
  )
}

export default HUDContainer
