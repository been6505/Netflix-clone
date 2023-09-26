import styled from "styled-components";

export const DownloadCon = styled.section`
  display: flex;
  justify-content: space-between;
  background: #000;
  padding: 5rem 15rem;
  color: #fff;
  border-bottom: 8px solid #222;
`;

export const DownloadLeft = styled.div`
  position: relative;
  width: 100%;
  img.mobile {
    width: 100%;
  }
  div.box {
    position: absolute;
    top: 50%;
    transform: translate(-50%, 100%);
    left: 50%;
    display: flex;
    width: 60%;
    height: 100px;
    padding: 0.5rem;
    justify-content: space-between;
    border: 2px solid hsla(0, 0%, 100%, 0.25);
    border-radius: 10px;
    background: #000;

    div.boxtext {
      display: flex;
      align-items: center;
      margin-left: -80px;
      p {
        span {
          color: #0071eb;
          font-size: 0.9rem;
        }
      }
    }
  }
`;

export const DownloadRight = styled.div`
  display:flex;
  align-items:center;
  width:100%;
  h3{
    font-size:3rem;

  }
  p{
    font-size:1.5rem;
    margin-top:1rem;
  }
`;
