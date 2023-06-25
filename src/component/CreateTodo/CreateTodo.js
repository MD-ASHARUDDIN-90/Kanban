import { useState } from "react";
import style from "./CreateTodo.module.css";
import { IoMdAddCircle } from "react-icons/io";

export default function CreateTodo({ list, setList }) {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    if (task) {
      const newTodo = {
        id: Math.random(),
        task,
        todo: true,
        process: false,
        complete: false,
        edit: false,
        disable: false
      };
      setList([...list, newTodo]);
      setTask("");
    } else {
      alert("Cannot Add Empty Value...");
    }
  };
  return (
    <div className={style.create_container}>
      <h1>Draggable List</h1>
      <div className={style.add_container}>
        <input
          placeholder="Enter Task"
          className={style.input}
          value={task}
          onChange={(e) =>
            setTask(
              e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1)
            )
          }
        />
        <button onClick={handleAdd}>
          <IoMdAddCircle className={style.icon} />
        </button>
      </div>
    </div>
  );
}
