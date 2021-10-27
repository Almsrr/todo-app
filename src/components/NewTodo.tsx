import { useRef, useContext } from "react";
import { TodoContext } from "../store/todo-context";

import styles from "./NewTodo.module.css";

// type newTodoProps = {
//   onAddTodo: (text: string) => void;
// };

const NewTodo: React.FC = () => {
  const todoCtx = useContext(TodoContext);
  const todoTextInput = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = todoTextInput.current!.value;
    if (todoText.trim().length === 0) {
      return;
    }
    todoCtx.addItem(todoText);
  };

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <label htmlFor="text">Todo:</label>
      <input type="text" id="text" ref={todoTextInput} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
