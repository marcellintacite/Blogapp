import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => props.w}%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  margin-top: ${(props) => props.mt}px;

  @media (max-width: 770px) {
    align-items: center;
    justify-content: center;
  }
`;
