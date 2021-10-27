import React, { useState } from "react";
import Todo from "../models/Todo";

type todoContextObj = {
  items: Todo[];
  addItem: (text: string) => void;
  removeItem: (id: string) => void;
};

export const TodoContext = React.createContext<todoContextObj>({
  items: [],
  addItem: (todoText: string) => {},
  removeItem: (todoId: string) => {},
});

const TodoContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((current) => {
      return current.concat(newTodo);
    });
  };

  const removeTodoHandler = (id: string) => {
    setTodos((current) => {
      return current.filter((item) => item.id !== id);
    });
  };

  const contextValue: todoContextObj = {
    items: todos,
    addItem: addTodoHandler,
    removeItem: removeTodoHandler,
  };

  return (
    <TodoContext.Provider value={contextValue}>
      {props.children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
