import { useTranslation } from "react-i18next"

const HUDContainer = ({ level, wordsLength, wordsLengthTotal, topic }) => {
  const { t } = useTranslation()

  return (
    <div className='text-gray-900 mb-5 py-2 border-b dark:text-gray-400 dark:border-gray-600'>
      <div className='flex justify-between'>
        <p>
          {t("HUD.level")}: {level}
        </p>
        <p>{topic}</p>
        <p>
          <span>{t("HUD.word")}: </span>
          {wordsLengthTotal != 0 ? `${wordsLength}/${wordsLengthTotal}` : ""}
        </p>
      </div>
    </div>
  )
}

export default HUDContainer
