import { render, screen } from "@testing-library/react";
import TaskStructure from "../../types";
import ToDoCard from "./ToDoCard";

describe("Given a ToDoCard", () => {
  describe("When it is rendered with the text 'go to gym' and a 'false' state", () => {
    test("Then it should show a new element with the given information", () => {
      const newElement: TaskStructure = {
        id: 0,
        name: "go to gym",
        done: false,
      };

      render(<ToDoCard listOfTasks={newElement} />);

      const expectedElement = screen.getByRole("listitem");
      expect(expectedElement).toBeInTheDocument();
    });
  });
});
