import { configureStore } from "@reduxjs/toolkit";
import questionReducer from "./Question/slice";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("reduxState");
    return serializedState ? JSON.parse(serializedState) : undefined;
  } catch (error) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("reduxState", serializedState);
  } catch (error) {
    console.error("Failed to save state", error);
  }
};

const store = configureStore({
  reducer: {
    question: questionReducer
  },
  preloadedState: loadState(),
});

store.subscribe(() => saveState(store.getState()));

export default store;
