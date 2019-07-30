import styled from "styled-components";
import pic from "./../../static/pic/b4c66a269eea997aba361218166daedb.png";
const logo = pic;
export const HeaderBox =styled.div`
width:100%;
position:fixed;
top:0;
height:56px;
background:#fff;
z-index:10;
box-shadow: 3px 3px 3px #eee;
`;
export const Headers = styled.div`
width:100%;
height:52px;
position:fixed;
top:0;
overflow:hidden;
`;
export const Headerbox = styled.div`
width:100%;
position:absolute;
transition:all 1s ease;
`;
export const Headwrap = styled.div`
  height: 52px;
  display: flex;
  text-align: center;
  line-height: 52px;
  width: 1000px;
  margin: 0 auto;
  align-items: center;
  transition: all 1s ease;
`;

export const Headtitle = styled.div`
  width: 64px;
  height: 30px;
`;
export const Headimg = styled.img.attrs({
  src: logo
})`
  width: 100%;
  height: 100%;
`;
export const Headul = styled.ul`
  display: flex;
  > li {
    padding: 0 17px;
    display: inline-block;
    & > a {
      font-size: 15px;
      color: #8590a6;
    }
    & > a:hover {
      color: #1a1a1a;
    }
  }
`;
export const Headinput = styled.div`
  margin-left: 20px;
  display: flex;
  position: relative;
`;
export const Headbot = styled.div`
  width: 20px;
  height: 20px;
  background: #000;
  position: absolute;
  right: 12px;
  top: 17px;
`;
export const Headinputbox = styled.div`
  position: absolute;
  top: 52px;
  left:35.6%;
  width: 400px;
  height: 250px;
  background: #fff;
  box-shadow: 2px 2px 2px #eee;
`;
export const Headright = styled.div``;
