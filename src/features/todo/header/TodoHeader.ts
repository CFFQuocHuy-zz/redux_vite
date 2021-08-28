import styled from "styled-components";

const TodoHeader = styled.header`
  & > div {
    width: 100%;
    display: flex;
    background: rgba(0, 0, 0, 0.003);
    box-shadow: inset 0 -2px 1px rgb(0 0 0 / 3%);
    border-bottom: 1px solid #ededed;
    padding-bottom: 2px;
    align-items: center;
  }

  input[type="checkbox"] {
    opacity: 0;
    width: 40px;
    height: 40px;
    position: absolute;
  }

  input[type="checkbox"]:checked + input[type="text"] {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E);
  }

  input[type="text"] {
    background-image: url(data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E);
    background-repeat: no-repeat;
    background-position: center left;

    padding: 16px 16px 16px 60px;
    border: none;
    font-size: 24px;
    flex: 1;
    outline: none;
    color: inherit;
    font-family: inherit;
    font-weight: inherit;

    ::placeholder {
      font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 300;
      font-style: italic;
      color: #e6e6e6;
    }
  }
`;

export default TodoHeader;
