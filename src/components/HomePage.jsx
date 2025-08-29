import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0a0a0a;
  overflow: hidden;
`;

const VideoBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    #0a0a0a 0%,
    #1a1a1a 25%,
    #0a0a0a 50%,
    #1a1a1a 75%,
    #0a0a0a 100%
  );
  z-index: -1;
`;

const AnimatedBackground = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const FloatingParticle = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: linear-gradient(45deg, #ff006e, #8338ec);
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(131, 56, 236, 0.5);
`;

const ContentWrapper = styled(motion.div)`
  text-align: center;
  z-index: 10;
  max-width: 800px;
  padding: 0 2rem;
`;

const MainTitle = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 1.5rem;
  line-height: 1.2;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);
`;

const Subtitle = styled(motion.p)`
  font-size: 1.5rem;
  color: #b3b3b3;
  margin-bottom: 3rem;
  line-height: 1.6;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ButtonContainer = styled(motion.div)`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;
`;

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
  
  &.primary {
    background: linear-gradient(45deg, #ff006e, #8338ec);
    color: white;
    box-shadow: 0 4px 20px rgba(131, 56, 236, 0.3);
  }
  
  &.secondary {
    background: transparent;
    color: #ffffff;
    border: 2px solid #8338ec;
    box-shadow: 0 4px 20px rgba(131, 56, 236, 0.1);
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(131, 56, 236, 0.4);
  }
`;

const GlowEffect = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 200%;
  height: 200%;
  background: radial-gradient(circle, rgba(131, 56, 236, 0.2) 0%, transparent 70%);
  transform: translate(-50%, -50%);
  pointer-events: none;
`;

const HomePage = () => {
  const navigate = useNavigate();
  
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 5,
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 1 }
    }
  };

  const contentVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 1,
        delay: 0.5,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.7,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 0.9,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.8,
        delay: 1.1,
        staggerChildren: 0.2,
        ease: "easeOut"
      }
    }
  };

  const particleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i) => ({
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      transition: {
        duration: 3,
        delay: i * 0.1,
        repeat: Infinity,
        repeatType: "loop"
      }
    })
  };

  return (
    <HomeContainer
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <VideoBackground />
      
      <AnimatedBackground>
        {particles.map((particle) => (
          <FloatingParticle
            key={particle.id}
            custom={particle.id}
            variants={particleVariants}
            initial="hidden"
            animate="visible"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
            }}
          />
        ))}
      </AnimatedBackground>

      <ContentWrapper
        variants={contentVariants}
        initial="hidden"
        animate="visible"
      >
        <MainTitle
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          你好，我是孙亮
        </MainTitle>
        
        <Subtitle
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          一名热爱学习的AI算法工程师
        </Subtitle>

        <ButtonContainer
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
        >
          <ActionButton
            className="primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            查看作品
            <GlowEffect />
          </ActionButton>
          
          <ActionButton
            className="secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/contact')}
          >
            联系我
            <GlowEffect />
          </ActionButton>
        </ButtonContainer>
      </ContentWrapper>
    </HomeContainer>
  );
};

export default HomePage;