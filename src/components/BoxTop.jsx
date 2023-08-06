import HUDContainer from "./HUDContainer"
import ButtonsContainer from "./ButtonsContainer"

const BoxTop = ({
  handleLetter,
  letter,
  word,
  level,
  wordsLength,
  wordsLengthTotal,
  topic,
}) => {
  return (
    <>
      <HUDContainer
        level={level}
        wordsLength={wordsLength}
        wordsLengthTotal={wordsLengthTotal}
        topic={topic}
      />
      <div className='text-center'>
        <ButtonsContainer handleButton={handleLetter} arr={letter} />
      </div>
      <div className='min-h-[50px] text-gray-900 dark:text-gray-400 text-xl font-semibold text-center'>{word}</div>
    </>
  )
}

export default BoxTop
