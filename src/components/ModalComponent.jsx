import React, { memo } from "react";
import "./../styles/ModalComponent.css"


const ModalComponent = memo(({ onClose, children }) => {

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}><i class="bi bi-x-lg"></i></button>
        {children}
      </div>
    </div>
  )
})

export default ModalComponent;
