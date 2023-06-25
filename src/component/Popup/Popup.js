import * as React from "react";
import style from "./Popup.module.css";
import Popover from "@mui/material/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import { IoSettingsSharp } from "react-icons/io5";

export default function PopoverPopupState({ setList, list, item }) {
  const status = [
    {
      id: 1,
      option: "Todo"
    },
    {
      id: 2,
      option: "Process"
    },
    {
      id: 3,
      option: "Complete"
    }
  ];
  const [option, setOption] = React.useState("Todo");

  const handleUpdate = (popupState) => {
    let itemIndex = list.findIndex((todo) => todo.id === item.id);
    if (itemIndex !== -1) {
      const draggedItem = list[itemIndex];
      const updatedItem = {
        ...draggedItem,
        todo: option === "Todo",
        process: option === "Process",
        complete: option === "Complete"
      };
      const newList = [...list];
      newList[itemIndex] = updatedItem;

      setList(newList);
    }

    popupState.close();
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <button variant="contained" {...bindTrigger(popupState)}>
            <IoSettingsSharp />
          </button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center"
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center"
            }}
          >
            <div className={style.container}>
              <h3>Update Status</h3>
              <div className={style.sub_container}>
                <select onChange={(e) => setOption(e.target.value)}>
                  {status.map((item) => (
                    <option value={item.option} key={item.id}>
                      {item.option}
                    </option>
                  ))}
                </select>
                <button onClick={() => handleUpdate(popupState)}>Update</button>
              </div>
            </div>
          </Popover>
        </div>
      )}
    </PopupState>
  );
}
