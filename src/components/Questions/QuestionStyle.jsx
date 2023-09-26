import styled from "styled-components";

export const QuestionCon = styled.section`
  background: #000;
  color: #fff;

  div {
    display: flex;
    justify-content: center;

    div.unclick {
      background: #303030;
      font-size: 1.5rem;
      width: 750px;
      border-bottom: 1px solid #000;
      display: flex;
      justify-content: space-between;
      padding: 1rem 2rem;

      h3 {
        display: flex;
        align-items: center;
      }
      button {
        border: none;
        background: transparent;
        font-size: 3rem;
        color: #fff;
      }
    }

    div.click {
      text-align: left;
      display: flex;
      justify-content: center;
      
    }
  }
`;
