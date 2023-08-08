import { data } from "../data/index.js"

export const checkWords = (level, language, words) => {
  let { answer, valid_answer } = data[language][level]
  let arr = []
  let nextLevel = true

  for (let i = 0; i < answer.length; i++) {
    if (answer.includes(words[i]) || valid_answer.includes(words[i])) {
      arr.push("o")
    } else {
      arr.push("x")
      nextLevel = false
    }
  }

  return { nextLevel, arr }
}
