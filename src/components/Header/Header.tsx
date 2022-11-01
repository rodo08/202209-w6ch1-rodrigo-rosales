const Header = (): JSX.Element => {
  return (
    <>
      <h1>To Do list</h1>
      <div className="container header__container">
        <input type="text" name="task" placeholder="Add a new task"></input>
        <button>Add task</button>
      </div>
    </>
  );
};

export default Header;
