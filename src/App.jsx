import { useEffect, useState } from 'react'
import './App.css'

const content = {
  zh: {
    languageButton: 'EN',
    projectDetailButton: '项目详细',
    projectIntroTitle: '项目介绍',
    backToProjects: '返回项目经历',
    certificateButton: '实习证明',
    fileAreaTitle: '文件区',
    name: '刘广天',
    role: '27 届硕士毕业生',
    phone: '手机号：18832060103',
    phoneHref: 'tel:+8618832060103',
    email: '邮箱：18832060103@163.com',
    nav: [
      { id: 'home', label: '基本信息' },
      { id: 'education', label: '教育背景' },
      { id: 'experience', label: '实习经历' },
      { id: 'projects', label: '项目经历' },
      { id: 'skills', label: '专业技能' },
      { id: 'other', label: '荣誉获奖' },
    ],
    sections: {
      education: '教育背景',
      experience: '实习经历',
      projects: '项目经历',
      skills: '专业技能',
      other: '荣誉获奖',
    },
    education: {
      schools: [
        {
          school: '香港中文大学(深圳)',
          major: '能源科学与工程（电气方向）',
          performance: '绩点：3.44/4',
          time: '2025.09-2027.06',
        },
        {
          school: '南京理工大学',
          major: '新能源科学与工程',
          performance: '综合排名：9/56',
          time: '2021.09-2025.06',
        },
      ],
      courses:
        '主修课程：电路理论、电力电子技术、电工学、半导体物理与器件、模拟电子技术、控制工程基础、机器人与智能系统、机器学习、智能电网、电力系统、风力发电系统与控制技术、风力机原理、光伏器件与系统、太阳能工程、储能原理与技术、传热传质学、工程热力学、流体力学',
    },
    experiences: [
      {
        time: '2025.06-2025.08',
        company: '北京北方华创微电子装备有限公司',
        position: '助理电气工程师',
        certificateHref: '/naura-proof.pdf',
        details: [
          '1.物料管理：新物料的申请、发布以及变更物料图纸的修改、检入、发布以及 BOM 的发布。',
          '2.电气开发：基于 SWE 完成电缆图、配线图的核对修正；基于中望 CAD 对图纸进行校对修正。',
          '3.洁净间机台测试：Safety Check 测试—协助制造人员完成设备出厂前的安全测试，确保设备故障预警功能正常；万用表等仪器—对清洗机腔室电机 Driver Converter 的输入输出电压进行测试，累计进行 300+次。SOP 编写—阅读限温器等产品说明书，编写符合设备要求的 SOP 文件，协助产品的软件配置。',
        ],
      },
    ],
    projects: [
      {
        slug: 'dexhand',
        heading:
          '2026.02-2026.06（硕士） DexHand 灵巧手样机制作与控制测试 核心成员',
        details: [
          '1.内容：完成 DexHand 灵巧手实物制作与装配，具体包括完成物料采购、3D 打印、机械结构优化、装配等。',
          '基于 Linux/ROS2 搭建仿真验证环境，完成 DexHand 灵巧手启动、RViz 可视化及基础关节运动测试；',
          '基于 Arduino Nano RP2040 Connect 开发板搭建多舵机控制系统，完成供电、布线及控制程序开发，实现简单抓握功能；',
        ],
        showcase: {
          media: [
            {
              type: 'image',
              title: '灵巧手样机实物',
              src: '/dexhand-prototype.png',
              alt: 'DexHand 灵巧手样机实物',
              fallback: '待上传：public/dexhand-prototype.png',
            },
            {
              type: 'video',
              title: 'Demo 展示',
              src: '/dexhand-demo.mp4',
              fallback: '待上传：public/dexhand-demo.mp4',
            },
          ],
          files: [
            { label: '开题报告', href: '/dexhand-opening-report.pdf' },
            { label: '中期答辩', href: '/dexhand-midterm-defense.pdf' },
            { label: '终期答辩', href: '/dexhand-final-defense.pdf' },
            { label: '最终报告', href: '/dexhand-final-report.pdf' },
          ],
        },
      },
      {
        slug: 'wind-power-forecasting',
        heading:
          '2026.04-至今（硕士） 基于深度学习时间序列模型的风电长时出力预测 核心成员',
        details: [
          '1.内容：基于 ERA5 气象数据开展风电出力相关性分析，筛选关键气象特征；结合 TiDE 构建长时间序列预测模型，实现长时风电出力预测及持续低出力事件识别。',
        ],
      },
      {
        slug: 'energy-storage-optimization',
        heading:
          '2025.09-至今（硕士） 高比例风光电力系统多时间尺度储能优化配置与调度研究 负责人',
        details: [
          '1.内容：构建显式保留极端事件的代表时段聚类方法，用于降低长期规划模型计算规模；建立含电池储能、短期储氢与长期储氢的多时间尺度级联储能规划模型；基于机会约束刻画季节性能量失衡风险，并在 Garver 6-bus 与 HRP-38 系统上开展案例验证；使用 MATLAB / YALMIP / CPLEX 完成模型构建与仿真分析。',
        ],
      },
      {
        slug: 'wind-turbine-blades',
        heading:
          '2025.01-2025.06（本科） 结构变形对风力机超长柔性叶片气动弹性影响分析 负责人',
        details: [
          '1.内容：本课题首先基于 OpenFAST 多物理场开源平台对风力机叶片建模以及对其可靠性进行仿真验证，之后系统研究了 5MW、10MW、22MW 三种基于 FFA-W3、不同展长的风力机柔性叶片在额定风速下的动态变形，最后基于 IEA-22-280-RWT 风力机研究超长柔性叶片的动态变形对叶片气动性能及风力机整体性能的影响。',
        ],
      },
    ],
    skills: [
      '英语水平：已通过 CET4&CET6；雅思 6.5 分（2025.04）。',
      '编程水平：掌握 Python、C++基本语法，可基于 VS Code + Codex / Claude 进行 Vibe Coding，熟悉 GPT / Gemini 等 AI 工具；',
      '专业软件：熟悉 MATLAB / Python 电力系统建模；SW、SWE、中望 CAD 等建模以及电气绘图；Fluent、OpenFAST 流体仿真',
    ],
    other:
      '南京理工大学校级奖学金 4 次；“社会活动积极分子”称号等。',
    updatedAt: '更新时间：2026.05.16',
    footer: '© 2026 刘广天。保留所有权利。',
  },
  en: {
    languageButton: '中文',
    projectDetailButton: 'Project Details',
    projectIntroTitle: 'Project Introduction',
    backToProjects: 'Back to Projects',
    certificateButton: 'Internship Certificate',
    fileAreaTitle: 'Files',
    name: 'Guangtian Liu',
    role: "Master's Graduate, Class of 2027",
    phone: 'Phone: 18832060103',
    phoneHref: 'tel:+8618832060103',
    email: 'Email: 18832060103@163.com',
    nav: [
      { id: 'home', label: 'Home' },
      { id: 'education', label: 'Education' },
      { id: 'experience', label: 'Experience' },
      { id: 'projects', label: 'Projects' },
      { id: 'skills', label: 'Skills' },
      { id: 'other', label: 'Honors' },
    ],
    sections: {
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
      other: 'Honors',
    },
    education: {
      schools: [
        {
          school: 'The Chinese University of Hong Kong, Shenzhen',
          major: 'Energy Science and Engineering (Electrical Track)',
          performance: 'GPA: 3.44/4',
          time: '2025.09-2027.06',
        },
        {
          school: 'Nanjing University of Science and Technology',
          major: 'New Energy Science and Engineering',
          performance: 'Overall Ranking: 9/56',
          time: '2021.09-2025.06',
        },
      ],
      courses:
        'Major Courses: Circuit Theory, Power Electronics, Electrical Engineering, Semiconductor Physics and Devices, Analog Electronics, Fundamentals of Control Engineering, Robotics and Intelligent Systems, Machine Learning, Smart Grid, Power Systems, Wind Power Generation Systems and Control Technology, Principles of Wind Turbines, Photovoltaic Devices and Systems, Solar Energy Engineering, Energy Storage Principles and Technology, Heat and Mass Transfer, Engineering Thermodynamics, Fluid Mechanics',
    },
    experiences: [
      {
        time: '2025.06-2025.08',
        company: 'Beijing NAURA Microelectronics Equipment Co., Ltd.',
        position: 'Assistant Electrical Engineer',
        certificateHref: '/naura-proof.pdf',
        details: [
          '1. Material management: applied for and released new materials; revised, checked in, and released changed material drawings; released BOMs.',
          '2. Electrical development: checked and corrected cable diagrams and wiring diagrams based on SWE; checked and corrected drawings based on ZWCAD.',
          '3. Cleanroom equipment testing: Safety Check test - assisted manufacturing staff with pre-shipment equipment safety tests to ensure normal fault warning functions; instruments such as multimeters - tested input and output voltages of the Driver Converter for cleaning machine chamber motors, 300+ times in total. SOP writing - read product manuals such as temperature limiters, wrote SOP files meeting equipment requirements, and assisted product software configuration.',
        ],
      },
    ],
    projects: [
      {
        slug: 'dexhand',
        heading:
          '2026.02-2026.06 (Master) DexHand Dexterous Hand Prototype Fabrication and Control Testing Core Member',
        details: [
          '1. Content: completed DexHand dexterous hand physical fabrication and assembly, including material procurement, 3D printing, mechanical structure optimization, and assembly.',
          'Built a simulation verification environment based on Linux/ROS2, and completed DexHand startup, RViz visualization, and basic joint motion tests;',
          'Built a multi-servo control system based on the Arduino Nano RP2040 Connect development board, completed power supply, wiring, and control program development, and implemented a simple grasping function;',
        ],
        showcase: {
          media: [
            {
              type: 'image',
              title: 'Prototype',
              src: '/dexhand-prototype.png',
              alt: 'DexHand prototype',
              fallback: 'Upload: public/dexhand-prototype.png',
            },
            {
              type: 'video',
              title: 'Demo',
              src: '/dexhand-demo.mp4',
              fallback: 'Upload: public/dexhand-demo.mp4',
            },
          ],
          files: [
            { label: 'Proposal', href: '/dexhand-opening-report.pdf' },
            { label: 'Midterm Defense', href: '/dexhand-midterm-defense.pdf' },
            { label: 'Final Defense', href: '/dexhand-final-defense.pdf' },
            { label: 'Final Report', href: '/dexhand-final-report.pdf' },
          ],
        },
      },
      {
        slug: 'wind-power-forecasting',
        heading:
          '2026.04-Present (Master) Long-Term Wind Power Output Forecasting Based on Deep Learning Time-Series Models Core Member',
        details: [
          '1. Content: conducted wind power output correlation analysis based on ERA5 meteorological data and selected key meteorological features; combined TiDE to build a long time-series forecasting model, achieving long-term wind power output forecasting and continuous low-output event identification.',
        ],
      },
      {
        slug: 'energy-storage-optimization',
        heading:
          '2025.09-Present (Master) Multi-Time-Scale Energy Storage Optimization Configuration and Dispatch for High-Penetration Wind-Solar Power Systems Lead',
        details: [
          '1. Content: built a representative-period clustering method that explicitly retains extreme events to reduce the computational scale of long-term planning models; established a multi-time-scale cascaded energy storage planning model including battery energy storage, short-term hydrogen storage, and long-term hydrogen storage; characterized seasonal energy imbalance risk based on chance constraints, and conducted case validation on Garver 6-bus and HRP-38 systems; used MATLAB / YALMIP / CPLEX for model construction and simulation analysis.',
        ],
      },
      {
        slug: 'wind-turbine-blades',
        heading:
          '2025.01-2025.06 (Undergraduate) Analysis of the Aeroelastic Impact of Structural Deformation on Ultra-Long Flexible Wind Turbine Blades Lead',
        details: [
          '1. Content: this project first modeled wind turbine blades based on the OpenFAST multi-physics open-source platform and verified reliability through simulation; then systematically studied the dynamic deformation at rated wind speed of 5MW, 10MW, and 22MW flexible wind turbine blades based on FFA-W3 with different spans; finally, based on the IEA-22-280-RWT wind turbine, studied the impact of dynamic deformation of ultra-long flexible blades on blade aerodynamic performance and overall wind turbine performance.',
        ],
      },
    ],
    skills: [
      'English: passed CET4&CET6; IELTS 6.5 (2025.04).',
      'Programming: know Python and C++ basic syntax; can perform Vibe Coding based on VS Code + Codex / Claude; familiar with AI tools such as GPT / Gemini;',
      'Professional Software: familiar with MATLAB / Python power system modeling; SW, SWE, ZWCAD modeling and electrical drawing; Fluent and OpenFAST fluid simulation',
    ],
    other:
      'Honors and Awards: Nanjing University of Science and Technology university-level scholarship 4 times; title of “Social Activity Activist”, etc.',
    updatedAt: 'Last updated: 2026.05.16',
    footer: '© 2026 Guangtian Liu. All rights reserved.',
  },
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

function ProjectMedia({ item }) {
  const [hasError, setHasError] = useState(false)

  return (
    <article className="card media-card">
      <h2>{item.title}</h2>
      <div className="media-frame">
        {hasError ? (
          <div className="media-placeholder">{item.fallback}</div>
        ) : item.type === 'video' ? (
          <video src={item.src} controls preload="metadata" onError={() => setHasError(true)} />
        ) : (
          <img src={item.src} alt={item.alt} onError={() => setHasError(true)} />
        )}
      </div>
    </article>
  )
}

function ProjectDetail({ labels, project, onBack }) {
  return (
    <section className="section detail-page">
      <div className="section-inner">
        <button className="back-button" type="button" onClick={onBack}>
          {labels.backToProjects}
        </button>
        <p className="detail-kicker">{labels.projectIntroTitle}</p>
        <article className="card detail-card">
          <h1>{project.heading}</h1>
          <div className="detail-list">
            {project.details.map((detail) => (
              <p key={detail}>{detail}</p>
            ))}
          </div>
        </article>
        {project.showcase ? (
          <div className="project-detail-sections">
            <div className="detail-media-grid">
              {project.showcase.media.map((item) => (
                <ProjectMedia item={item} key={item.title} />
              ))}
            </div>
            <article className="card file-card">
              <h2>{labels.fileAreaTitle}</h2>
              <div className="file-grid">
                {project.showcase.files.map((file) => (
                  <a className="file-link" href={file.href} target="_blank" rel="noreferrer" key={file.href}>
                    {file.label}
                  </a>
                ))}
              </div>
            </article>
          </div>
        ) : null}
      </div>
    </section>
  )
}

function App() {
  const [language, setLanguage] = useState('zh')
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(null)
  const [photoLoaded, setPhotoLoaded] = useState(true)
  const t = content[language]
  const selectedProject = t.projects.find((project) => project.slug === selectedProjectSlug)

  useEffect(() => {
    if (selectedProjectSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [selectedProjectSlug])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'zh' ? 'en' : 'zh'))
  }

  const goToSection = (event, id) => {
    event.preventDefault()
    setSelectedProjectSlug(null)
    window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', `#${id}`)
    }, 0)
  }

  const openProjectDetail = (slug) => {
    setSelectedProjectSlug(slug)
    window.history.replaceState(null, '', `#project-${slug}`)
  }

  const backToProjects = () => {
    setSelectedProjectSlug(null)
    window.setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
      window.history.replaceState(null, '', '#projects')
    }, 0)
  }

  return (
    <div className="site" lang={language === 'zh' ? 'zh-CN' : 'en'}>
      <header className="topbar">
        <div className="nav-shell">
          <p className="updated-at">{t.updatedAt}</p>
          <button className="language-toggle" type="button" onClick={toggleLanguage}>
            {t.languageButton}
          </button>
          <a className="brand-link" href="#home" onClick={(event) => goToSection(event, 'home')}>
            {t.name}
          </a>
          <nav
            className="main-nav"
            aria-label={language === 'zh' ? '主导航' : 'Main navigation'}
          >
            {t.nav.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={(event) => goToSection(event, item.id)}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        {selectedProject ? (
          <ProjectDetail labels={t} project={selectedProject} onBack={backToProjects} />
        ) : (
          <>
            <section className="hero-section section" id="home">
              <div className="section-inner hero-layout">
                <div className="hero-copy">
                  <h1>{t.name}</h1>
                  <p className="hero-role">{t.role}</p>
                  <div
                    className="hero-links"
                    aria-label={language === 'zh' ? '基础信息' : 'Basic information'}
                  >
                    <a href={t.phoneHref}>{t.phone}</a>
                    <a href="mailto:18832060103@163.com">{t.email}</a>
                  </div>
                </div>
                <div className="profile-panel">
                  {photoLoaded ? (
                    <img
                      className="profile-photo"
                      src="/your-photo.png"
                      alt={language === 'zh' ? `${t.name}照片` : `${t.name} profile`}
                      onError={() => setPhotoLoaded(false)}
                    />
                  ) : (
                    <div className="profile-mark" aria-hidden="true">
                      {language === 'zh' ? '刘' : 'GL'}
                    </div>
                  )}
                </div>
              </div>
            </section>

            <section className="section" id="education">
              <div className="section-inner">
                <SectionTitle>{t.sections.education}</SectionTitle>
                <article className="card education-card">
                  {t.education.schools.map((school) => (
                    <div className="education-row" key={`${school.school}-${school.time}`}>
                      <p className="education-school">{school.school}</p>
                      <p className="education-major">{school.major}</p>
                      <p className="education-performance">{school.performance}</p>
                      <p className="education-time">{school.time}</p>
                    </div>
                  ))}
                </article>
                <div className="courses-panel">
                  <p>{t.education.courses}</p>
                </div>
              </div>
            </section>

            <section className="section section-muted" id="experience">
              <div className="section-inner">
                <SectionTitle>{t.sections.experience}</SectionTitle>
                <div className="experience-list">
                  {t.experiences.map((experience) => (
                    <article className="card highlight-card" key={`${experience.time}-${experience.company}`}>
                      <div className="experience-head">
                        <div className="experience-meta">
                          <span>{experience.time}</span>
                          <span>{experience.company}</span>
                          <span>{experience.position}</span>
                        </div>
                        <a
                          className="action-button secondary-action"
                          href={experience.certificateHref}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {t.certificateButton}
                        </a>
                      </div>
                      <div className="detail-list">
                        {experience.details.map((detail) => (
                          <p key={detail}>{detail}</p>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section" id="projects">
              <div className="section-inner">
                <SectionTitle>{t.sections.projects}</SectionTitle>
                <div className="project-grid">
                  {t.projects.map((project) => (
                    <article className="card project-card" key={project.slug}>
                      <div className="project-content">
                        <h3>{project.heading}</h3>
                        <div className="detail-list">
                          {project.details.map((detail) => (
                            <p key={detail}>{detail}</p>
                          ))}
                        </div>
                      </div>
                      <button
                        className="action-button project-detail-button"
                        type="button"
                        onClick={() => openProjectDetail(project.slug)}
                      >
                        {t.projectDetailButton}
                      </button>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section section-muted" id="skills">
              <div className="section-inner">
                <SectionTitle>{t.sections.skills}</SectionTitle>
                <div className="skills-grid">
                  {t.skills.map((skill) => (
                    <article className="card skill-card" key={skill}>
                      <p>{skill}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section" id="other">
              <div className="section-inner">
                <SectionTitle>{t.sections.other}</SectionTitle>
                <article className="card simple-card">
                  <p>{t.other}</p>
                </article>
              </div>
            </section>

          </>
        )}
      </main>

      <footer className="site-footer">
        <p>{t.footer}</p>
      </footer>
    </div>
  )
}

export default App
