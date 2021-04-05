import { useEffect, useState } from 'react';
import AppLayout from '../components/AppLayout';
import styled from 'styled-components';
import GithubButton from '../components/Button/SocialButton';

import { loginWithGithub, onAuthStateChanged } from '../firebase/client';

export default function Index() {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);

  const handleClick = () => {
    loginWithGithub().then((usr) => {
        setUser(usr);
      }).catch((err) => {
        console.log(err);
      });
  };
  
  return (
    <AppLayout>
      <Section>
        <Logo src='/devter-logo.png' alt='nav-logo' />
        <Title>Devtter</Title>
        <Subitle>
          <span>Talk about development</span>
          <span>with developers👨‍💻 👩‍💻</span>
        </Subitle>
        {
          !user && 
          <GithubButton onClick={handleClick}>
              Login with Github
          </GithubButton>
        }
        {
          user && user.avatar && <div>
            <Logo src={user.avatar} />
            <strong>{user.username}</strong>
          </div>
        }
      </Section>
    </AppLayout>
  );
}
// https://100dayscss.com/?dayIndex=1
// https://www.frontendmentor.io/challenges
const Title = styled.h1`
  color: ${({ theme }) => theme.colors.secundary};
  font-weight: 800;
  margin-bottom: 16px;
`;
const Subitle = styled.h2`
  font-size: 21px;
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const Logo = styled.img`
  width: 120px;
`;
const Section = styled.section`
  display: grid;
  height: 100%;
  place-content: center;
  place-items: center;
`;
