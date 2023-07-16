import Button from "./Button"
import ButtonsContainer from "./ButtonsContainer"

const BoxContainer = ({
  letters,
  word,
  handleLetter,
  wordsLength,
  nextWord,
  checkAnswer,
}) => {
  return (
    <div className='flex flex-col gap-5'>
      <ButtonsContainer handleButton={handleLetter} arr={letters} />
      <ButtonsContainer arr={word} bgPrimary={false} />
      {wordsLength < 2 ? (
        <Button handleButton={nextWord} text={"Next Word"} />
      ) : (
        <Button handleButton={checkAnswer} text={"Check"} />
      )}
    </div>
  )
}

export default BoxContainer
