import ReactDOM from 'react-dom';
import EditDateModal from './modals/EditDateModal';

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    children,
    document.getElementById('reservation'),
  );
};

export default Modal;
