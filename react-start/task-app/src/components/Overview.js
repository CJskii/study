import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faListCheck,
} from "@fortawesome/free-solid-svg-icons";

const Overview = (props) => {
  const {
    tasks,
    deleteTask,
    handleEditTask,
    editing,
    handleChangeInTask,
    saveEditedTask,
  } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {editing === task.id ? (
              <>
                <input
                  type="text"
                  defaultValue={task.text}
                  onBlur={(e) => handleChangeInTask(task.id, e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faListCheck}
                  onClick={() => saveEditedTask(task.id)}
                />
              </>
            ) : (
              <>
                {task.id}. {task.text}
                <FontAwesomeIcon
                  icon={faTrashCan}
                  onClick={() => deleteTask(task.id)}
                />
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  onClick={() => handleEditTask(task.id)}
                />
              </>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
