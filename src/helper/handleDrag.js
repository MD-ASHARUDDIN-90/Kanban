const handleDrag = (event, id) => {
  console.log("helper function");
  console.log(event);
  event.dataTransfer.setData("todo", id);
};

export default handleDrag;
