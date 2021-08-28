import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    id: uuidv4(),
    todos: [
      {
        id: uuidv4(),
        name: "1",
        complete: false,
      },
    ],
    filter: "ALL",
    draft: "",
  },
  reducers: {
    add: (state, action) => {
      state.todos.push({
        id: uuidv4(),
        name: action.payload.name,
        complete: false,
      });
    },
    edit: (state, action) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        name: action.payload.id === todo.id ? action.payload.name : todo.name,
      }));
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => action.payload.todoId !== todo.id
      );
    },
    changeDraft: (state, action) => {
      state.draft = action.payload.draft;
    },
    filter: (state, action) => {
      state.filter = action.payload.filter;
    },
    markComplete: (state, action) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        complete:
          action.payload.id === todo.id
            ? action.payload.complete
            : todo.complete,
      }));
    },
    markAllComplete: (state, action) => {
      state.todos = state.todos.map((todo) => ({
        ...todo,
        complete: action.payload.complete,
      }));
    },
    deleteComplete: (state) => {
      state.todos = state.todos.filter((todo) => todo.complete === false);
    },
  },
});

export const {
  add,
  edit,
  deleteTodo,
  changeDraft,
  filter,
  markComplete,
  markAllComplete,
  deleteComplete,
} = todoSlice.actions;

export default todoSlice.reducer;
