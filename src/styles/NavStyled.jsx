import styled from "styled-components";

export const NavStyled = styled.nav`
  width: 100%;
  height: 60px;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow};

  .toggle {
    display: none;
  }
  .first {
    display: flex;
    align-items: center;
    margin-left: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.color.black};
      .color {
        transition: all 0.2s ease-in;
        color: ${({ theme }) => theme.color.second};
      }

      &:hover {
        transition: all 0.2s ease-in;
        color: ${({ theme }) => theme.color.second};
      }
      &:hover .color {
        transition: all 0.2s ease-in;
        color: ${({ theme }) => theme.color.black};
      }
      font-size: 20px;
    }

    img {
      width: 35px;
      height: 35px;
    }
  }
  .liste ul {
    list-style: none;

    li {
      display: inline-block;
      margin-right: 10px;
      a {
        text-decoration: none;
        padding: 5px;
        transition: all 0.2s ease-in;
        color: ${({ theme }) => theme.color.black};
        &:hover {
          color: ${({ theme }) => theme.color.second};
        }
      }
    }
  }

  @media (max-width: 770px) {
    .liste {
      transform: translateX(-200px);
      display: none;
      transition: all 0.2s ease-in;
    }
    .toggle {
      flex: 1;
      display: flex;
      justify-content: end;
      padding: 5px;
      cursor: pointer;
      padding-right: 20px;
      span {
        font-size: 24px;
      }

      &:hover {
        transition: all 0.2s ease-in;
        color: ${({ theme }) => theme.color.second};
      }
    }
    .liste.active {
      display: flex;
      position: absolute;
      top: 50px;
      right: 10px;
      height: 50vh;
      width: 60%;
      transform: translateX(0px);
      background: #fff;
      align-items: center;
      justify-content: center;
      border-radius: 10px;
      transition: all 0.3s ease-in;
      box-shadow: 0px 3px 10px 5px #f7aca922;
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        li {
          margin-bottom: 10px;
          padding: 10px;
        }
      }
    }
  }
`;
