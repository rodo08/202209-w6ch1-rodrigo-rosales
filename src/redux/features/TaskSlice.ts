import types from "../../types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TaskState {
  tasks: types[];
}

const taskInitialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    addNewTask: (state, action: PayloadAction<types[]>) => ({
      ...state,
      task: [...action.payload],
    }),
  },
});