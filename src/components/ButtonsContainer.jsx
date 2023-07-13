import Button from "./Button"

const ButtonsContainer = ({ handleButton, arr }) => {
  return (
    <div>
      {arr.map((item, i) => {
        return <Button key={i} handleButton={handleButton} text={item} />
      })}
    </div>
  )
}

export default ButtonsContainer
