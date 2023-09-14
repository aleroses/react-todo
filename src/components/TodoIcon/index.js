import { ReactComponent as CheckSvg } from "../CompleteIcon/check.svg";
import { ReactComponent as DeleteSvg } from "../DeleteIcon/delete.svg";
import "./TodoIcon.css";

const iconTypes = {
  check: (color) => <CheckSvg fill={color} />,
  delete: (color) => (
    <DeleteSvg
      className="icon"
      fill="#4F46E5"
      stroke="#4F46E5"
      strokeWidth="0.1"
    />
  ),
};

function TodoIcon({ type, color, onClick }) {
  return (
    /* type puede ser check o delete	*/
    <span className={`${type}`} onClick={onClick}>
      {iconTypes[type](color)}
    </span>
  );
}

export { TodoIcon };
/* 
#4CAF50 
#4F46E5
#EA0031
*/
