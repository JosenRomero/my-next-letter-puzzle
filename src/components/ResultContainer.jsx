import { useTranslation } from "react-i18next"
import Button from "./Button"
import CirclesContainer from "./CirclesContainer"

const ResultContainer = ({ win, nextLevel, tryAgain }) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-center'>
        {win.nextLevel ? t("title.win") : t("title.lost")}
      </h3>
      <CirclesContainer arr={win.arr} />
      {win.nextLevel ? (
        <Button handleButton={nextLevel} text={t("buttons.nextLevel")} />
      ) : (
        <Button handleButton={tryAgain} text={t("buttons.tryAgain")} />
      )}
    </div>
  )
}

export default ResultContainer
