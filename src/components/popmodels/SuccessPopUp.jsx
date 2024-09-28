import { useContext } from "react";
import CancelX from "../svg-icons/CancelX";
import CheckMark from "../svg-icons/CheckMark";
import { CartItemsContext } from "@/app/RootLayoutClient";

export default function SuccessPopUp({successText}) {
  const {setSuccessPopUp} = useContext(CartItemsContext)

  function closeSuccess(){
    setSuccessPopUp(false)
  }
                                                      
  return (
    <div className="flex items-center justify-center w-screen h-12 gap-12 bg-green-600 absolute top-0 left-0 z-[100]">
        <div className="flex gap-4">
            <CheckMark stroke="#fff" />
            <p className="text-white">{successText}</p>
        </div>
        <button className="pointer bg-white rounded-full p-1" onClick={closeSuccess}>
            <CancelX stroke="#16a34a" width={15} height={15} strokeWidth={3}/>
        </button>
    </div>
  )
}
