import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(10, 10, 10, 0.9);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #ffffff;
  cursor: pointer;
  background: linear-gradient(45deg, #ff006e, #8338ec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;

const NavLink = styled(motion(Link))`
  color: #b3b3b3;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  position: relative;
  padding: 0.5rem 0;
  transition: color 0.3s ease;
  
  &:hover {
    color: #ffffff;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #ff006e, #8338ec);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(131, 56, 236, 0.1) 0%, transparent 70%);
  pointer-events: none;
`;

const Navbar = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2 }
    }
  };

  const linkVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.1,
      transition: { duration: 0.2 }
    }
  };

  return (
    <NavContainer
      variants={navVariants}
      initial="hidden"
      animate="visible"
    >
      <Logo
        variants={logoVariants}
        initial="initial"
        whileHover="hover"
      >
        SluciuS
      </Logo>
      
      <NavLinks>
        <NavLink
          to="/"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={() => setHoveredLink('tech')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          技术
          {hoveredLink === 'tech' && <GlowEffect />}
        </NavLink>
        
        <NavLink
          to="/"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={() => setHoveredLink('fitness')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          健身
          {hoveredLink === 'fitness' && <GlowEffect />}
        </NavLink>
        
        <NavLink
          to="/"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={() => setHoveredLink('reading')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          读书
          {hoveredLink === 'reading' && <GlowEffect />}
        </NavLink>
        
        <NavLink
          to="/"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={() => setHoveredLink('blog')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          博客
          {hoveredLink === 'blog' && <GlowEffect />}
        </NavLink>
        
        <NavLink
          to="/contact"
          variants={linkVariants}
          initial="initial"
          whileHover="hover"
          onMouseEnter={() => setHoveredLink('contact')}
          onMouseLeave={() => setHoveredLink(null)}
        >
          联系我
          {hoveredLink === 'contact' && <GlowEffect />}
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Navbar;