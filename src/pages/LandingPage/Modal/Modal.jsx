// Modal.js
import React from 'react';
import './Modal.scss'; 
import close from "../../../assets/icons/close.png"

const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
        <div className="modal">
            <div className="modal__content">
                <h2 className="modal__title">{title}</h2>
                <div className="modal__body">
                    {children}
                </div>
                <img className="modal__close" onClick={onClose} src={close}></img>
            </div>
        </div>
    );
};

export default Modal;
