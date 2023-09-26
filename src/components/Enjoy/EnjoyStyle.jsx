import styled from "styled-components";

export const EnjoyCon = styled.section`
  background: #000;
  display: flex;
  justify-content: space-between;
  height: auto;
  color: #fff;
  padding: 5rem 15rem;
  border-bottom: 8px solid #222;
`;

export const EnjoyLeft = styled.div`
  display: flex;
  align-items: center;
  width: 100%;

  div {
    h3 {
      font-size: 3rem;
    }
    p {
      font-size: 1.5rem;
      margin-top: 1rem;
    }
  }
`;

export const EnjoyRight = styled.div`
  position: relative;
  width: 100%;

  img{
    position:relative;
    zIndex:1;
    width:100%;
  }
  video{
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-54%);
    width:73%;
  }
`;
