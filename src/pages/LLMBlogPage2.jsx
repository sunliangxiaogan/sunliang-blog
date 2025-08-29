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
  
  & table {
    width: 100%;
    border-collapse: collapse;
    margin: 1rem 0;
    color: var(--text-secondary);
  }
  
  & th, td {
    border: 1px solid var(--bg-tertiary);
    padding: 0.5rem;
    text-align: left;
  }
  
  & th {
    background: var(--bg-secondary);
  }
`

const LLMBlogPage2 = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/tech');
  };

  return (
    <BlogContainer>
      <BackButton onClick={handleBack}>返回技术页面</BackButton>
      
      <BlogTitle>大语言模型的进展：主流大模型系列</BlogTitle>
      
      <BlogContent>
        <h2>引言</h2>
        <p>大语言模型（LLM）近年来取得了显著进展，推动了人工智能技术的快速发展。基于中国人民大学高瓴人工智能学院赵鑫老师团队发布的《大语言模型：基础与前沿》一书[1]，本文将系统性地介绍几个主流的大语言模型系列，包括Qwen、GPT和LLaMA系列，并探讨其技术演进路径。</p>
        
        <h2>背景与基础知识</h2>
        <p>大语言模型的发展经历了从统计语言模型到神经语言模型，再到预训练语言模型的演进过程。Transformer架构的提出为大语言模型的发展奠定了基础，通过自注意力机制有效捕捉长距离依赖关系。Scaling Law的发现进一步推动了模型规模的持续扩大，使得模型性能得到显著提升。</p>
        
        <h2>GPT系列</h2>
        <h3>GPT-1</h3>
        <ul>
          <li>OpenAI发布的首个GPT模型</li>
          <li>基于Transformer架构</li>
          <li>在多个NLP任务上表现出色</li>
        </ul>
        
        <h3>GPT-2</h3>
        <ul>
          <li>参数量显著增加</li>
          <li>展示了零样本学习能力</li>
          <li>在文本生成方面表现出色</li>
        </ul>
        
        <h3>GPT-3</h3>
        <ul>
          <li>1750亿参数</li>
          <li>强大的少样本学习能力</li>
          <li>广泛应用于各种任务</li>
        </ul>
        
        <h3>GPT-3.5 / ChatGPT</h3>
        <ul>
          <li>在GPT-3基础上进一步优化</li>
          <li>更好的对话能力</li>
          <li>广泛的商业应用</li>
        </ul>
        
        <h3>GPT-4</h3>
        <ul>
          <li>多模态能力</li>
          <li>更强的推理能力</li>
          <li>在各种基准测试中表现优异</li>
        </ul>
        
        <h2>LLaMA系列</h2>
        <h3>LLaMA 1</h3>
        <ul>
          <li>Meta发布的开源模型</li>
          <li>参数高效设计</li>
          <li>在学术界广泛使用</li>
        </ul>
        
        <h3>LLaMA 2</h3>
        <ul>
          <li>开放更多参数版本</li>
          <li>改进的训练数据</li>
          <li>更好的性能表现</li>
        </ul>
        
        <h3>LLaMA 3</h3>
        <ul>
          <li>进一步扩大模型规模</li>
          <li>更高质量的训练数据</li>
          <li>在多个基准测试中表现优异</li>
        </ul>
        
        <h2>Qwen系列</h2>
        <h3>Qwen 1</h3>
        <ul>
          <li>阿里云推出的通义千问系列</li>
          <li>支持多种语言</li>
          <li>在中文任务上表现优异</li>
        </ul>
        
        <h3>Qwen 2</h3>
        <ul>
          <li>性能进一步提升</li>
          <li>更好的对话理解能力</li>
          <li>增强的代码生成能力</li>
        </ul>
        
        <h3>Qwen 3</h3>
        <ul>
          <li>最新版本，功能更强大</li>
          <li>多模态支持</li>
          <li>更高的效率和准确性</li>
        </ul>
        
        <h2>发展趋势</h2>
        <p>基于人大LLM综述的内容，大语言模型的发展趋势可以总结为以下几个方面[1]：</p>
        <ul>
          <li><strong>模型架构创新</strong>：从标准Transformer到更高效的变体，如稀疏注意力、混合专家模型等</li>
          <li><strong>训练方法优化</strong>：包括数据收集与清洗、课程学习、并行训练等技术的持续改进</li>
          <li><strong>模型微调与对齐</strong>：指令微调和人类对齐技术（如RLHF）的发展，使模型更好地满足用户需求</li>
          <li><strong>模型使用与部署</strong>：解码加速算法、模型压缩技术以及提示学习方法的不断演进</li>
          <li><strong>能力评估体系</strong>：建立更全面的评测指标和方法，涵盖基础能力与高级能力的评估</li>
          <li><strong>应用领域拓展</strong>：从传统的NLP任务扩展到代码生成、科学发现、智能体等新兴领域</li>
        </ul>
        
        <h2>结论</h2>
        <p>主流大语言模型系列在技术上不断突破，为人工智能应用提供了强大的基础。中国人民大学的LLM综述为我们提供了系统理解大语言模型技术的框架[1]。随着技术的发展，我们可以期待更强大、更智能的语言模型出现，它们将在更多领域发挥重要作用。</p>
        <p><strong>参考文献</strong><br/>[1] 赵鑫, 等. 大语言模型：基础与前沿. 中国人民大学高瓴人工智能学院.</p>
        
        <h2>模型对比</h2>
        <table>
          <thead>
            <tr>
              <th>模型系列</th>
              <th>开发者</th>
              <th>开源情况</th>
              <th>主要特点</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>GPT</td>
              <td>OpenAI</td>
              <td>部分开源</td>
              <td>商业化应用广泛</td>
            </tr>
            <tr>
              <td>LLaMA</td>
              <td>Meta</td>
              <td>完全开源</td>
              <td>学术研究热门</td>
            </tr>
            <tr>
              <td>Qwen</td>
              <td>阿里云</td>
              <td>部分开源</td>
              <td>中文任务表现优异</td>
            </tr>
          </tbody>
        </table>
        
        <h2>发展趋势</h2>
        <p>1. 模型规模持续扩大</p>
        <p>2. 多模态能力不断增强</p>
        <p>3. 推理能力逐步提升</p>
        <p>4. 效率和成本优化</p>
        <p>5. 更好的安全性和可控性</p>
        
        <h2>结论</h2>
        <p>主流大语言模型系列在技术上不断突破，为人工智能应用提供了强大的基础。随着技术的发展，我们可以期待更强大、更智能的语言模型出现。</p>
      </BlogContent>
    </BlogContainer>
  );
};

export default LLMBlogPage2;