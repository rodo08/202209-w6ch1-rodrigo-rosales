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
    addNewTask: (state, action: PayloadAction<types[]>): TaskState => ({
      ...state,
      tasks: [...action.payload],
    }),
    removeTask: (state, action: PayloadAction<number>): TaskState => ({
      ...state,
      tasks: [
        ...taskInitialState.tasks.filter((task) => task.id !== action.payload),
      ],
    }),
  },
});

export default taskSlice;
