import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const ReadingContainer = styled.div`
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

const ReadingPage = () => {
  const books = [
    {
      id: 'ordinary-world',
      title: '平凡的世界',
      excerpt: '一部描写普通人命运变迁的史诗，展现了平凡人生中的不平凡精神。',
      date: '2025-08-29',
      path: '/blogs/ordinary-world'
    },
    {
      id: 'making-friends-with-time',
      title: '和时间做朋友',
      excerpt: '李笑来的时间管理和个人成长方法论，教我们如何与时间合作而非对抗。',
      date: '2025-08-29',
      path: '/blogs/making-friends-with-time'
    }
  ]

  return (
    <ReadingContainer>
      <Title>读书</Title>
      <BlogList>
        {books.map(book => (
          <BlogCard key={book.id} to={book.path}>
            <BlogTitle>{book.title}</BlogTitle>
            <BlogExcerpt>{book.excerpt}</BlogExcerpt>
            <BlogDate>{book.date}</BlogDate>
          </BlogCard>
        ))}
      </BlogList>
    </ReadingContainer>
  )
}

export default ReadingPage