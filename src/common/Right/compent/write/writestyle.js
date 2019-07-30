import styled from "styled-components";
export const Writebox = styled.div`
    overflow: hidden;
    border-radius: 2px;
    -webkit-box-shadow: 0 1px 3px rgba(26,26,26,.1);
    box-shadow: 0 1px 3px rgba(26,26,26,.1);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
     margin-bottom: 10px;
     background :#fff;
  > a {
    margin: 0 -20px;
    width: 100%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding: 0 20px;
    height: 40px;
    overflow: hidden;
    > div {
      display: flex;
      margin-right: auto;
      align-items: center;
      transform: scale(1);
    }
  }
  .writeanswer {
    margin-left: 8px;
    flex: 1 1;
    margin: 0 10px;
    text-align: left;
    color: #8590a6;
  }
`;
export const Writeul = styled.div`
  display: flex;
  justify-content: center;
  .writeli {
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    cursor: pointer;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    margin: 23px;
    position: relative;
  }
  .writefont {
    color: #444;
    font-size: 16px;
  }
`;
export const Writeanswer = styled.div`
  webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  color: #8590a6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 48px;
  margin: 0 20px;
  position: relative;
 
`;
export const Writedraft = styled.div`
  webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  border-top: 1px solid #f0f2f7;
  color: #8590a6;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  height: 48px;
  margin: 0 20px;
`;
