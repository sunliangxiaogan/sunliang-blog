import React from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'

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
  
  & h3 {
    font-size: 1.4rem;
    margin: 1.2rem 0 0.8rem 0;
    color: var(--accent-secondary);
  }
  
  & p {
    font-size: 1.1rem;
    line-height: 1.6;
    color: var(--text-secondary);
    margin-bottom: 1rem;
  }
  
  & ul, & ol {
    color: var(--text-secondary);
    margin-left: 2rem;
    margin-bottom: 1rem;
  }
  
  & li {
    margin-bottom: 0.5rem;
  }
  
  & blockquote {
    border-left: 4px solid var(--accent-primary);
    padding-left: 1rem;
    margin: 1rem 0;
    font-style: italic;
    color: var(--text-muted);
  }
  
  & pre {
    background: var(--bg-secondary);
    padding: 1rem;
    border-radius: 5px;
    overflow-x: auto;
    margin: 1rem 0;
  }
  
  & code {
    background: var(--bg-secondary);
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
  }
`

const BlogDate = styled.div`
  font-size: 0.9rem;
  color: var(--text-muted);
  margin-bottom: 2rem;
  text-align: right;
`

// 博客文章内容映射
const blogPosts = {
  'ordinary-world': {
    title: '平凡的世界',
    content: `
      <h2>作品简介</h2>
      <p>《平凡的世界》是路遥创作的一部百万字的长篇小说，全景式地展示了中国当代城乡社会生活。小说以陕北黄土高原双水村孙、田、金三家的命运为中心，反映了从"文革"后期到改革初期广阔的社会面貌。</p>
      
      <h2>主要人物</h2>
      <h3>孙少安</h3>
      <p>孙家的长子，一个勤劳朴实、有责任感的农村青年。他过早地承担起了家庭的重担，为了弟妹能够上学读书，自己辍学务农。他的爱情故事令人唏嘘，与田润叶的纯真感情因门第差异而无果，最终与善良朴实的贺秀莲结合。</p>
      
      <h3>孙少平</h3>
      <p>孙家的次子，一个有理想、有抱负的知识青年。他从一个自卑的农村学生成长为一名有思想、有能力的煤矿工人。他与田晓霞的爱情纯真而美好，虽然最终以悲剧收场，但这段感情深深影响了他的生命轨迹。</p>
      
      <h3>田润叶</h3>
      <p>田福军的女儿，温柔善良，对爱情充满憧憬。她与孙少安青梅竹马，却因家庭背景差异无法结合，最终嫁给了李向前，经历了感情的波折。</p>
      
      <h3>田晓霞</h3>
      <p>田福军的女儿，活泼开朗，思想进步。她与孙少平相识相知，两人的感情跨越了阶层的界限。她的意外去世是全书最令人心碎的情节之一。</p>
      
      <h2>主题思想</h2>
      <h3>平凡中的伟大</h3>
      <p>小说通过描写普通人在平凡生活中的奋斗与坚持，展现了平凡人生中的不平凡精神。无论是孙少安的勤劳致富，还是孙少平的知识追求，都体现了普通人身上的可贵品质。</p>
      
      <h3>时代的变迁</h3>
      <p>作品真实地记录了从文革到改革开放初期的社会变迁，展现了农村与城市、贫穷与富裕之间的巨大差异，以及这种差异对人们命运的影响。</p>
      
      <h3>理想与现实的冲突</h3>
      <p>小说中的人物都在理想与现实之间挣扎。孙少平的理想主义与现实的残酷形成鲜明对比，田润叶对爱情的向往与现实的无奈，都深刻反映了那个时代的特点。</p>
      
      <h2>艺术特色</h2>
      <h3>现实主义手法</h3>
      <p>路遥采用严格的现实主义手法，真实地再现了当时的社会生活和人物命运，没有刻意的粉饰和美化。</p>
      
      <h3>细腻的心理描写</h3>
      <p>对人物内心世界的深入挖掘，特别是对孙少平、田晓霞等人物心理变化的细腻描写，使人物形象更加丰满。</p>
      
      <h3>宏大的叙事结构</h3>
      <p>小说时间跨度大，空间转换频繁，人物众多，但结构严谨，层次分明，展现了作者高超的叙事能力。</p>
      
      <h2>个人感悟</h2>
      <p>《平凡的世界》让我深刻理解了父辈们所经历的艰辛岁月，也让我明白了生活的真谛不在于轰轰烈烈的成就，而在于平凡中的坚持与奋斗。孙少平的成长历程让我明白，知识改变命运，但更重要的是保持对生活的热爱和对理想的追求。</p>
      
      <p>在当今这个快速变化的时代，我们或许已经远离了那个物质匮乏的年代，但《平凡的世界》所传达的精神依然具有现实意义。它告诉我们：无论时代如何变迁，人的尊严、奋斗精神和对美好生活的向往永远不会过时。</p>
    `,
    date: '2025-08-29',
    backPath: '/reading'
  },
  'making-friends-with-time': {
    title: '和时间做朋友',
    content: `
      <h2>作品简介</h2>
      <p>《把时间当作朋友》是李笑来所著的一本关于时间管理和个人成长的书籍。这本书颠覆了传统的时间管理观念，提出了"我们无法管理时间，我们只能管理自己"的核心观点。</p>
      
      <h2>核心观点</h2>
      <h3>1. 时间无法管理，只能管理自己</h3>
      <p>这是全书最核心的观点：时间不会因为任何人的意志而改变其流逝的速度，真正需要管理的是自己的行为和选择。</p>
      
      <h3>2. 心智的力量</h3>
      <p>作者认为心智是影响时间利用的关键因素，包括一个人的知识和经验的总和，以及思考方式和模式。通过学习和实践，可以不断提升自己的心智水平。</p>
      
      <h3>3. 积累的力量</h3>
      <p>知识和技能的积累会产生复利效应，真正的成长来自于长期的积累和坚持，足够的积累最终会带来质的飞跃。</p>
      
      <h2>关键方法论</h2>
      <h3>1. 记录时间开销</h3>
      <p>只有了解时间去哪儿了，才能进行有效改进。建议详细记录每天的时间使用情况，至少记录一周以上。</p>
      
      <h3>2. 制作时间预算</h3>
      <p>像管理金钱一样管理时间，估算任务所需时间，预留缓冲时间，设置优先级，并根据实际情况不断优化预算。</p>
      
      <h3>3. 任务拆分技术</h3>
      <p>将大任务分解为可执行的小任务，降低任务的心理难度，提高执行效率。可以按时间、步骤或难度进行拆分。</p>
      
      <h2>实用技巧</h2>
      <h3>番茄工作法</h3>
      <p>25分钟专注 + 5分钟休息，适用于需要高度专注的任务。要保护番茄时间不被打断，根据实际情况调整时间长度。</p>
      
      <h3>任务列表管理</h3>
      <p>建立任务清单、等待清单和未来清单，定期回顾和更新，选择适合自己的工具。</p>
      
      <h3>减少干扰</h3>
      <p>识别干扰源，关闭通知，设置专注时间，创造专注环境，建立应急处理机制。</p>
      
      <h2>心智成长</h2>
      <h3>学习能力提升</h3>
      <p>培养独立获取知识的能力，掌握主动学习、深度学习和关联学习的方法。</p>
      
      <h3>思维模式转变</h3>
      <p>培养成长型思维，相信能力可以通过努力提升，用长期的眼光看待问题。</p>
      
      <h2>个人感悟</h2>
      <p>《把时间当作朋友》让我意识到，与其焦虑时间不够，不如学会与时间合作。时间是最公平的朋友，对每个人都一视同仁。真正的成长来自于持续的自我管理和积累。</p>
      
      <p>这本书教会我：每一个当下都是未来的基石，与其寻找更好的方法，不如马上开始行动。持续的行动胜过完美的计划。</p>
    `,
    date: '2025-08-29',
    backPath: '/reading'
  },
  'hardcore-fitness': {
    title: '运动注意事项 - 来自硬派健身',
    content: `
      <h2>前言</h2>
      <p>健身是一项需要科学指导的运动，错误的训练方法不仅无法达到预期效果，还可能造成身体损伤。基于《硬派健身》的理念，我总结了一些重要的运动注意事项。</p>
      
      <h2>训练前准备</h2>
      <h3>1. 身体评估</h3>
      <p>在开始任何训练计划前，建议进行全面的身体评估，包括心肺功能、关节活动度、肌肉力量等。如果有既往伤病，需要特别注意。</p>
      
      <h3>2. 设定合理目标</h3>
      <p>根据自身情况设定SMART目标（具体、可衡量、可达成、相关性、时限性），避免设定过高或过低的目标。</p>
      
      <h3>3. 热身的重要性</h3>
      <p>充分的热身可以提高肌肉温度、增加关节活动度、激活神经系统，建议热身时间5-10分钟，包括动态拉伸和轻量活动。</p>
      
      <h2>训练中的注意事项</h2>
      <h3>1. 正确的动作技术</h3>
      <p>技术优先于重量，宁可减轻重量也要保证动作标准。建议在专业教练指导下学习正确的动作模式。</p>
      
      <h3>2. 渐进超负荷原则</h3>
      <p>逐步增加训练负荷，避免突然大幅增加训练量或强度，给身体足够的适应时间。</p>
      
      <h3>3. 呼吸控制</h3>
      <p>正确的呼吸模式对训练效果和安全至关重要，力量训练时通常采用发力时呼气，还原时吸气的方式。</p>
      
      <h3>4. 避免过度训练</h3>
      <p>注意身体的反馈信号，如持续疲劳、睡眠质量下降、训练热情减退等，及时调整训练计划。</p>
      
      <h2>训练后恢复</h2>
      <h3>1. 整理活动</h3>
      <p>训练后进行5-10分钟的低强度整理活动，帮助身体从训练状态过渡到休息状态。</p>
      
      <h3>2. 拉伸放松</h3>
      <p>训练后进行静态拉伸，每个动作保持15-30秒，有助于肌肉恢复和增加柔韧性。</p>
      
      <h3>3. 营养补充</h3>
      <p>训练后30分钟内补充优质蛋白质和碳水化合物，促进肌肉修复和恢复。</p>
      
      <h3>4. 充足睡眠</h3>
      <p>睡眠是恢复的关键时期，建议每晚7-9小时的优质睡眠。</p>
      
      <h2>常见错误及纠正</h2>
      <h3>1. 忽视热身和拉伸</h3>
      <p>这是最常见的错误，很多训练者急于开始训练而忽略这些环节，长期可能导致运动损伤。</p>
      
      <h3>2. 盲目追求大重量</h3>
      <p>过度关注重量而忽视动作质量，不仅影响训练效果，还增加了受伤风险。</p>
      
      <h3>3. 训练过于频繁</h3>
      <p>不给身体足够的恢复时间，反而会影响训练效果和身体健康。</p>
      
      <h3>4. 忽视饮食和休息</h3>
      <p>认为只要训练就能达到目标，忽视了饮食和休息对训练效果的重要影响。</p>
      
      <h2>特殊人群注意事项</h2>
      <h3>1. 初学者</h3>
      <p>从基础动作开始，建立良好的动作模式，逐步增加训练强度。</p>
      
      <h3>2. 有伤病史者</h3>
      <p>在医生或专业教练指导下进行训练，避免加重原有伤病。</p>
      
      <h3>3. 中老年人群</h3>
      <p>特别注意关节保护，选择适合的低冲击训练方式。</p>
      
      <h2>总结</h2>
      <p>科学健身需要遵循循序渐进、因人而异、全面发展的原则。记住，健身是一场马拉松，不是短跑，持续性和科学性比短期强度更重要。</p>
      
      <p>最重要的是，健身应该是一种享受，而不是负担。找到适合自己的训练方式，培养长期的运动习惯，这才是健身的真谛。</p>
    `,
    date: '2025-08-29',
    backPath: '/fitness'
  }
}

const BlogPostPage = () => {
  const { slug } = useParams()
  const navigate = useNavigate()
  
  const post = blogPosts[slug]
  
  if (!post) {
    return (
      <BlogContainer>
        <h1>文章未找到</h1>
        <BackButton onClick={() => navigate(-1)}>返回</BackButton>
      </BlogContainer>
    )
  }

  const handleBack = () => {
    navigate(post.backPath)
  }

  return (
    <BlogContainer>
      <BackButton onClick={handleBack}>
        {post.backPath === '/reading' ? '返回读书页面' : '返回运动页面'}
      </BackButton>
      
      <BlogTitle>{post.title}</BlogTitle>
      <BlogDate>{post.date}</BlogDate>
      
      <BlogContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </BlogContainer>
  )
}

export default BlogPostPage