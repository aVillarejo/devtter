import { Container, Main } from './styles'

export default function AppLayout({ children }) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  )
}
