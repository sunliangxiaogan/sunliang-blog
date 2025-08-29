import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const BlogContainer = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: var(--bg-primary);
  color: var(--text-primary);
  max-width: 800px;
  margin: 0 auto;
`

const BlogTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

const BackButton = styled.button`
  background: var(--bg-secondary);
  color: var(--text-primary);
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 2rem;
  
  &:hover {
    background: var(--accent-primary);
  }
`

const BlogContent = styled.div`
  & h2 {
    font-size: 1.8rem;
    margin: 1.5rem 0 1rem 0;
    color: var(--accent-primary);
  }
  
  & p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
  
  & ul {
    color: var(--text-secondary);
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  
  & li {
    margin-bottom: 0.5rem;
  }
  
  & a {
    color: var(--accent-secondary);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`

const RLBlogPage = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/tech');
  };

  return (
    <BlogContainer>
      <BackButton onClick={handleBack}>返回技术页面</BackButton>
      
      <BlogTitle>强化学习的数学原理</BlogTitle>
      
      <BlogContent>
        <h2>引言</h2>
        <p>强化学习是机器学习的一个重要分支，研究智能体如何在环境中通过试错来学习最优策略。理解强化学习的数学原理对于深入掌握这一领域至关重要。</p>
        
        <h2>马尔可夫决策过程（MDP）</h2>
        <p>强化学习的数学基础是马尔可夫决策过程，它由以下元素组成：</p>
        <ul>
          <li>状态空间 S</li>
          <li>动作空间 A</li>
          <li>转移概率 P(s'|s,a)</li>
          <li>奖励函数 R(s,a)</li>
          <li>折扣因子 γ</li>
        </ul>
        
        <h2>策略与价值函数</h2>
        <h3>策略（Policy）</h3>
        <p>策略π(a|s)定义了在状态s下选择动作a的概率。</p>
        
        <h3>价值函数（Value Function）</h3>
        <p>1. 状态价值函数：V<sup>π</sup>(s) = E[∑γ<sup>t</sup> R(s<sub>t</sub>,a<sub>t</sub>) | s<sub>0</sub>=s]</p>
        <p>2. 动作价值函数：Q<sup>π</sup>(s,a) = E[∑γ<sup>t</sup> R(s<sub>t</sub>,a<sub>t</sub>) | s<sub>0</sub>=s,a<sub>0</sub>=a]</p>
        
        <h2>贝尔曼方程</h2>
        <p>价值函数满足贝尔曼方程：</p>
        <p>V<sup>π</sup>(s) = ∑ P(s'|s,a) [R(s,a) + γ V<sup>π</sup>(s')]</p>
        <p>Q<sup>π</sup>(s,a) = R(s,a) + γ ∑ P(s'|s,a) V<sup>π</sup>(s')</p>
        
        <h2>最优策略与最优价值函数</h2>
        <p>最优价值函数：</p>
        <p>V*(s) = max<sub>π</sub> V<sup>π</sup>(s)</p>
        <p>Q*(s,a) = max<sub>π</sub> Q<sup>π</sup>(s,a)</p>
        
        <p>对应的贝尔曼最优方程：</p>
        <p>V*(s) = max<sub>a</sub> [R(s,a) + γ ∑ P(s'|s,a) V*(s')]</p>
        <p>Q*(s,a) = R(s,a) + γ ∑ P(s'|s,a) max<sub>a'</sub> Q*(s',a')</p>
        
        <h2>赵世钰老师的强化学习教程</h2>
        <p>赵世钰老师的强化学习教程提供了深入浅出的数学原理讲解，是学习强化学习的优秀资源。</p>
        
        <h3>参考文档</h3>
        <p><a href="https://github.com/MathFoundationRL/Book-Mathematical-Foundation-of-Reinforcement-Learning" target="_blank" rel="noopener noreferrer">强化学习数学基础</a></p>
        
        <h3>Bilibili视频教程</h3>
        <p><a href="https://www.bilibili.com/video/BV1Bz4y1n7eY/" target="_blank" rel="noopener noreferrer">强化学习的数学原理</a></p>
        
        <h2>学习建议</h2>
        <p>1. 从基础概念开始，逐步深入数学原理</p>
        <p>2. 结合实际例子理解抽象概念</p>
        <p>3. 多做练习巩固理论知识</p>
        <p>4. 参考赵世钰老师的教程获取更深入的理解</p>
      </BlogContent>
    </BlogContainer>
  );
};

export default RLBlogPage;