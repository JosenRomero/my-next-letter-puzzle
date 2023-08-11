import { useTranslation } from "react-i18next"

const HUDContainer = ({ level, wordsLength, wordsLengthTotal, topic }) => {
  const { t } = useTranslation()

  return (
    <div className='text-gray-900 mb-5 dark:text-gray-400'>
      <div className='flex flex-col gap-3'>
        <div className='flex justify-between pb-2 border-b dark:border-gray-600'>
          <p>
            {t("HUD.level")}: {level}
          </p>
          <p>
            <span>{t("HUD.word")}: </span>
            {wordsLengthTotal != 0 ? `${wordsLength}/${wordsLengthTotal}` : ""}
          </p>
        </div>
        <div className='flex justify-center pb-2 border-b dark:border-gray-600'>
          <p>{topic}</p>
        </div>
      </div>
    </div>
  )
}

export default HUDContainer
