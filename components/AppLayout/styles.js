import styled from 'styled-components'
import { breakPoints } from 'styles'
export const Container = styled.div`
  display: grid;
  height: 100vh;
  place-items: center;
`
export const Main = styled.main`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  height: 100%;
  position: relative;
  width: 100%;

  @media (min-width: ${breakPoints.mobile}) {
    height: 90vh;
    width: ${breakPoints.mobile};
    /* width: 100%;
    max-width: ${breakPoints.mobile}; */
  }
`
