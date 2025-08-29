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
`

const LLMBlogPage = () => {
  const navigate = useNavigate();
  
  const handleBack = () => {
    navigate('/tech');
  };

  return (
    <BlogContainer>
      <BackButton onClick={handleBack}>返回技术页面</BackButton>
      
      <BlogTitle>大模型应用</BlogTitle>
      
      <BlogContent>
        <h2>什么是大模型应用？</h2>
        <p>大模型应用是指基于大型语言模型（Large Language Model, LLM）技术构建的各种实用程序和系统。这些应用利用大模型的强大语言理解和生成能力，结合其他技术如检索增强生成（RAG）等，为用户提供各种智能化服务。</p>
        
        <h2>主流大模型应用类型</h2>
        <p>根据GitHub上Shubhamsaboo维护的awesome-llm-apps项目[1]，当前主流的大模型应用可以分为以下几类：</p>
        
        <h3>RAG应用（检索增强生成）</h3>
        <p>RAG技术通过结合信息检索和语言生成，提升大模型应用的准确性和相关性：</p>
        <ul>
          <li>智能文档搜索</li>
          <li>知识库问答系统</li>
          <li>多模态RAG应用</li>
        </ul>
        
        <h3>语音AI应用</h3>
        <p>结合语音识别和合成技术的大模型应用：</p>
        <ul>
          <li>智能语音助手</li>
          <li>客户支持语音系统</li>
        </ul>
        
        <h2>开源LLM应用项目</h2>
        <p>awesome-llm-apps项目[1]是一个收集了大量LLM应用的开源仓库，涵盖了使用OpenAI、Anthropic、Gemini以及开源模型（如LLaMA、DeepSeek、Qwen等）构建的应用实例。该项目为开发者提供了丰富的参考和实践模板。</p>
        
        <h2>如何开始构建LLM应用</h2>
        <p>1. 克隆awesome-llm-apps项目：</p>
        <pre><code>git clone https://github.com/Shubhamsaboo/awesome-llm-apps.git</code></pre>
        <p>2. 安装依赖：</p>
        <pre><code>cd awesome-llm-apps
pip install -r requirements.txt</code></pre>
        <p>3. 选择感兴趣的项目并按照说明文档运行</p>
        
        <h2>发展趋势</h2>
        <p>大模型应用正朝着更加智能化、专业化和多样化的方向发展：</p>
        <ul>
          <li><strong>技术融合</strong>：大模型与RAG等技术的深度融合</li>
          <li><strong>多模态交互</strong>：支持文本、语音、图像等多种交互方式</li>
          <li><strong>行业定制化</strong>：针对特定行业的专业化应用</li>
          <li><strong>边缘部署</strong>：在本地设备上运行大模型应用</li>
          <li><strong>生产级应用</strong>：从原型开发向生产环境部署演进</li>
        </ul>
        
        <p>随着技术的不断进步，我们可以期待更多创新和实用的LLM应用出现。</p>
        
        <p><strong>参考文献</strong><br/>[1] Shubhamsaboo. Awesome LLM Apps. https://github.com/Shubhamsaboo/awesome-llm-apps</p>
      </BlogContent>
    </BlogContainer>
  );
};

export default LLMBlogPage;