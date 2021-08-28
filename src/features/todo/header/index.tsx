import React from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { add, changeDraft, markAllComplete } from "../todoSlice";
import Title from "./Title";
import TodoHeader from "./TodoHeader";

const ENTER_KEY = 13;

const HeaderTodo = () => {
  const draft = useAppSelector((state) => state.todo.draft);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const val = draft.trim();
    if (val) {
      dispatch(add({ name: val }));
      dispatch(changeDraft({ draft: "" }));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.which !== ENTER_KEY) return;
    handleSubmit();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDraft({ draft: event.target.value }));
  };

  return (
    <TodoHeader>
      <Title>todos</Title>
      <div>
        <input
          type="checkbox"
          onChange={(e) =>
            dispatch(markAllComplete({ complete: e.target.checked }))
          }
        />
        <input
          type="text"
          placeholder="What needs to be done?"
          value={draft}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </TodoHeader>
  );
};

export default HeaderTodo;
