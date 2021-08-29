import React, { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { changeDraftAsync } from "../saga";
import { add, changeDraft, markAllComplete } from "../todoSlice";
import Title from "./Title";
import TodoHeader from "./TodoHeader";

const ENTER_KEY = 13;

const HeaderTodo = () => {
  const draftRef = useRef<HTMLInputElement | null>(null);
  const draft = useAppSelector((state) => state.todo.draft);
  const dispatch = useAppDispatch();

  const handleSubmit = () => {
    const val = draftRef?.current?.value.trim();
    if (val) {
      dispatch(add({ name: val }));
      dispatch(changeDraft({ draft: "" }));
      if (draftRef?.current) draftRef.current.value = "";
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.which !== ENTER_KEY) return;
    handleSubmit();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeDraftAsync({ draft: event.target.value }));
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
          ref={draftRef}
          type="text"
          placeholder="What needs to be done?"
          defaultValue={draft}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </div>
    </TodoHeader>
  );
};

export default HeaderTodo;
