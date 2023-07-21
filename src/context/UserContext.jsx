import { useState, useEffect, createContext } from "react"
import {
  checkingCurrentGameState,
  setStorageItem,
} from "../utils/checkingStorage"

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [gameState, setGameState] = useState({
    currentLevel: null,
  })

  useEffect(() => {
    let currentGameState = checkingCurrentGameState()
    setGameState(currentGameState)
  }, [])

  const updateGameState = (id, value) => {
    let newGameState = { ...gameState, [id]: value }
    setGameState(newGameState)
    setStorageItem("gameState", newGameState)
  }

  const updateLevel = () => {
    updateGameState("currentLevel", gameState.currentLevel + 1)
  }

  return (
    <UserContext.Provider
      value={{ level: gameState.currentLevel, updateLevel }}
    >
      {children}
    </UserContext.Provider>
  )
}
