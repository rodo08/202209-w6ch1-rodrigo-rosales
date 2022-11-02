import styled from "styled-components";

const ToDoCard = styled.div`
  display: flex;
  justify-content: center;

  span {
    padding-right: 20px;
  }

  li {
    list-style: none;
  }

  button {
    width: 100px;
    height: 30px;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #c42a07;
    color: #ffff;
  }
`;
export default ToDoCard;
