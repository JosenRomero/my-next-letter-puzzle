import { encryptStorage } from "./storage.js"

const checkingStorage = (key, defaultValue) => {
  let value = getStorageItem(key)

  if (value === undefined) {
    value = { ...defaultValue }
    setStorageItem(key, value)
  }

  return value
}

export const checkingCurrentGameState = () => {
  let gameState = checkingStorage("gameState", {
    currentLevel: 1,
    achievements: { firstPlayers: true },
  })
  return gameState
}

export const getStorageItem = (key) => encryptStorage.getItem(key)

export const setStorageItem = (key, value) => encryptStorage.setItem(key, value)
