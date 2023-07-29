import { useTranslation } from "react-i18next"
import Button from "./Button"
import ButtonsContainer from "./ButtonsContainer"

const BoxContainer = ({
  letters,
  word,
  handleLetter,
  wordsLength,
  nextWord,
  checkAnswer,
}) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col gap-5'>
      <ButtonsContainer handleButton={handleLetter} arr={letters} />
      <div className='min-h-[50px]'>
        <ButtonsContainer arr={word} bgPrimary={false} disabled={true} />
      </div>
      {wordsLength < 2 ? (
        <Button
          handleButton={nextWord}
          text={t("buttons.nextWord")}
          disabled={word.length > 0 ? false : true}
        />
      ) : (
        <Button
          handleButton={checkAnswer}
          text={t("buttons.check")}
          disabled={word.length > 0 ? false : true}
        />
      )}
    </div>
  )
}

export default BoxContainer
