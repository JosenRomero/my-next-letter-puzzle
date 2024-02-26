import achievement_easy from "../images/achievement_easy.svg"
import achievement_normal from "../images/achievement_normal.svg"
import achievement_hard from "../images/achievement_hard.svg"

export const achievementUnlocked = {
  "10": "Logro desbloqueado: Fácil",
  "20": "Logro desbloqueado: Normal",
  "25": "Logro desbloqueado: Difícil"
}

export const achievements = [
  {
    img: achievement_easy,
    name: "achievements.nameList.easy",
    completed: 10,
  },
  {
    img: achievement_normal,
    name: "achievements.nameList.normal",
    completed: 20,
  },
  {
    img: achievement_hard,
    name: "achievements.nameList.hard",
    completed: 25,
  },
]
