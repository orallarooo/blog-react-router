import { RiDeleteBin2Line } from "react-icons/ri";

import "./btnDelete.css";

const BtnDelete = ({onClick}) => {
  return (
      <button onClick={onClick} className="btn-delete">
            <span>Удалить</span>
            <RiDeleteBin2Line />
      </button>
  );
};

export default BtnDelete;