import styled from "styled-components";
export const Showlist = styled.div``;
export const Listbox = styled.div`
  margin-bottom: 0;
  border-bottom: 1px solid #f0f2f7;
  box-shadow: none;
  padding: 20px;
  background: #fff;
`;
export const Listh2 = styled.h2`
  font-size: 18px;
  font-weight: 600;
  line-height: 1.6;
  color: #1a1a1a;
  margin-top: -4px;
  margin-bottom: -4px;
`;
export const Richtext = styled.span`
  line-height: 1.6;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;
export const Textbutton = styled.button`
  padding: 0;
  margin-left: 4px;
  color: #175199;
  height: auto;
  line-height: inherit;
  background-color: transparent;
  border: none;
  border-radius: 0;
  text-align: center;
  cursor: pointer;
  display: inline-block;
  background: none;
  font-size: 14px;
`;
export const Listtext = styled.div`
  margin-bottom: -4px;
  overflow: hidden;
  margin-top: 16px;
  max-height: 100px;
`;
export const Listcontent =styled.div`
transition: color .14s ease-out;
cursor: pointer;
line-height: 1.67;
`;
export const Listimg = styled.div`
  position: relative;
  width: 190px;
  height: 105px;
  margin-top: -2px;
  margin-right: 18px;
  margin-bottom: 4px;
  float: left;
  overflow: hidden;
  background-position: 50%;
  background-size: cover;
  border-radius: 4px;
  transform: translateZ(0);
  >div{
    position: absolute;
    top: 50%;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateY(-50%);
    overflow: hidden;
    >img{
      width:100%;
      height:100%
    }
  }
`;
export const Listbotton = styled.div`
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 10px 20px;
  margin: 0 -20px -10px;
  color: #646464;
  background: #fff;
  clear: both;
`;
export const Aria = styled.span`
  flex-shrink: 0;
  .votebutton {
    background: rgba(0, 132, 255, 0.1);
    color: #0084ff;
    border: 1px solid;
    border-color: transparent;
    border-radius: 3px;
    text-align: center;
    line-height: 30px;
    padding: 0 12px;
  cursor: pointer;

  }
`;
export const Bottonbut = styled.button`
  margin-left: 24px;
  flex-shrink: 0;
  position: relative;
  display: inline-block;
  color: #8590a6;
  text-align: center;
  cursor: pointer;
  background: none;
  border: none;
  :hover{
      color: #646464;
  }
`;
