import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";
import { MdCancel } from "react-icons/md";
import style from "./Action.module.css";
import PopoverPopupState from "../Popup/Popup";
import { useState } from "react";

export default function Action({ list, setList, item, value }) {
  const handleEdit = () => {
    const selectIndex = list.findIndex((todo) => todo.id === item.id);
    if (selectIndex !== -1) {
      const selectItem = list[selectIndex];
      const updatedItem = {
        ...selectItem,
        edit: true
      };

      const newList = list.map((todo) => ({ ...todo, disable: true }));

      newList[selectIndex] = updatedItem;
      setList(newList);
    }
  };
  const handleCancel = () => {
    const selectIndex = list.findIndex((todo) => todo.id === item.id);
    if (selectIndex !== -1) {
      const selectItem = list[selectIndex];
      const updatedItem = {
        ...selectItem,
        edit: false
      };

      const newList = list.map((todo) => ({ ...todo, disable: false }));
      newList[selectIndex] = updatedItem;
      setList(newList);
    }
  };

  const handleUpdate = () => {
    const selectIndex = list.findIndex((todo) => todo.id === item.id);
    if (selectIndex !== -1) {
      const selectItem = list[selectIndex];
      if (value) {
        const updatedItem = {
          ...selectItem,
          task: value,
          edit: false
        };
        const newList = list.map((todo) => ({ ...todo, disable: false }));
        newList[selectIndex] = updatedItem;
        setList(newList);
      } else {
        alert("Cannot Set Empty Value");
      }
    }
  };
  const handleDelete = () => {
    const newList = list.filter((x) => x.id !== item.id);
    setList(newList);
  };
  return (
    <div className={style.button_container}>
      {item.edit ? (
        <>
          <button onClick={handleUpdate}>
            <MdOutlineDoneOutline />
          </button>
          <button onClick={handleCancel}>
            <MdCancel />
          </button>
        </>
      ) : (
        <>
          <button onClick={handleEdit} disabled={item.disable}>
            <FaEdit />
          </button>
          <button onClick={handleDelete}>
            <AiFillDelete />
          </button>
          <PopoverPopupState list={list} setList={setList} item={item} />
        </>
      )}
    </div>
  );
}
