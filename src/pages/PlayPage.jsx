import { useState, useContext } from "react"
import { data } from "../data/index.js"
import { checkWords } from "../utils/utils.js"
import BoxContainer from "../components/BoxContainer.jsx"
import ResultContainer from "../components/ResultContainer.jsx"
import { UserContext } from "../context/UserContext.jsx"

const PlayPage = () => {
  const { level, updateLevel } = useContext(UserContext)

  const [word, setWord] = useState([])
  const [words, setWords] = useState([])
  const [win, setWin] = useState(null)

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
    setWin(result)
    setWord([])
    setWords([])
  }

  const nextLevel = () => {
    updateLevel()
    setWin(null)
  }

  const tryAgain = () => setWin(null)

  return (
    <>
      {win === null ? (
        <BoxContainer
          letters={level ? data["es"][level - 1].letters : Array(3).fill("")}
          word={word}
          handleLetter={handleLetter}
          wordsLength={words.length}
          nextWord={nextWord}
          checkAnswer={checkAnswer}
        />
      ) : (
        <ResultContainer win={win} nextLevel={nextLevel} tryAgain={tryAgain} />
      )}
    </>
  )
}

export default PlayPage
