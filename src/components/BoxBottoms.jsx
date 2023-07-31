import { useTranslation } from "react-i18next"
import { FiDelete } from "react-icons/fi"
import Button from "./Button"

const BoxBottoms = ({
  wordsLength,
  word,
  updateWord,
  nextWord,
  checkAnswer,
}) => {
  const { t } = useTranslation()

  const deleteLetter = () => {
    let value = [...word]
    value.pop()
    updateWord(value)
  }

  return (
    <div className='flex mx-auto'>
      <Button
        handleButton={deleteLetter}
        text={<FiDelete size='22' />}
        disabled={word.length > 0 ? false : true}
      />
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

export default BoxBottoms
