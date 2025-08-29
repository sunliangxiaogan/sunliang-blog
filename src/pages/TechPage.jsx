import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const TechContainer = styled.div`
  min-height: 100vh;
  padding: 5rem 2rem 2rem;
  background: var(--bg-primary);
  color: var(--text-primary);
`

const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
`

const BlogList = styled.div`
  max-width: 800px;
  margin: 0 auto;
  display: grid;
  gap: 1.5rem;
`

const BlogCard = styled(Link)`
  background: var(--bg-secondary);
  padding: 1.5rem;
  border-radius: 8px;
  text-decoration: none;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    border-color: var(--accent-primary);
  }
`

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`

const BlogExcerpt = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1rem;
`

const BlogDate = styled.span`
  font-size: 0.9rem;
  color: var(--text-muted);
`

const TechPage = () => {
  const techPosts = [
    {
      id: 'llm-agent',
      title: '大模型应用',
      excerpt: '介绍大型语言模型的基本概念、特点以及在实际场景中的应用。',
      date: '2025-08-29',
      path: '/blog/llm-agent'
    },
    {
      id: 'reinforcement-learning',
      title: '强化学习的数学原理',
      excerpt: '深入探讨强化学习的数学基础，包括马尔可夫决策过程、贝尔曼方程等核心概念。',
      date: '2025-08-29',
      path: '/blog/reinforcement-learning'
    },
    {
      id: 'mainstream-llm',
      title: '大语言模型的进展',
      excerpt: '分析主流大模型系列（Qwen、GPT、LLaMA）的发展历程和技术特点。',
      date: '2025-08-29',
      path: '/blog/mainstream-llm'
    }
  ];

  return (
    <TechContainer>
      <Title>技术</Title>
      <BlogList>
        {techPosts.map(post => (
          <BlogCard key={post.id} to={post.path}>
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            <BlogDate>{post.date}</BlogDate>
          </BlogCard>
        ))}
      </BlogList>
    </TechContainer>
  )
}

export default TechPage