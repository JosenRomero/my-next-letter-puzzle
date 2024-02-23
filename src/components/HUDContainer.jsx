import { useEffect, useRef } from "react"
import { useTranslation } from "react-i18next"

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
      <div className="flex justify-center gap-3">
        <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
          <span className="w-2 h-2 me-1 bg-green-500 rounded-full"></span>
          {t("HUD.topic")}
        </span>
        <p className="text-lg font-medium">{topic}</p>
      </div>
    </div>
  )
}

export default HUDContainer
