import { useTranslation } from "react-i18next"
import { useState } from "react"
import BoxTop from "./BoxTop"
import BoxBottoms from "./BoxBottoms"
import { data } from "../data/index.js"
import { checkWords } from "../utils/utils.js"

const BoxContainer = ({ level, updateWin }) => {
  const { t } = useTranslation()

  const [word, setWord] = useState([])
  const [words, setWords] = useState([])

  const handleLetter = (event) => setWord([...word, event.target.name])

  const nextWord = () => {
    setWords([...words, word.join("")])
    setWord([])
  }

  const checkAnswer = () => {
    let answer = data["es"][level - 1].answer
    let result = checkWords(answer, [...words, word.join("")])
    updateWin(result)
    setWord([])
    setWords([])
  }

  return (
    <div className='flex flex-col gap-5'>
      <BoxTop
        handleLetter={handleLetter}
        letter={level ? data["es"][level - 1].letters : Array(3).fill("")}
        word={word}
      />
      <BoxBottoms
        wordsLength={words.length}
        wordLength={word.length}
        nextWord={nextWord}
        checkAnswer={checkAnswer}
      />
    </div>
  )
}

export default BoxContainer
