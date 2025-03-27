import React, { memo } from "react";
import "./../styles/ModalComponent.css"

// MODAL COMPONENT TODISPLAY ANY ELEMENTS INSIDE
const ModalComponent = memo(({ onClose, children }) => {


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}><i className="bi bi-x-lg"></i></button>
        {children}
      </div>
    </div>
  )
})

export default ModalComponent;
