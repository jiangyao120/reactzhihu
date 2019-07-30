import styled from "styled-components";
export const Headul = styled.ul`
  display: flex;
  > li {
    padding: 0 17px;
    display: inline-block;
    & > a {
      font-size: 15px;
      color: #000;
    }
    & > a:hover {
      color: #1a1a1a;
    }
  }
`;
export const Headright =styled.div`
display: flex;
`;
export const Headtibox =styled.div`
display: flex;
align-items: center;
width:704px;
`