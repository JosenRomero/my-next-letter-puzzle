const Button = ({ handleButton, text, css = "bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-700 dark:hover:bg-cyan-900 text-white", disabled = false }) => {
  return (
    <button
      onClick={handleButton}
      name={text}
      className={`focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 ${
        disabled ? "cursor-not-allowed !bg-gray-300 !hover:bg-gray-300 dark:!bg-gray-600 dark:!hover:bg-gray-600" : "" } ${css} `}
      disabled={disabled}
    >
      {text}
    </button>
  )
}

export default Button
