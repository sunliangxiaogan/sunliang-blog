import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const FitnessContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
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

const FitnessPage = () => {
  const articles = [
    {
      id: 'hardcore-fitness',
      title: '运动注意事项-来自硬派健身',
      excerpt: '基于《硬派健身》的科学观点，总结运动中的关键注意事项和实用建议。',
      date: '2025-08-29',
      path: '/blogs/hardcore-fitness'
    }
  ]

  return (
    <FitnessContainer>
      <Title>运动</Title>
      <BlogList>
        {articles.map(article => (
          <BlogCard key={article.id} to={article.path}>
            <BlogTitle>{article.title}</BlogTitle>
            <BlogExcerpt>{article.excerpt}</BlogExcerpt>
            <BlogDate>{article.date}</BlogDate>
          </BlogCard>
        ))}
      </BlogList>
    </FitnessContainer>
  )
}

export default FitnessPage