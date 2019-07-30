import styled from "styled-components";
export const Myprovbox = styled.ul`
  border-radius: 2px;
  -webkit-box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  box-shadow: 0 1px 3px rgba(26, 26, 26, 0.1);
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background: #fff;
  width: 100%;
  padding: 8px 0;
`;
export const Myprovli = styled.li`
  display: list-item;
  text-align: -webkit-match-parent;
  > a {
    align-items: center;
    padding: 0 20px;
    height: 40px;
    overflow: hidden;
    display: flex;
    -webkit-box-align: center;
    line-height: inherit;
    background-color: transparent;
    border: none;
    border-radius: 0;
    color: #8590a6;
    text-align: center;
    cursor: pointer;
    background: none;
  }
`;
