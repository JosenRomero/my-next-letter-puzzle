import { useContext } from "react"
import { UserContext } from "../context/UserContext.jsx"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Achievements from "../components/Achievements"
import { TOTAL_LEVELS } from "../utils/CONSTANTS.js"

const HomePage = () => {
  const { level } = useContext(UserContext)
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      {level !== null && level <= TOTAL_LEVELS && (
        <Link
          className='bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 hover:text-gray-900 px-5 py-2 rounded-xl dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700'
          to={"/play"}
        >
          {t("buttons.play")}
        </Link>
      )}
      <Achievements />
    </div>
  )
}

export default HomePage
