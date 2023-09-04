import { useContext } from "react"
import { UserContext } from "../context/UserContext.jsx"
import { useTranslation } from "react-i18next"
import { achievements } from "../data/achievements.js"

const Achievements = () => {
  const { level } = useContext(UserContext)
  const { t } = useTranslation()

  return (
    <div className='p-4 text-center'>
      <h2 className='mb-5'>{t("achievements.title")}</h2>
      <div className='flex flex-wrap justify-center gap-8'>
        {achievements.map((currentValue, i) => {
          return (
            <div
              key={i}
              className={`flex flex-col items-center bg-white border border-gray-200 border-t-4 rounded-lg dark:bg-slate-800 dark:border-gray-600 ${
                level > currentValue.completed
                  ? "border-t-green-400 dark:border-t-green-400"
                  : "border-t-red-400 dark:border-t-red-400"
              }`}
            >
              <div className='w-40 h-40'>
                <img className='w-full h-full' src={currentValue.img} />
              </div>
              <div className='p-2'>
                <h3>{t(`${currentValue.name}`)}</h3>
                <p>
                  {level > currentValue.completed
                    ? t("achievements.achievementCompleted")
                    : t("achievements.achievementLocked")}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Achievements
