import CompleteList from "./component/CompleteList/CompleteList";
import ProgressList from "./component/ProgressList/ProgressList";
import TodoList from "./component/TodoList/TodoList";
import style from "./App.module.css";
import CreateTodo from "./component/CreateTodo/CreateTodo";
import { useState } from "react";
import { dummy } from "./fixture/dummyData";
export default function App() {
  const [list, setList] = useState(dummy);

  return (
    <div>
      <CreateTodo list={list} setList={setList} />
      <div className={style.container}>
        <TodoList list={list} setList={setList} />
        <ProgressList list={list} setList={setList} />
        <CompleteList list={list} setList={setList} />
      </div>

      <footer className={style.foot}>&copy; ASHAR 2023</footer>
    </div>
  );
}
