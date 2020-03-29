import ReactDOM from "react-dom";

const ModalPotal = ({ children }) => {
  const el = document.getElementById("app");
  return ReactDOM.createPortal(children, el);
};

export default ModalPotal;
