import { useState, useRef } from "react"
import BoxTop from "./BoxTop"
import BoxBottoms from "./BoxBottoms"
import WordsList from "./WordsList"
import { data } from "../data/index.js"
import { checkWords } from "../utils/utils.js"

const BoxContainer = ({ level, updateWin }) => {
  const [word, setWord] = useState([])
  const [words, setWords] = useState([])
  const box = useRef(0)

  const updateWord = (value) => setWord(value)

  const handleLetter = (event) => {
    if(word.length < 20) {
      updateWord([...word, event.target.name])
    }
  }

  const nextWord = () => {
    box.current.className = "animate-fade-out"
    setTimeout(() => {
      setWords([...words, word.join("")])
      updateWord([])
      box.current.className = ""
    }, 300)
  }

  const checkAnswer = () => {
    let result = checkWords(level, "es", [...words, word.join("")])
    setWords([...words, word.join("")]) // add the last word to play the animation
    // wait a second to play the progress bar animation
    setTimeout(() => {
      updateWin(result)
      updateWord([])
      setWords([])
    }, 1000)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-5 mx-auto">
      <div className='bg-white sm:w-[512px] flex flex-col gap-5 p-8 rounded-lg dark:bg-slate-800 border border-gray-200 shadow dark:border-gray-700 animate-fade-in-down'>
        <BoxTop
          handleLetter={handleLetter}
          letter={level ? data["es"][level].letters : Array(3).fill("")}
          word={word}
          level={level}
          wordsLength={words.length}
          wordsLengthTotal={level ? data["es"][level].answer.length : 0}
          topic={level ? data["es"][level].topic : ""}
          refBox={box}
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
      <WordsList words={words} />
    </div>
  )
}

export default BoxContainer
