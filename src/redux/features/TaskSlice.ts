import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import TaskStructure from "../../types";

interface TaskState {
  tasks: TaskStructure[];
}

const taskInitialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: taskInitialState,
  reducers: {
    loadTasks: (state, action: PayloadAction<TaskStructure[]>): TaskState => ({
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

export const taskReducer = taskSlice.reducer;
export const {
  loadTasks: loadTasksActionCreator,
  removeTask: removeTaskActionCreator,
} = taskSlice.actions;
