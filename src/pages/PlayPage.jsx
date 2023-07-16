import { useState } from "react"
import { data } from "../data/index.js"
import { checkWords } from "../utils/utils.js"
import BoxContainer from "../components/BoxContainer.jsx"

const PlayPage = () => {
  const [level, setLevel] = useState(1)
  const [word, setWord] = useState([])
  const [words, setWords] = useState([])

  const handleLetter = (event) => setWord([...word, event.target.name])

  const nextWord = () => {
    setWords([...words, word.join("")])
    setWord([])
  }

  const checkAnswer = () => {
    let result = checkWords(data["es"][level - 1].answer, [
      ...words,
      word.join(""),
    ])
    console.log(result)
    setWord([])
    setWords([])
  }

  return (
    <BoxContainer
      letters={data["es"][level - 1].letters}
      word={word}
      handleLetter={handleLetter}
      wordsLength={words.length}
      nextWord={nextWord}
      checkAnswer={checkAnswer}
    />
  )
}

export default PlayPage
