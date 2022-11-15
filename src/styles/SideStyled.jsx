import styled from "styled-components";

export const SideStyled = styled.div`
  width: 320px;
  height: 470px;
  padding: 10px;
  background: ${({ theme }) => theme.color.blue};
  border-radius: 5px;
  color: ${({ theme }) => theme.color.dark};

  h4 {
    text-align: center;
    font-size: 1.3rem;
    padding-bottom: 10px;
  }
  .card {
    width: 95%;
    margin: auto;
    padding: 5px;
    background-color: #fff;
    margin-bottom: 10px;
    color: ${({ theme }) => theme.color.black};
    border-radius: 5px;
    display: flex;
    align-items: center;
    &:hover {
      transform: translateX(5px);
      transition: all 0.2s ease-in;
      cursor: pointer;
    }
    img {
      width: 70px;
      border-radius: 5px;
      height: 70px;
    }
    .texte {
      padding: 5px;
      padding-left: 10px;
      h3 {
        font-size: 16px;
        color: ${({ theme }) => theme.color.black};
      }
      p {
        font-size: 11px;
        color: #3339;
      }
      span {
        font-style: italic;
        font-size: 11px;
        color: ${({ theme }) => theme.color.second};
      }
    }
    .btn {
      text-decoration: none;
      padding: 4px 15px;
      margin-right: 5px;
      background: #2221;
      border-radius: 15px;
      color: ${({ theme }) => theme.color.primary};

      &:hover {
        background-color: ${({ theme }) => theme.color.second};
        color: #fff;
        transition: all 0.2s ease-in;
      }
    }
  }

  @media (max-width: 770px) {
    width: 97%;
    margin: auto;
  }
`;
