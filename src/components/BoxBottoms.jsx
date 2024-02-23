import { useTranslation } from "react-i18next"
import { FiDelete } from "react-icons/fi"
import Button from "./Button"

const BoxBottoms = ({
  wordsLength,
  wordsLengthTotal,
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
        css={"bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 text-white"}
        disabled={word.length > 0 ? false : true}
      />
      {wordsLength < wordsLengthTotal - 1 || wordsLengthTotal === 0 ? (
        <Button
          handleButton={nextWord}
          text={t("buttons.nextWord")}
          css={"bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white"}
          disabled={word.length > 0 ? false : true}
        />
      ) : (
        <Button
          handleButton={checkAnswer}
          text={t("buttons.check")}
          css={"bg-green-700 hover:bg-green-800 dark:bg-green-600 dark:hover:bg-green-700 text-white"}
          disabled={(word.length > 0 && wordsLength < wordsLengthTotal) ? false : true}
        />
      )}
    </div>
  )
}

export default BoxBottoms
