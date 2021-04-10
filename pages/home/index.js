import { useEffect, useState } from 'react'
import styled from 'styled-components'

import AppLayout from 'components/AppLayout'
import Devit from 'components/Devit'

const Home = () => {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch('/api/statuses/home_timeline')
      .then(res => res.json())
      .then(setTimeline)
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <AppLayout>
      <Header>
        <HeaderTitle>Inicio</HeaderTitle>
      </Header>
      <Section>
        {timeline.map(({ id, avatar, username, message }) => (
          <Devit
            avatar={avatar}
            id={id}
            key={id}
            message={message}
            username={username}
          />
        ))}
      </Section>
      <Nav />
    </AppLayout>
  )
}

const Header = styled.header`
  align-items: center;
  border-bottom: 1px solid #ccc;
  display: flex;
  height: 49px;
  position: sticky;
  top: 0;
  width: 100%;
`
const HeaderTitle = styled.h2`
  font-size: 21px;
  font-weight: 800;
`
const Section = styled.section`
  padding-top: 49px;
`

const Nav = styled.nav`
  bottom: 0;
  border-top: 1px solid #ccc;
  height: 49px;
  position: sticky;
  width: 100%;
`

export default Home
