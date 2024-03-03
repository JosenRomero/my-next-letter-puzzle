import { useTranslation } from "react-i18next"
import Indicator from "./Indicator"

const WordsList = ({ words }) => {
  const { t } = useTranslation()

  return (
    <div className='bg-white flex flex-col gap-5 p-8 rounded-lg dark:bg-slate-800 border border-gray-200 shadow dark:border-gray-700 animate-fade-in-down'>
      <Indicator text={t("wordsList.title")} />
      {words.length == 0 ? (
        <p className={"text-center mt-5"}>{t("wordsList.emptyList")}</p>
      ) : (
        <ol className="list-decimal leading-loose list-inside">
          {words.map((item, i) => {
            return (
              <li className="animate-fade-in-up" key={i}>{item}</li>
            )
          })}
        </ol>
      )}
      
    </div>
  )

}

export default WordsList
