import ButtonsContainer from "./ButtonsContainer"

const BoxTop = ({ handleLetter, letter, word }) => {
  return (
    <>
      <ButtonsContainer handleButton={handleLetter} arr={letter} />
      <div className='min-h-[50px]'>
        <ButtonsContainer arr={word} bgPrimary={false} disabled={true} />
      </div>
    </>
  )
}

export default BoxTop
