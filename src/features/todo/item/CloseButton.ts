import styled from "styled-components";
import TodoSection from "./TodoSection";

const CloseButton = styled.button`
  display: none;
  position: absolute;
  top: 52%;
  transform: translateY(-50%);
  right: 10px;
  width: 40px;
  height: 40px;
  font-size: 30px;
  color: #cc9a9a;
  transition: color 0.2s ease-out;
  background: none;
  border: none;

  ${TodoSection}:hover & {
    display: inline-block;
  }

  &::after {
    content: "×";
  }

  &:hover {
    color: #af5b5e;
  }
`;

export default CloseButton;
