import styled from "styled-components";
export const FooterStyled = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  height: 100%;
  padding-bottom: 30px;
  background: ${({ theme }) => theme.color.blue};
  .left {
    padding: 5px;
    padding-left: 15px;
    img {
      width: 60px;
      height: 60px;
    }
    h3 {
      color: ${({ theme }) => theme.color.primary};
    }
    p {
      width: 70%;
      padding-top: 15px;
    }
  }

  .right {
    flex: 1;
    display: flex;

    .first,
    .second {
      padding-top: 10px;
      padding: 15px;
      margin-right: 30px;
      h3 {
        color: #333;
        font-size: 16px;
      }
      ul {
        margin-top: 10px;
      }
      ul li {
        text-decoration: none;
        list-style: none;

        a {
          text-decoration: none;
          color: #333;
        }
      }
    }
    .social {
      display: flex;
      align-items: flex-end;

      justify-content: space-around;
      span {
        padding-right: 20px;
        font-size: 18px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 770px) {
    display: block;
    .right {
      width: 94%;
      margin: auto;
      display: block;
    }

    .social {
      margin-top: 20px;
    }
  }
`;
