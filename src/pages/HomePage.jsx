import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const HomeContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 0 2rem;
  text-align: center;
  
  /* 视频背景占位 */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-dark);
    opacity: 0.7;
    z-index: -1;
  }
`

const VideoPlaceholder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2;
  background: linear-gradient(45deg, #0a0a0a, #1a1a1a);
  display: flex;
  justify-content: center;
  align-items: center;
  
  &::after {
    content: '视频背景占位 (video.mp4)';
    color: var(--text-secondary);
    font-size: 1.2rem;
  }
`

const ContentWrapper = styled(motion.div)`
  max-width: 800px;
  z-index: 1;
`

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--shadow-glow);
  animation: float 3s ease-in-out infinite;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1.8rem;
  color: var(--text-primary);
  margin-bottom: 3rem;
  line-height: 1.6;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`

const ButtonGroup = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 1rem;
  }
`

const ActionButton = styled(motion.button)`
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:first-child {
    background: var(--gradient-primary);
    color: #000;
    
    &:hover {
      transform: translateY(-5px) scale(1.05);
      box-shadow: var(--shadow-glow);
    }
  }
  
  &:last-child {
    background: transparent;
    color: var(--text-primary);
    border: 2px solid var(--accent-primary);
    
    &:hover {
      background: var(--gradient-primary);
      color: #000;
      transform: translateY(-5px) scale(1.05);
      box-shadow: var(--shadow-neon);
    }
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`

const HomePage = () => {
  return (
    <HomeContainer>
      <VideoPlaceholder />
      <ContentWrapper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>你好, 我是亮仔</Title>
        <Subtitle>一名热爱生活的AI算法工程师</Subtitle>
        <ButtonGroup>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            查看作品
          </ActionButton>
          <ActionButton
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            联系我
          </ActionButton>
        </ButtonGroup>
      </ContentWrapper>
    </HomeContainer>
  )
}

export default HomePage