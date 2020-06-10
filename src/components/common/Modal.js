import React from 'react';
import Modal from "react-modal"

import './Modal.scss'

export default ({ isOpen, onRequestClose,classFlow }) =>
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    contentLabel="Modal"
    className={{
      base: 'modal__base',
      afterOpen: 'modal__base--after-open',
      beforeClose: 'modal__base--before-close'
    }}
    overlayClassName={{
      base: 'overlay__base',
      afterOpen: 'overlay__base--after-open',
      beforeClose: 'overlay__base--before-close'
    }}
    shouldCloseOnOverlayClick={true}
    ariaHideApp={false}
  >

  <p className="classflow__text">{classFlow}</p>

  <div className="button__wrapper">
    <button onClick={onRequestClose} className="close">Close</button>
  </div>
  
  </Modal>
