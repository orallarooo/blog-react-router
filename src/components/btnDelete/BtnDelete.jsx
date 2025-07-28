import { RiDeleteBin2Line } from "react-icons/ri";

import "./btnDelete.css";


export const BtnDelete = ({onClick}) => {
  return (
      <button onClick={onClick} className="btn-delete">
            <RiDeleteBin2Line />  
            <span>Удалить</span>
      </button>
  );
};