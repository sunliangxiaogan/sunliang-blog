import React from 'react'
import styled from 'styled-components'

const AboutContainer = styled.div`
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

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>关于博客</Title>
      <Content>
        这是一个现代艺术风格的个人博客网站，采用React + Vite构建。
        该页面用于测试GitHub Pages部署配置是否正确。
      </Content>
    </AboutContainer>
  )
}

export default AboutPage