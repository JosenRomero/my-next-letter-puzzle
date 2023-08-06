import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <div className="flex items-center justify-center">
      <Link
        className='bg-white text-gray-900 border border-gray-300 hover:bg-gray-100 hover:text-gray-900 px-5 py-2 rounded-xl dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700'
        to={"/play"}
      >
        {t("buttons.play")}
      </Link>
    </div>
  )
}

export default HomePage
