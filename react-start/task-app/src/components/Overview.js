import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faPenToSquare,
  faCheckSquare,
} from "@fortawesome/free-solid-svg-icons";

const Overview = (props) => {
  const {
    tasks,
    deleteTask,
    editing,
    handleEditTask,
    handleSaveTask,
    handleChangeInTask,
  } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id} className="task">
            {task.id}.
            {editing === task.id ? (
              <div>
                <input
                  value={task.text}
                  onChange={(e) => handleChangeInTask(e, task.id)}
                />
              </div>
            ) : (
              task.text
            )}
            <div className="icons">
              <FontAwesomeIcon
                icon={faTrashCan}
                onClick={() => deleteTask(task.id)}
              />
              <FontAwesomeIcon
                icon={editing === task.id ? faCheckSquare : faPenToSquare}
                onClick={() => {
                  if (editing === task.id) {
                    handleSaveTask(task.id);
                  } else {
                    handleEditTask(task.id);
                  }
                }}
              />
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
