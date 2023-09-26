import styled from "styled-components";

export const FooterCon = styled.footer`
  background: #000;
  padding: 3rem 25rem;
  color: #737373;
  a.langBtn{
    display:inline-block;
    padding:1rem 2rem;
    border: 1px solid #737373;
    border-radius:5px;
    margin-bottom:1rem;
    color:#737373;
    text-decoration:none;
  }
`;

export const FooterList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: 1.5rem 0;

  ul {
    list-style: none;
    li {
      margin: 1rem 0;
      a {
        fontsize: 1rem;
        color: #737373;
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;
