import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const Overview = (props) => {
  const { tasks, deleteTask } = props;

  return (
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task.id}>
            {task.id}. {task.text}
            <FontAwesomeIcon
              key={task.id}
              icon={faTrashCan}
              onClick={() => deleteTask(task.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default Overview;
