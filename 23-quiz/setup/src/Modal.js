import React from 'react'
import { useGlobalContext } from './context'

const Modal = () => {
  const {
    isModalOpen,
    questions,
    correct,
    closeModal
  } = useGlobalContext();

  return (
    <div className={`${isModalOpen ? 'modal-container isOpen' : 'modal-container'}`}>
      <div className="modal-content">
        <h3>Congratulation!</h3>
        <p>You answered correct {((correct/questions.length)*100).toFixed(0)}% questions</p>
        <button className="close-btn" onClick={closeModal}>play again</button>
      </div>
    </div>
  )
}

export default Modal
