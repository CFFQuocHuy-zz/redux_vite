import styled from "styled-components";

const TodoFooter = styled.footer`
  position: relative;
  color: #777;
  display: flex;
  justify-content: space-between;
  padding: 10px 15px;
  font-size: 14px;

  ul {
    position: absolute;
    display: flex;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    content: "";
    z-index: 0;
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    height: 50px;
    overflow: hidden;
    box-shadow: 0 1px 1px rgb(0 0 0 / 20%), 0 8px 0 -3px #f6f6f6,
      0 9px 1px -3px rgb(0 0 0 / 20%), 0 16px 0 -6px #f6f6f6,
      0 17px 2px -6px rgb(0 0 0 / 20%);
  }

  button {
    z-index: 1;
    background: none;
    border: none;
  }

  button:hover {
    text-decoration: underline;
  }
`;

export default TodoFooter;
