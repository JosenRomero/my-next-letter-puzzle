import { useContext } from "react"
import { UserContext } from "../context/UserContext.jsx"
import { Link } from "react-router-dom"
import { useTranslation } from "react-i18next"
import Achievements from "../components/Achievements"
import { TOTAL_LEVELS } from "../utils/CONSTANTS.js"
import Logo from "../components/Logo.jsx"

const HomePage = () => {
  const { level } = useContext(UserContext)
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-8 items-center justify-center'>
      <Logo />
      {level !== null && level <= TOTAL_LEVELS && (
        <Link
          className='group relative z-0 overflow-hidden overflow-x-hidden rounded-md bg-cyan-500 px-8 py-2 text-neutral-50 hover:text-neutral-50 hover:scale-125 duration-100'
          to={"/play"}
        >
          <span className="relative z-10">{t("buttons.play")}</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-cyan-600 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
        </Link>
      )}
      <Achievements />
    </div>
  )
}

export default HomePage
