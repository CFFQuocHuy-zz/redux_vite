import React, { useMemo } from "react";
import { useAppSelector } from "../../../app/hooks";
import FooterTodo from "../footer";
import HeaderTodo from "../header";
import ItemTodo from "../item";
import TodoApp from "./TodoApp";

const ContainerTodo = () => {
  const todos = useAppSelector((state) => state.todo.todos);
  const filter = useAppSelector((state) => state.todo.filter);

  const filterTodos = useMemo(() => {
    const value = todos.filter(
      (todo) =>
        filter === "ALL" ||
        todo.complete === (filter === "COMPLETED" ? true : false)
    );
    return value;
  }, [todos, filter]);

  return (
    <TodoApp>
      <HeaderTodo />
      <ul>
        {filterTodos.map((todo) => (
          <ItemTodo key={todo.id} todo={todo} />
        ))}
      </ul>
      <FooterTodo />
    </TodoApp>
  );
};

export default ContainerTodo;
