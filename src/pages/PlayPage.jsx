import { useState } from "react"
import ButtonsContainer from "../components/ButtonsContainer"
import { data } from "../data/index.js"
import Button from "../components/Button"
import { checkWords } from "../utils/utils.js"

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
    let result = checkWords(data["es"][level - 1].answer, [
      ...words,
      word.join(""),
    ])
    console.log(result)
    setWord([])
    setWords([])
  }

  return (
    <div>
      <ButtonsContainer
        handleButton={handleLetter}
        arr={data["es"][level - 1].letters}
      />
      <ButtonsContainer arr={word} bgPrimary={false} />
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
