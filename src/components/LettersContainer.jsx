import Button from "./Button"

const LettersContainer = ({ handleButton, letters }) => {
  return (
    <>
      {letters.map((letter, i) => {
        return <Button key={i} handleButton={handleButton} text={letter} />
      })}
    </>
  )
}

export default LettersContainer
