import { useContext } from "react"
import { UserContext } from "../context/UserContext.jsx"
import { useTranslation } from "react-i18next"
import { achievements } from "../data/achievements.js"
import Indicator from "./Indicator.jsx"

const Achievements = () => {
  const { level } = useContext(UserContext)
  const { t } = useTranslation()

  return (
    <div>
      <h2 className='mb-9 text-2xl font-bold text-center'>{t("achievements.title")}</h2>
      <div className='flex flex-wrap justify-center gap-8 animate-fade-in-up'>
        {achievements.map((currentValue, i) => {
          return (
            <div
              key={i}
              className='flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow dark:bg-slate-800 dark:border-gray-700'
            >
              <div className='w-40 h-40'>
                <img className='w-full h-full' src={currentValue.img} />
              </div>
              <div className='p-6'>
                <h5 className='mb-2 text-xl font-semibold text-gray-900 dark:text-white'>
                  {t(`${currentValue.name}`)}
                </h5>
                <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>{t(`${currentValue.goal}`)}</p>
                {level > currentValue.completed ? (
                  <Indicator text={t("achievements.achievementCompleted")} />
                ) : (
                  <Indicator
                    cssContainer='bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'
                    cssIndicator='bg-red-500'
                    text={t("achievements.achievementLocked")}
                  />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Achievements
