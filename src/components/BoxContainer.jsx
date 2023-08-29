import { useState } from "react"
import BoxTop from "./BoxTop"
import BoxBottoms from "./BoxBottoms"
import { data } from "../data/index.js"
import { checkWords } from "../utils/utils.js"

const BoxContainer = ({ level, updateWin }) => {
  const [word, setWord] = useState([])
  const [words, setWords] = useState([])

  const updateWord = (value) => setWord(value)

  const handleLetter = (event) => updateWord([...word, event.target.name])

  const nextWord = () => {
    setWords([...words, word.join("")])
    updateWord([])
  }

  const checkAnswer = () => {
    let result = checkWords(level, "es", [...words, word.join("")])
    updateWin(result)
    updateWord([])
    setWords([])
  }

  return (
    <div className='lg:w-1/3 mx-auto flex flex-col gap-5'>
      <BoxTop
        handleLetter={handleLetter}
        letter={level ? data["es"][level].letters : Array(3).fill("")}
        word={word}
        level={level}
        wordsLength={words.length}
        wordsLengthTotal={level ? data["es"][level].answer.length : 0}
        topic={level ? data["es"][level].topic : ""}
      />
      <BoxBottoms
        wordsLength={words.length}
        wordsLengthTotal={level ? data["es"][level].answer.length : 0}
        word={word}
        updateWord={updateWord}
        nextWord={nextWord}
        checkAnswer={checkAnswer}
      />
    </div>
  )
}

export default BoxContainer
