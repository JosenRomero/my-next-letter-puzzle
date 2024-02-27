import { FaCircleInfo } from "react-icons/fa6"

const DangerAlert = ({ show, text }) => {

  if(!show) return <></>

  return (
    <div className="flex gap-2 items-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-900 dark:text-red-400" role="alert">
      <FaCircleInfo size={16} />
      <div>{text}</div>
    </div>
  )

}

export default DangerAlert
