
const Indicator = ({
  cssContainer = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  cssIndicator = "bg-green-500",
  text = "",
  textOutside = ""
}) => {

  return (
    <div className='flex justify-center gap-3'>
      <span
        className={`inline-flex items-center text-xs font-medium px-2.5 py-0.5 rounded-full ${cssContainer}`}
      >
        <span className={`w-2 h-2 me-1 rounded-full ${cssIndicator}`}></span>
        {text}
      </span>
      {textOutside !== "" && (
        <p className='text-lg font-medium'>{textOutside}</p>
      )}
    </div>
  )

}

export default Indicator
