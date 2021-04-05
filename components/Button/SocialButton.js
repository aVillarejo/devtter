import styled from 'styled-components';
import Button from './';
import { useTheme } from 'styled-components';

import GithubIcon from '../Icons/Github';

const StyledGithubButton = styled(Button)`
  background: ${({ theme }) => theme.colors.black};
  > svg {
    margin-right: 8px;
  }
`;

const GithubButton = (props) => {
  const { colors } = useTheme();

  return (
    <StyledGithubButton {...props}>
      <GithubIcon fill={colors.white} width={'24px'} height={'24px'} />
      {props.children}
    </StyledGithubButton>
  );
};

export default GithubButton;
