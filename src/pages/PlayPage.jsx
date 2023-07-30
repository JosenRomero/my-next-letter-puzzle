import { useState, useContext } from "react"
import BoxContainer from "../components/BoxContainer.jsx"
import ResultContainer from "../components/ResultContainer.jsx"
import { UserContext } from "../context/UserContext.jsx"

const PlayPage = () => {
  const { level, updateLevel } = useContext(UserContext)

  const [win, setWin] = useState(null)

  const updateWin = (value) => setWin(value)

  const nextLevel = () => {
    updateLevel()
    updateWin(null)
  }

  const tryAgain = () => updateWin(null)

  return (
    <>
      {win === null ? (
        <BoxContainer level={level} updateWin={updateWin} />
      ) : (
        <ResultContainer win={win} nextLevel={nextLevel} tryAgain={tryAgain} />
      )}
    </>
  )
}

export default PlayPage
