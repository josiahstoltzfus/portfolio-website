import './Modal.css'
import {createPortal} from "react-dom";
import {useEffect} from "react";
import CloseButton from "./CloseButton.jsx";

export default function Modal({isOpen, onClose, children, width = "700px", height= "auto", closeOnEscape = true}) {

    const modalRoot = document.getElementById("uno-modal-root");

    // Scroll locking
    useEffect(() => {
        if (!isOpen) return;

        // Preserve the scrollbar space to prevent layout shift while scrolling is locked.
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.paddingRight = `${scrollbarWidth}px`;
        document.body.classList.add("modal-open");

        return () => {
            document.body.style.paddingRight = "";
            document.body.classList.remove("modal-open");
        };
    }, [isOpen]);

    // Escape key
    useEffect(() => {
        if (!isOpen || !closeOnEscape) return;

        function handleEscapeKey(event) {
            if (event.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleEscapeKey);

        return () => {
            window.removeEventListener("keydown", handleEscapeKey);
        }

    }, [isOpen, closeOnEscape, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-backdrop" onClick={onClose}>
            <div
                className="modal-panel"
                style={{
                    height,
                    width}}
                onClick={(e) => e.stopPropagation()}>
                {onClose && <CloseButton onClose={onClose}/>}
                {children}
            </div>
        </div>,
        modalRoot
    );
}