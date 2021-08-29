import { createAction } from "@reduxjs/toolkit";
import { debounce, put } from "redux-saga/effects";
import { changeDraft } from "./todoSlice";

export const changeDraftAsync = createAction<Object | undefined>(
  "todo/changeDraftAsync"
);

function* doSomething(action: ReturnType<typeof changeDraft>) {
  yield put(changeDraft(action.payload));
}

export function* watchChangeDraft() {
  yield debounce(1000, changeDraftAsync, doSomething);
}
export default watchChangeDraft;
