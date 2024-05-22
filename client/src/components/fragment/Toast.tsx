import { useEffect, useRef } from "react"

interface ToastProps {
    positionX: 'left' | 'center' | 'right'
    positionY: 'bottom' | 'center' | 'top'
    status: 'succes' | 'warning' | 'info'
    message: string
    open?: boolean
    timeout?: number
    onClose?: (close: boolean) => void
}

function Toast({positionX, positionY, status, open, timeout, onClose, message}: ToastProps) {
    const timeoutRef = useRef<number | undefined>(undefined);

    const posX = positionX === 'center' ? 'left-1/2 -translate-x-1/2 -translate-y-1/2' : positionX + '-0'
    const posY = positionY === 'center' ? 'top-1/2 -translate-x-1/2 -translate-y-1/2' : positionY + '-0'

    function close() {
        clearTimeout(timeoutRef.current)
        onClose && onClose(true)
    }

    useEffect(() => {
        if(open && timeout && onClose) {
            timeoutRef.current = setTimeout(() => {
                onClose(true)
            }, timeout);
        }
    }, [open])

    return (
        <div className={`${!open && 'hidden'} m-12 py-2 fixed flex z-20 items-center bg-slate-100 ${status === 'succes' ? 'border-green-600' : status === 'warning' ? 'border-red-600' : 'border-yellow-600'} border-l-8 rounded overflow-hidden shadow ${posX} ${posY}`}>
            <div className={`ml-4 w-8 h-8 ${status === 'succes' ? 'bg-green-600' : status === 'warning' ? 'bg-red-600' : 'bg-yellow-600'} rounded-full flex justify-center items-center`}>
                {
                    status === 'succes' ?
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                    : status === 'warning' ?
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM11 7V13H13V7H11Z"></path></svg>
                    :
                    <svg className="w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff"><path d="M12 6C12.8284 6 13.5 5.32843 13.5 4.5C13.5 3.67157 12.8284 3 12 3C11.1716 3 10.5 3.67157 10.5 4.5C10.5 5.32843 11.1716 6 12 6ZM9 10H11V18H9V20H15V18H13V8H9V10Z"></path></svg>
                }
            </div>
            <span className="ml-4">
                <h1 className="font-semibold">{status}</h1>
                <p className="text-xs max-w-52">{message}</p>
            </span>
            <button onClick={close}>
                <svg className="w-4 mx-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
            </button>
        </div>
    )
}

export default Toast