import "../sass/modal.scss"
import { ReactNode, useEffect, useRef } from "react"

type ModalPropsType = {
    openModal: boolean,
    children:ReactNode,
    classes?: string
}

export default function Modal({ openModal, children, classes="" }: ModalPropsType) {
    const dialogRef = useRef<HTMLDialogElement>(null)

    useEffect(() => {
        if (openModal) {
            open()
        } else {
            close()
        }
    }, [openModal])

    function open() {
        // if (!closed)
        // {
        dialogRef.current?.showModal()
        // }
    }
    function close() {
        // console.log("should be closing")
        dialogRef.current?.close()
        // closed.current=false
    }
    return (
        <dialog ref={dialogRef} className={`modal ${classes}`} >
            <div className="modal-wrapper">
                {/* <button className="close-btn" autoFocus onClick={close}>&#10005;</button> */}
                { 
                    children && children 
                }
            </div>
        </dialog>
    )
}