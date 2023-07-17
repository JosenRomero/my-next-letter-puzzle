import Button from "./Button"
import CirclesContainer from "./CirclesContainer"

const ResultContainer = ({ win, nextLevel, tryAgain }) => {
  return (
    <div className='flex flex-col gap-5'>
      <h3 className='text-center'>{win.nextLevel ? "Win!" : "Lost"}</h3>
      <CirclesContainer arr={win.arr} />
      {win.nextLevel ? (
        <Button handleButton={nextLevel} text={"Next Level"} />
      ) : (
        <Button handleButton={tryAgain} text={"Try Again"} />
      )}
    </div>
  )
}

export default ResultContainer
