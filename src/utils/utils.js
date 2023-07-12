export const checkWords = (answer, words) => {
  let arr = []
  let nextLevel = true

  for (let i = 0; i < answer.length; i++) {
    if (answer.includes(words[i])) {
      arr.push("o")
    } else {
      arr.push("x")
      nextLevel = false
    }
  }

  return { nextLevel, arr }
}
