import styled from "styled-components";

interface TodoNameProps {
  readonly complete: boolean;
}

const TodoName = styled.label<TodoNameProps>`
  width: 100%;
  color: ${(props) => (props.complete === true ? "#d9d9d9" : "")};
  text-decoration: ${(props) =>
    props.complete === true ? "line-through" : ""};
`;

export default TodoName;
