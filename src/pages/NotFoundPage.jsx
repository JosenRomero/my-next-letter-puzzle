import { useTranslation } from "react-i18next"

const NotFoundPage = () => {
  const { t } = useTranslation()

  return (
    <div className='flex items-center justify-center'>
      {t("title.notFoundPage")}
    </div>
  )
}

export default NotFoundPage
