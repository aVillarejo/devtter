import styled from 'styled-components'
import React from 'react'
import Avatar from 'components/Avatar'

export const Devit = ({ id, avatar, username, message }) => {
  return (
    <Article>
      <div>
        <Avatar
          src={avatar}
          alt={`${username}-logo`}
          // text={`@${username}`}
        />
      </div>
      <section>
        <strong>{username}</strong>
        <p>{message}</p>
      </section>
    </Article>
  )
}

export default Devit
const Article = styled.article`
  display: flex;
  padding: 10px 15px;
  border-bottom: 2px solid #eaf7ff;
  div {
    padding-right: 10px;
  }

  p {
    margin: 0;
    line-height: 1.3125;
  }
`
