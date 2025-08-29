import React from 'react'
import styled from 'styled-components'

const ReadingContainer = styled.div`
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
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const Content = styled.p`
  font-size: 1.2rem;
  max-width: 600px;
  line-height: 1.6;
  color: var(--text-secondary);
`

const ReadingPage = () => {
  return (
    <ReadingContainer>
      <Title>读书</Title>
      <Content>
        这里记录我读过的书籍和读书笔记。
      </Content>
    </ReadingContainer>
  )
}

export default ReadingPage