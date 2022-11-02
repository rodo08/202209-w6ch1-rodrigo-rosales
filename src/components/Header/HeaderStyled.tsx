import styled from "styled-components";

const Header = styled.header`
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 50px;
  }

  button {
    width: 100px;
    height: 30px;
    margin-left: 10px;
    border: none;
    border-radius: 5px;
    background-color: #04c314;
    color: #ffff;
    cursor: pointer;
  }
`;

export default Header;
