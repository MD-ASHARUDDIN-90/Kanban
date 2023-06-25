import { useEffect, useState } from "react";
import style from "./TodoList.module.css";
import handleDrag from "../../helper/handleDrag";
import Action from "../Action/Action";

export default function TodoList({ list, setList }) {
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
        todo: true,
        process: false,
        complete: false
      };

      const newList = [...list];
      newList[draggedIndex] = updatedItem;

      setList(newList);
    }
  };

  return (
    <div
      onDragOver={handleDrop}
      onDrop={handleDrop}
      className={style.todo_container}
    >
      <header>
        <h3>Todo</h3>
      </header>

      {list.map((item) => {
        return (
          item.todo && (
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
