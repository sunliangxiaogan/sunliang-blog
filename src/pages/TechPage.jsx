import React from 'react'
import styled from 'styled-components'

const TechContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
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

const BlogList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
  width: 100%;
`

const BlogItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: var(--bg-secondary);
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`

const BlogTitle = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: var(--accent-primary);
`

const BlogExcerpt = styled.p`
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`

const ReadMore = styled.a`
  color: var(--accent-secondary);
  text-decoration: none;
  font-weight: bold;
  
  &:hover {
    text-decoration: underline;
  }
`

const TechPage = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'LLM和Agent',
      excerpt: '介绍大型语言模型和智能代理的基本概念、特点以及它们之间的关系。',
      link: '/blog/llm-agent'
    },
    {
      id: 2,
      title: '强化学习的数学原理',
      excerpt: '深入探讨强化学习的数学基础，包括马尔可夫决策过程、贝尔曼方程等核心概念。',
      link: '/blog/reinforcement-learning'
    },
    {
      id: 3,
      title: '大语言模型的进展',
      excerpt: '分析主流大模型系列（Qwen、GPT、LLaMA）的发展历程和技术特点。',
      link: '/blog/mainstream-llm'
    }
  ];

  return (
    <TechContainer>
      <Title>技术</Title>
      <BlogList>
        {blogPosts.map(post => (
          <BlogItem key={post.id}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            <ReadMore href={post.link}>阅读更多</ReadMore>
          </BlogItem>
        ))}
      </BlogList>
    </TechContainer>
  )
}

export default TechPage