import style from "./CompleteList.module.css";
import handleDrag from "../../helper/handleDrag";
import Action from "../Action/Action";
import { useState } from "react";

export default function CompleteList({ list, setList }) {
  const [value, setValue] = useState("");

  const handleDrop = (e) => {
    e.preventDefault();
    const progressTodoId = e.dataTransfer.getData("todo");
    const draggedIndex = list.findIndex(
      (item) => item.id === Number(progressTodoId)
    );

    if (draggedIndex !== -1) {
      const draggedItem = list[draggedIndex];
      const updatedItem = {
        ...draggedItem,
        todo: false,
        process: false,
        complete: true
      };

      const newList = [...list];
      newList[draggedIndex] = updatedItem;

      setList(newList);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={style.complete_container}
    >
      <header>
        <h3>Complete</h3>
      </header>

      {list.map((item) => {
        return (
          item.complete && (
            <div
              draggable
              onDragStart={(e) => handleDrag(e, item.id)}
              key={item.id}
              className={style.task_container}
            >
              {item.edit ? (
                <input
                  value={value}
                  onChange={(e) =>
                    setValue(
                      e.target.value.charAt(0).toUpperCase() +
                        e.target.value.slice(1)
                    )
                  }
                />
              ) : (
                <p>{item.task}</p>
              )}
              <Action
                value={value}
                setValue={setValue}
                item={item}
                list={list}
                setList={setList}
              />
            </div>
          )
        );
      })}
    </div>
  );
}
