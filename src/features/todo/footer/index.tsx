import React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../../app/hooks";
import { deleteComplete, filter } from "../todoSlice";
import Filter from "./Filter";
import TodoFooter from "./TodoFooter";

const FILTER = [
  { id: "ALL", name: "All", href: "#/all" },
  { id: "ACTIVE", name: "Active", href: "#/active" },
  { id: "COMPLETED", name: "Completed", href: "#/completed" },
];

const FooterTodo = () => {
  const filterType = useAppSelector((state) => state.todo.filter);
  const todos = useAppSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  return (
    <TodoFooter>
      <span> {todos.length} items left</span>

      <ul>
        {FILTER.map((fil) => (
          <li key={fil.id}>
            <Filter
              selected={filterType === fil.id}
              href={fil.href}
              type="button"
              onClick={() => dispatch(filter({ filter: fil.id }))}
            >
              {fil.name}
            </Filter>
          </li>
        ))}
      </ul>

      <button type="button" onClick={() => dispatch(deleteComplete())}>
        Clear completed
      </button>
    </TodoFooter>
  );
};

export default FooterTodo;
