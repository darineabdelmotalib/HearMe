// Modal.js
import React from 'react';
import './Modal.scss'; 
import close from "../../../assets/icons/close.png"

const Modal = ({ show, onClose, title, children }) => {
    if (!show) return null;

    return (
        <div className="modal-landing">
            <div className="modal-landing__content">
            <img className="modal-landing__close" onClick={onClose} src={close}></img>
                <h2 className="modal-landing__title">{title}</h2>
                <div className="modal-landing__body">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
