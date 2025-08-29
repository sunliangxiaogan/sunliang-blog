import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--accent-primary);
  text-decoration: none;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-tertiary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: var(--shadow-glow);
  animation: neon 2s ease-in-out infinite alternate;
  
  &:hover {
    transform: scale(1.05);
    transition: transform 0.3s ease;
  }
`

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    gap: 1rem;
  }
`

const NavLink = styled(Link)`
  color: var(--text-primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:hover {
    color: var(--accent-primary);
    background: rgba(255, 255, 255, 0.05);
    transform: translateY(-2px);
    box-shadow: var(--shadow-glow);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(0, 255, 136, 0.2), transparent);
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
`

const Navbar = () => {
  return (
    <NavContainer>
      <Logo to="/">slucius</Logo>
      <NavLinks>
        <NavLink to="/tech">技术</NavLink>
        <NavLink to="/fitness">健身</NavLink>
        <NavLink to="/reading">读书</NavLink>
        <NavLink to="/blog">博客</NavLink>
        <NavLink to="/contact">联系我</NavLink>
      </NavLinks>
    </NavContainer>
  )
}

export default Navbar