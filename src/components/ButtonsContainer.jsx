import Button from "./Button"

const ButtonsContainer = ({ handleButton, arr, bgPrimary }) => {
  return (
    <div>
      {arr.map((item, i) => {
        return (
          <Button
            key={i}
            handleButton={handleButton}
            text={item}
            bgPrimary={bgPrimary}
          />
        )
      })}
    </div>
  )
}

export default ButtonsContainer
