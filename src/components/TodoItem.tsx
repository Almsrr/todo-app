import styles from "./TodoItem.module.css";
import Todo from "../models/Todo";

type todoItemProps = {
  item: Todo;
  onRemoveTodo: () => void;
};

const TodoItem: React.FC<todoItemProps> = (props) => {
  return (
    <li className={styles.item} onClick={props.onRemoveTodo}>
      <h3>{props.item.text}</h3>
    </li>
  );
};

export default TodoItem;
