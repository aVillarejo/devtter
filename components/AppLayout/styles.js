import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;
export const Main = styled.main`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  height: 100%;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.mobile}) {
    height: 90vh;
    /* width: ${({ theme }) => theme.breakPoints.mobile}; */
    width: 100%;
    max-width: ${({ theme }) => theme.breakPoints.mobile};
  }
`;
