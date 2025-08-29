import React from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  text-align: center;
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 600px;
  width: 100%;
`

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

const ContactLabel = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--accent-primary);
`

const ContactValue = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
`

const QRCode = styled.img`
  max-width: 300px;
  height: auto;
  margin-top: 1rem;
  border: 2px solid var(--accent-primary);
  border-radius: 10px;
`

const ContactPage = () => {
  return (
    <ContactContainer>
      <Title>联系我</Title>
      <ContactInfo>
        <ContactItem>
          <ContactLabel>邮箱</ContactLabel>
          <ContactValue>slucius@mail.ustc.edu.cn</ContactValue>
        </ContactItem>
        <ContactItem>
          <ContactLabel>微信</ContactLabel>
          <ContactValue>slucius</ContactValue>
        </ContactItem>
      </ContactInfo>
    </ContactContainer>
  )
}

export default ContactPage