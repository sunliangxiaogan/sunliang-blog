import React from 'react'
import styled from 'styled-components'

const TestContainer = styled.div`
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

const TestImage = styled.img`
  max-width: 300px;
  height: auto;
`

const TestImagePage = () => {
  return (
    <TestContainer>
      <h1>图片测试页面</h1>
      <TestImage src="/src/assets/images/wechat.png" alt="测试图片" />
    </TestContainer>
  )
}

export default TestImagePage