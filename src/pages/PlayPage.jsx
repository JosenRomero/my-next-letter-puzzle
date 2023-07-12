import { useState } from "react"
import LettersContainer from "../components/LettersContainer"
import { data } from "../data/index.js"
import Button from "../components/Button"

const PlayPage = () => {
  const [level, setLevel] = useState(1)
  const [word, setWord] = useState([])
  const [words, setWords] = useState([])

  const handleLetter = (event) => setWord([...word, event.target.name])

  const nextWord = () => {
    setWords([...words, word.join("")])
    setWord([])
  }

  const nextLevel = () => {  
    console.log("next level")
  }

  return (
    <div>
      <LettersContainer
        handleButton={handleLetter}
        letters={data["es"][level - 1].letters}
      />
      <div>{word.join("")}</div>
      <div className='mt-5'>
        {words.length < 2 ? (
          <Button handleButton={nextWord} text={"Next Word"} />
        ) : (
          <Button handleButton={nextLevel} text={"Check"} />
        )}
      </div>
    </div>
  )
}

export default PlayPage
