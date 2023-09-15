import { data } from "../data/index.js"

export const checkWords = (level, language, words) => {
  let { answer, valid_answer } = data[language][level]
  let arr = []
  let nextLevel = true
  let rightAnswers = []

  for (let i = 0; i < answer.length; i++) {
    let result =
      (answer.includes(words[i]) || valid_answer.includes(words[i])) &&
      !rightAnswers.includes(words[i])

    arr.push(`${result ? "o" : "x"}`)
    if (result) rightAnswers.push(words[i])
    else nextLevel = false
  }

  return { nextLevel, arr }
}
