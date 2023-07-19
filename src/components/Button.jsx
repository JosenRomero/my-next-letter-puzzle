const Button = ({ handleButton, text, bgPrimary = true, disabled = false }) => {
  return (
    <button
      onClick={handleButton}
      name={text}
      className={`text-gray-900 border focus:outline-none focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ${
        disabled ? "cursor-not-allowed" : ""
      } ${
        bgPrimary
          ? "bg-white border-gray-300 hover:bg-gray-100"
          : "bg-gray-100 border-gray-400 hover:bg-gray-200"
      }`}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
