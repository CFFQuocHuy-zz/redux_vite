import styled from "styled-components";

interface FilterProps {
  readonly selected: boolean;
}

const Filter = styled.a<FilterProps>`
  &:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  color: inherit;
  margin: 3px;
  padding: 3px 7px;
  text-decoration: none;
  border: 1px solid transparent;
  border-radius: 3px;
  border-color: ${(props) =>
    props.selected ? "rgba(175, 47, 47, 0.2) !important" : ""};
`;

export default Filter;
