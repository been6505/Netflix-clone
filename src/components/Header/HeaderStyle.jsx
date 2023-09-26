import styled from "styled-components";

import HeaderBG from "../../assets/header-bg.jpg";

export const HeaderCon = styled.section`
  height: 720px;
  background: url(${HeaderBG});
  box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.5);
  border-bottom: 8px solid #222;
  background-position: center;
  background-size: cover;

  ${
    "" /* div.main {
    display: flex;
    justifycontent: center;
    alignitems: center;
    textalign: center;
    height: 600px;
  } */
  }
`;

export const NavCon = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 2rem 3rem;

  svg {
    width: 150px;
    fill: red;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  li {
    margin: 0rem 2rem;
    a {
      color: #fff;
      text-decoration: none;
    }
    a.translater {
      border: 1px solid #fff;
      borderradius: 2px;
      background: transparent;
      color: #fff;
      padding: 1rem 1.5rem;
    }
    a.signIn {
      background: #e50914;
      borderradius: 3px;
      color: #fff;
      padding: 1rem 1.5rem;
    }
  }
`;

export const HeaderMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 600px;
  ${"" /* border:1px solid red; */}
  div {
    h1 {
      font-size: 4rem;
      color: #fff;
    }
    h3 {
      font-size: 1.5rem;
      color: #fff;
      font-weight: normal;
      margin-top: 1rem;
    }
    p {
      font-size: 1.2rem;
      color: #fff;
      font-weight: normal;
      margin-top: 1.5rem;
    }
    div {
      margin-top: 1rem;
      input {
        padding: 1.3rem;
        width: 500px;
      }
      button {
        background-color: #e50914;
        color: #fff;
        width: 200px;
        border: none;
        font-size: 1.5rem;
        position: relative;
        top: 2px;
        padding: 1rem;
      }
    }
  }
`;

export const langBth = styled.a`
  border: 1px solid #fff;
  border-radius: 2px;
  background: transparent;
  color: #fff;
`;
