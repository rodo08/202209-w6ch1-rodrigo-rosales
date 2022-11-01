import listOfTasks from "../mocks/listOfTasks";
import { loadTasksActionCreator, taskReducer } from "./TaskSlice";

describe("Given a taskReducer", () => {
  describe("When it receives an empty initial state and a loadTasks action with a list of 3 tasks", () => {
    test("Then it should return a new state with a copy of the 3 tasks received", () => {
      const loadTasksListAction = loadTasksActionCreator(listOfTasks);

      const currentToDoState = {
        tasks: [],
      };
      const expectedToDoState = {
        tasks: listOfTasks,
      };

      const newToDoState = taskReducer(currentToDoState, loadTasksListAction);

      expect(newToDoState).toEqual(expectedToDoState);
    });
  });
});
