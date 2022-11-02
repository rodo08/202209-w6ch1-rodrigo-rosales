import TaskStructure from "../../types";
import ToDoCardStyled from "./ToDoCardStyled";

interface ToDoCardProps {
  listOfTasks: TaskStructure;
}

const ToDoCard = ({
  listOfTasks: { name, done },
}: ToDoCardProps): JSX.Element => {
  return (
    <>
      <ToDoCardStyled>
        <ul>
          <li>
            <span>{name}</span>
            <button>Remove task</button>
          </li>
        </ul>
      </ToDoCardStyled>
    </>
  );
};

export default ToDoCard;
