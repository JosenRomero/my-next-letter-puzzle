import { useTranslation } from "react-i18next"
import Button from "./Button"

const BoxBottoms = ({ wordsLength, wordLength, nextWord, checkAnswer }) => {
  const { t } = useTranslation()

  return (
    <>
      {wordsLength < 2 ? (
        <Button
          handleButton={nextWord}
          text={t("buttons.nextWord")}
          disabled={wordLength > 0 ? false : true}
        />
      ) : (
        <Button
          handleButton={checkAnswer}
          text={t("buttons.check")}
          disabled={wordLength > 0 ? false : true}
        />
      )}
    </>
  )
}

export default BoxBottoms
