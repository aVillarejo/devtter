import styled from 'styled-components'

const StyledButton = styled.button`
  align-items: center;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 99px;
  border: 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;
  display: flex;
  font-size: 16px;
  font-weight: 800;
  padding: 8px 24px;
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.7;
  }
`

const Button = props => {
  const children = props.children
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button
