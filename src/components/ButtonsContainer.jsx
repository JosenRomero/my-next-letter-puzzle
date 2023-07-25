import Button from "./Button"

const ButtonsContainer = ({ handleButton, arr, bgPrimary, disabled }) => {
  return (
    <div>
      {arr.map((item, i) => {
        return (
          <Button
            key={i}
            handleButton={handleButton}
            text={item}
            bgPrimary={bgPrimary}
            disabled={disabled}
          />
        )
      })}
    </div>
  )
}

export default ButtonsContainer
