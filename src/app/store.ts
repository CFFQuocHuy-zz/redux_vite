import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
import { logger } from "./middleware";

export const loadState = () => {
  try {
    const seria = localStorage.getItem("state");
    if (seria === null) {
      return undefined;
    }
    return JSON.parse(seria);
  } catch (er) {
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    const seria = JSON.stringify(state);
    localStorage.setItem("state", seria);
  } catch (error) {
    //Ignore writting error
  }
};

const configureAppStore = (preloadedState: any) => {
  const store = configureStore({
    reducer: {
      todo: todoReducer,
    },
    preloadedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  });

  store.subscribe(() => {
    saveState({
      todo: store.getState().todo,
    });
  });

  return store;
};

const persistedState = loadState();
const configStore = configureAppStore(persistedState);

export type AppDispatch = typeof configStore.dispatch;
export type RootState = ReturnType<typeof configStore.getState>;

export default configStore;
