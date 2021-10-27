import { useContext } from "react";

import styles from "./Todos.module.css";
import TodoItem from "./TodoItem";
import { TodoContext } from "../store/todo-context";

// type todosProps = {
//   items: Todo[];
//   onRemoveTodo: (id: string) => void;
// };

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={styles.todos}>
      {todoCtx.items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          onRemoveTodo={todoCtx.removeItem.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};
export default Todos;
