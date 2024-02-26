import { useState, useContext } from "react"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import BoxContainer from "../components/BoxContainer.jsx"
import ResultContainer from "../components/ResultContainer.jsx"
import { UserContext } from "../context/UserContext.jsx"
import { achievementUnlocked } from "../data/achievements.js"

const PlayPage = () => {
  const { level, updateLevel } = useContext(UserContext)

  const [win, setWin] = useState(null)

  const updateWin = (value) => {
    setWin(value)

    if (value?.nextLevel) {

      if(achievementUnlocked[level]) {
        toastSuccess(`${achievementUnlocked[level]}`)
      }
      
      updateLevel()

    }

  }

  const nextLevel = () => {
    updateWin(null)
  }

  const tryAgain = () => updateWin(null)

  const toastSuccess = (text) => toast.success(text)

  return (
    <>
      <ToastContainer
        position="top-center"
        pauseOnHover={false} 
      />
      {win === null ? (
        <BoxContainer level={level} updateWin={updateWin} />
      ) : (
        <ResultContainer
          win={win}
          level={level}
          nextLevel={nextLevel}
          tryAgain={tryAgain}
        />
      )}
    </>
  )
}

export default PlayPage
