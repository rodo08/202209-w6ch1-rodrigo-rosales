import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import ToDoCard from "./components/ToDoCard/ToDoCard";

const App = () => {
  const toDoCard = { id: 1, name: "go to gym", done: false };
  return (
    <>
      <div className="container">
        <Header />
        <ToDoCard listOfTasks={toDoCard} />
      </div>
    </>
  );
};

export default App;
