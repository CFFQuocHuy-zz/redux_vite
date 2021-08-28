import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { edit, markComplete, deleteTodo } from "../todoSlice";
import Todo from "./Todo";
import EditInput from "./EditInput";
import TodoSection from "./TodoSection";
import CloseButton from "./CloseButton";
import TodoName from "./TodoName";

const ENTER_KEY = 13;
const ESCAPE_KEY = 27;

interface ItemTodoProps {
  readonly todo: any;
}

const ItemTodo = ({ todo }: ItemTodoProps) => {
  const dispatch = useDispatch();
  const [editInput, setEditInput] = useState(todo.name);
  const [editHidden, setEditHidden] = useState(true);
  const editInputRef = useRef<HTMLInputElement | null>(null);

  const handleSubmit = () => {
    const val = editInput.trim();

    if (val) {
      dispatch(edit({ id: todo.id, name: val }));
    }

    setEditHidden(true);
  };

  const handleEnter = (event: React.KeyboardEvent) => {
    if (event.which === ENTER_KEY) handleSubmit();
  };
  const handleEsc = (event: React.KeyboardEvent) => {
    if (event.which === ESCAPE_KEY) {
      setEditInput(todo.name);
      setEditHidden(true);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    handleEnter(event);
    handleEsc(event);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditInput(event.target.value);
  };

  const handleDoubleClick = () => {
    setEditHidden(false);
  };

  useEffect(() => {
    if (editInputRef.current) editInputRef.current.focus();
  }, [editInputRef]);

  return (
    <TodoSection>
      <Todo>
        <input
          type="checkbox"
          checked={todo.complete}
          onChange={(e) => {
            e.stopPropagation();
            dispatch(
              markComplete({
                id: todo.id,
                complete: e.target.checked,
              })
            );
          }}
        />
        <TodoName onDoubleClick={handleDoubleClick} complete={todo.complete}>
          {todo.name}
        </TodoName>
        <CloseButton
          type="button"
          onClick={() => dispatch(deleteTodo({ todoId: todo.id }))}
        />
      </Todo>
      <EditInput
        ref={editInputRef}
        type="text"
        value={editInput}
        onBlur={handleSubmit}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        hidden={editHidden}
      />
    </TodoSection>
  );
};

export default ItemTodo;
