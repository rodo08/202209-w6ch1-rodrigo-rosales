import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <>
      <HeaderStyled>
        <h1>To-Do list</h1>
        <div className="container">
          <input type="text" name="task" placeholder="Add a new task"></input>
          <button>Add task</button>
        </div>
      </HeaderStyled>
    </>
  );
};

export default Header;
