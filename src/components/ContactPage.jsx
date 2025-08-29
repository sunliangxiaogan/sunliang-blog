import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ContactContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  padding-top: 80px; // 为导航栏留出空间
`;

const ContactCard = styled(motion.div)`
  background: rgba(20, 20, 20, 0.8);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 3rem;
  max-width: 500px;
  width: 100%;
  text-align: center;
  box-shadow: 0 8px 32px rgba(131, 56, 236, 0.2);
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  color: #ffffff;
  margin-bottom: 1rem;
  background: linear-gradient(45deg, #ff006e, #8338ec);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled(motion.p)`
  font-size: 1.2rem;
  color: #b3b3b3;
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const ContactInfo = styled(motion.div)`
  margin: 2rem 0;
`;

const ContactItem = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem 0;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(131, 56, 236, 0.1);
    transform: translateY(-2px);
  }
`;

const Icon = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  color: #8338ec;
  font-size: 1.2rem;
`;

const ContactText = styled.span`
  font-size: 1.1rem;
  color: #ffffff;
  font-weight: 500;
`;

const ContactLabel = styled.span`
  font-size: 0.9rem;
  color: #b3b3b3;
  margin-right: 0.5rem;
`;

const WeChatQR = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5rem;
`;

const QRImage = styled(motion.img)`
  width: 140px;
  height: 140px;
  border-radius: 12px;
  border: 3px solid rgba(255, 255, 255, 0.1);
  background: #ffffff;
  padding: 8px;
  cursor: pointer;
  
  &:hover {
    border-color: rgba(255, 0, 110, 0.5);
    box-shadow: 0 0 25px rgba(255, 0, 110, 0.2);
    transform: scale(1.05);
  }
`;

const QRText = styled.div`
  font-size: 0.8rem;
  color: #b3b3b3;
  margin-top: 0.25rem;
  text-align: center;
`;

const ResumeLink = styled(motion.a)`
  color: #8338ec;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  position: relative;
  padding: 0.25rem 0;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff006e;
    text-shadow: 0 0 10px rgba(255, 0, 110, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(45deg, #8338ec, #ff006e);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <ContactContainer>
      <ContactCard
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Title variants={itemVariants}>
          联系我
        </Title>
        
        <Subtitle variants={itemVariants}>
          很高兴认识你！可以通过以下方式联系到我
        </Subtitle>

        <ContactInfo>
          <ContactItem variants={itemVariants}>
            <Icon>📱</Icon>
            <div>
              <ContactLabel>电话:</ContactLabel>
              <ContactText>18515570141</ContactText>
            </div>
          </ContactItem>

          <ContactItem variants={itemVariants}>
            <Icon>💬</Icon>
            <div>
              <ContactLabel>微信:</ContactLabel>
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{ display: 'inline-block' }}
              >
                <QRImage 
                  src="/wechat-qr.png"
                  alt="微信二维码"
                />
                <div style={{ fontSize: '0.8rem', color: '#b3b3b3', marginTop: '0.25rem' }}>扫码添加</div>
              </motion.div>
            </div>
          </ContactItem>

          <ContactItem variants={itemVariants}>
            <Icon>📧</Icon>
            <div>
              <ContactLabel>邮箱:</ContactLabel>
              <ContactText>slucius@mail.ustc.edu.cn</ContactText>
            </div>
          </ContactItem>

          <ContactItem variants={itemVariants}>
            <Icon>🌐</Icon>
            <div>
              <ContactLabel>个人简历:</ContactLabel>
              <ContactText as="a"
                href="https://isunliang.github.io"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: '#8338ec',
                  textDecoration: 'none',
                  borderBottom: '1px solid transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.color = '#ff006e';
                  e.target.style.borderBottomColor = '#ff006e';
                }}
                onMouseLeave={(e) => {
                  e.target.style.color = '#8338ec';
                  e.target.style.borderBottomColor = 'transparent';
                }}
              >
                isunliang.github.io
              </ContactText>
            </div>
          </ContactItem>
        </ContactInfo>

        <motion.div
          variants={itemVariants}
          style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#b3b3b3' }}
        >
          期待与你的交流！
        </motion.div>
      </ContactCard>
    </ContactContainer>
  );
};

export default ContactPage;