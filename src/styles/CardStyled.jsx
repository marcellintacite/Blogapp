import styled from "styled-components";
export const CardStyled = styled.div`
  width: 250px;
  min-height: 280px;
  padding-bottom: 10px;
  box-shadow: -2px 7px 15px #f7aca937;
  margin: 5px;
  margin-right: 25px;
  margin-bottom: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  .im {
    width: 100%;
    margin-top: 10px;
    display: flex;
    img {
      width: 90%;
      border-radius: 10px;
      margin: auto;
    }
  }
  .detail {
    width: 90%;
    margin: auto;
    margin-top: 0;
    margin-bottom: 0;
  }
  h4 {
    color: ${({ theme }) => theme.color.dark};
    font-size: 20px;
    padding-top: 5px;
  }
  .date {
    margin-top: 10px;
    font-size: 12px;
  }
  .profile {
    width: 90%;
    display: flex;
    margin-top: 10px;
    align-items: center;
    justify-content: space-between;
    span {
      flex: 1;
      padding-left: 5px;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  }

  &:hover {
    transform: scale(1.05);
    cursor: pointer;
    transition: all 0.1s ease-in;
  }
  &:hover .detail h4 {
    color: ${({ theme }) => theme.color.primary};
  }
  @media (max-width: 770px) {
    width: 90%;
    margin: auto;
    margin-top: 25px;
  }
`;
