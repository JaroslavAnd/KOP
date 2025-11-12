import { createPortal } from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;