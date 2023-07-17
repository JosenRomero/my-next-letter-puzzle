const CirclesContainer = ({ arr }) => {
  return (
    <div className='flex justify-center flex-row gap-3'>
      {arr.map((item, i) => {
        return (
          <span
            key={i}
            className={`w-4 h-4 rounded-full ${
              item === "x" ? "bg-red-500" : "bg-lime-500"
            }`}
          ></span>
        )
      })}
    </div>
  )
}

export default CirclesContainer
