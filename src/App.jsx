import { useEffect, useState } from 'react'
import './App.css'

const publicAsset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`

const content = {
  zh: {
    languageButton: 'EN',
    projectDetailButton: '项目详细',
    projectIntroTitle: '项目介绍',
    backToProjects: '返回项目经历',
    certificateButton: '实习证明',
    mediaAreaTitle: '样机实物',
    reportAreaTitle: '报告材料',
    sourceAreaTitle: '源代码区',
    previewButton: '预览',
    imagePreviewButton: '放大预览',
    openInNewTabButton: '新标签打开',
    closeButton: '关闭',
    downloadPromptTitle: '确认下载',
    downloadPromptText: '即将下载文件：',
    confirmDownloadButton: '确认',
    cancelButton: '取消',
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
          major: '能源科学与工程（AI+电气方向）',
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
        '主修课程：电路理论、电力电子技术、电工学、半导体物理与器件、模拟电子技术、控制工程基础、机器人与智能系统、Python 编程（从入门到实践）、机器学习、深度学习入门（基于 Python 的理论与实现）、智能电网、电力系统、风力发电系统与控制技术、风力机原理、光伏器件与系统、太阳能工程、储能原理与技术、传热传质学、工程热力学、流体力学',
    },
    experiences: [
      {
        time: '2025.06-2025.08',
        company: '北京北方华创微电子装备有限公司',
        position: '电气开发工程师',
        certificateHref: publicAsset('naura-proof.pdf'),
        details: [
          '1.物料管理：新物料的申请、发布以及变更物料图纸的修改、检入、发布以及 BOM 的发布。',
          '2.电气开发：基于 SWE 完成电缆图、配线图的核对修正；基于中望 CAD 对图纸进行校对修正。',
          '3.洁净间机台测试：Safety Check 测试—协助制造人员完成设备出厂前的安全测试，确保设备故障预警功能正常；万用表等仪器—对清洗机腔室电机 Driver Converter 的输入输出电压进行测试，累计进行 300+ 次；SOP 编写—阅读限温器等产品说明书，编写符合设备要求的 SOP 文件，协助产品的软件配置。',
        ],
      },
    ],
    projects: [
      {
        slug: 'dexhand',
        heading:
          '2026.02-2026.06 DexHand 灵巧手样机制作与上位机控制 核心成员',
        details: [
          '1.机械结构优化与样机组装：完成物料采购、结构件 3D 打印、机械结构及零部件优化与最终样机组装。',
          '2.嵌入式控制与上位机开发：基于 ESP32 与 PCA9685 开发多舵机控制程序，通过 I2C 总线控制 PCA9685 输出多路 PWM 信号驱动舵机；基于 PySide6 框架开发上位机控制界面，并通过串口通信完成上位机与下位机的数据交互和舵机动作控制。',
        ],
        showcase: {
          mediaTitle: '灵巧手样机实物',
          media: [
            {
              type: 'image',
              title: '样机实物 01',
              src: publicAsset('dexhand/prototype-01.jpg'),
              alt: 'DexHand 灵巧手样机实物正面',
              fallback: '待上传：public/dexhand/prototype-01.jpg',
            },
            {
              type: 'image',
              title: '样机实物 02',
              src: publicAsset('dexhand/prototype-02.jpg'),
              alt: 'DexHand 灵巧手样机实物侧面',
              fallback: '待上传：public/dexhand/prototype-02.jpg',
            },
            {
              type: 'image',
              title: '样机实物 03',
              src: publicAsset('dexhand/prototype-03.jpg'),
              alt: 'DexHand 灵巧手样机装配细节',
              fallback: '待上传：public/dexhand/prototype-03.jpg',
            },
            {
              type: 'image',
              title: '样机实物 04',
              src: publicAsset('dexhand/prototype-04.jpg'),
              alt: 'DexHand 灵巧手样机抓握测试',
              fallback: '待上传：public/dexhand/prototype-04.jpg',
              fit: 'contain',
              layout: 'wide',
            },
            {
              type: 'image',
              title: '抓握 Demo',
              src: publicAsset('dexhand/prototype-05.jpg'),
              alt: 'DexHand 灵巧手抓握 Demo 图片',
              fallback: '待上传：public/dexhand/prototype-05.jpg',
              fit: 'contain',
              layout: 'wide',
            },
            {
              type: 'image',
              title: '上位机页面',
              src: publicAsset('dexhand/host-computer-page.jpg'),
              alt: 'DexHand 灵巧手上位机页面',
              fallback: '待上传：public/dexhand/host-computer-page.jpg',
              fit: 'contain',
              layout: 'wide',
            },
          ],
          reportsTitle: '报告材料',
          reports: [
            {
              label: '开题报告',
              href: publicAsset('dexhand/reports/Proposal%20Presentation.pdf'),
              meta: 'PDF',
              note: '项目立项、任务拆解与技术路线',
              path: 'public/dexhand/reports/Proposal Presentation.pdf',
            },
            {
              label: '中期答辩',
              href: publicAsset('dexhand/reports/Interim%20Presentation.pdf'),
              meta: 'PDF / PPT',
              note: '中期进度、样机装配与测试记录',
              path: 'public/dexhand/reports/Interim Presentation.pdf',
            },
            {
              label: '终期答辩',
              href: publicAsset('dexhand/reports/Final%20Presentation.pdf'),
              meta: 'PDF / PPT',
              note: '终期展示、控制效果与结果总结',
              path: 'public/dexhand/reports/Final Presentation.pdf',
            },
            {
              label: '最终报告',
              href: publicAsset('dexhand/reports/final-report.pdf'),
              meta: 'PDF',
              note: '完整项目报告与最终归档材料',
              path: 'public/dexhand/reports/final-report.pdf',
            },
          ],
          sourceTitle: '源代码区',
          source: [
            {
              label: '零件文件',
              href: publicAsset('dexhand/source/dexhand-mechanical-build-main.zip'),
              meta: 'CAD / STL / STEP',
              note: '结构零件、3D 打印文件与装配资料',
              path: 'public/dexhand/source/dexhand-mechanical-build-main.zip',
            },
            {
              label: '控制程序 & 上位机',
              href: publicAsset('dexhand/source/Dexhand.zip'),
              meta: 'Host App',
              note: '控制程序、上位机界面、通信调试与数据交互程序',
              path: 'public/dexhand/source/Dexhand.zip',
            },
          ],
        },
      },
      {
        slug: 'wind-power-forecasting',
        heading:
          '2026.04-至今 基于深度学习的风电长时出力预测模型研究 负责人',
        details: [
          '1.基于 ERA5 气象数据与风电场历史出力数据，完成数据清洗、时间对齐、相关性分析与关键气象特征筛选，构建持续低出力事件识别判据；',
          '2.基于小时级风电数据集，复现并训练 LSTM、TiDE、TimeXer 等时序预测模型，完成滑动窗口样本构建、超参数调优及多模型预测性能对比，',
          '3.基于 PyTorch 自主搭建融合历史出力、历史气象与未来气象特征的长时风电预测模型，完成模型训练、误差评估、结果可视化及低出力过程预测分析。',
        ],
      },
      {
        slug: 'energy-storage-optimization',
        heading:
          '2025.09-至今 高比例新能源电力系统多时间尺度储能调度与优化规划 负责人',
        details: [
          '1.针对高比例风光电力系统中持续多日低出力与季节低出力问题，构建大规模混合整数线性规划（MILP）电力系统优化模型。',
          '2.建立电池储能、短期及长期储氢的容量规划-运行调度优化模型，刻画日内、多日与季节尺度的多时间尺度调节能力。',
          '3.基于机会约束和随机优化思想建模新能源出力不确定性，使用 MATLAB / YALMIP / GUROBI 完成算例验证。',
        ],
      },
      {
        slug: 'wind-turbine-blades',
        heading:
          '2025.01-2025.06 结构变形对风力机超长柔性叶片气动弹性影响分析 负责人',
        details: [
          '本课题首先基于 OpenFAST 多物理场开源平台对风力机叶片建模以及对其可靠性进行仿真验证，之后系统研究了 5MW、10MW、22MW 三种基于 FFA-W3、不同展长的风力机柔性叶片在额定风速下的动态变形，最后基于 IEA-22-280-RWT 风力机研究超长柔性叶片的动态变形对叶片气动性能及风力机整体性能的影响。',
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
    updatedAt: '更新时间：2026.05.28',
    footer: '© 2026 刘广天。保留所有权利。',
  },
  en: {
    languageButton: '中文',
    projectDetailButton: 'Project Details',
    projectIntroTitle: 'Project Introduction',
    backToProjects: 'Back to Projects',
    certificateButton: 'Internship Certificate',
    mediaAreaTitle: 'Prototype Photos',
    reportAreaTitle: 'Reports',
    sourceAreaTitle: 'Source Code',
    previewButton: 'Preview',
    imagePreviewButton: 'Zoom',
    openInNewTabButton: 'Open in New Tab',
    closeButton: 'Close',
    downloadPromptTitle: 'Confirm Download',
    downloadPromptText: 'File to download: ',
    confirmDownloadButton: 'Confirm',
    cancelButton: 'Cancel',
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
          major: 'Energy Science and Engineering (AI + Electrical Track)',
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
        'Major Courses: Circuit Theory, Power Electronics, Electrical Engineering, Semiconductor Physics and Devices, Analog Electronics, Fundamentals of Control Engineering, Robotics and Intelligent Systems, Python Programming (from Beginner to Practice), Machine Learning, Introduction to Deep Learning (Python-Based Theory and Implementation), Smart Grid, Power Systems, Wind Power Generation Systems and Control Technology, Principles of Wind Turbines, Photovoltaic Devices and Systems, Solar Energy Engineering, Energy Storage Principles and Technology, Heat and Mass Transfer, Engineering Thermodynamics, Fluid Mechanics',
    },
    experiences: [
      {
        time: '2025.06-2025.08',
        company: 'Beijing NAURA Microelectronics Equipment Co., Ltd.',
        position: 'Electrical Development Engineer',
        certificateHref: publicAsset('naura-proof.pdf'),
        details: [
          '1. Material management: applied for and released new materials; revised, checked in, and released changed material drawings; released BOMs.',
          '2. Electrical development: checked and corrected cable diagrams and wiring diagrams based on SWE; checked and corrected drawings based on ZWCAD.',
          '3. Cleanroom equipment testing: Safety Check tests - assisted manufacturing staff with pre-shipment equipment safety tests to ensure normal fault-warning functions; instruments such as multimeters - tested input and output voltages of the Driver Converter for cleaning machine chamber motors, 300+ times in total; SOP writing - read product manuals such as temperature limiters, wrote SOP files meeting equipment requirements, and assisted product software configuration.',
        ],
      },
    ],
    projects: [
      {
        slug: 'dexhand',
        heading:
          '2026.02-2026.06 DexHand Dexterous Hand Prototype Fabrication and Host-Computer Control Core Member',
        details: [
          '1. Mechanical structure optimization and prototype assembly: completed material procurement, structural part 3D printing, mechanical structure and component optimization, and final prototype assembly.',
          '2. Embedded control and host-computer development: developed a multi-servo control program based on ESP32 and PCA9685, controlled PCA9685 over the I2C bus to output multi-channel PWM signals for servo driving; developed a host-computer control interface with PySide6, and completed data exchange and servo motion control between the host computer and lower controller through serial communication.',
        ],
        showcase: {
          mediaTitle: 'DexHand Prototype Photos',
          media: [
            {
              type: 'image',
              title: 'Prototype 01',
              src: publicAsset('dexhand/prototype-01.jpg'),
              alt: 'DexHand prototype front view',
              fallback: 'Upload: public/dexhand/prototype-01.jpg',
            },
            {
              type: 'image',
              title: 'Prototype 02',
              src: publicAsset('dexhand/prototype-02.jpg'),
              alt: 'DexHand prototype side view',
              fallback: 'Upload: public/dexhand/prototype-02.jpg',
            },
            {
              type: 'image',
              title: 'Prototype 03',
              src: publicAsset('dexhand/prototype-03.jpg'),
              alt: 'DexHand prototype assembly detail',
              fallback: 'Upload: public/dexhand/prototype-03.jpg',
            },
            {
              type: 'image',
              title: 'Prototype 04',
              src: publicAsset('dexhand/prototype-04.jpg'),
              alt: 'DexHand prototype grasping test',
              fallback: 'Upload: public/dexhand/prototype-04.jpg',
              fit: 'contain',
              layout: 'wide',
            },
            {
              type: 'image',
              title: 'Grasp Demo',
              src: publicAsset('dexhand/prototype-05.jpg'),
              alt: 'DexHand grasp demo image',
              fallback: 'Upload: public/dexhand/prototype-05.jpg',
              fit: 'contain',
              layout: 'wide',
            },
            {
              type: 'image',
              title: 'Host Computer Page',
              src: publicAsset('dexhand/host-computer-page.jpg'),
              alt: 'DexHand host computer page',
              fallback: 'Upload: public/dexhand/host-computer-page.jpg',
              fit: 'contain',
              layout: 'wide',
            },
          ],
          reportsTitle: 'Reports',
          reports: [
            {
              label: 'Proposal',
              href: publicAsset('dexhand/reports/Proposal%20Presentation.pdf'),
              meta: 'PDF',
              note: 'Project definition, task breakdown, and technical roadmap',
              path: 'public/dexhand/reports/Proposal Presentation.pdf',
            },
            {
              label: 'Midterm Defense',
              href: publicAsset('dexhand/reports/Interim%20Presentation.pdf'),
              meta: 'PDF / PPT',
              note: 'Midterm progress, prototype assembly, and test records',
              path: 'public/dexhand/reports/Interim Presentation.pdf',
            },
            {
              label: 'Final Defense',
              href: publicAsset('dexhand/reports/Final%20Presentation.pdf'),
              meta: 'PDF / PPT',
              note: 'Final presentation, control results, and summary',
              path: 'public/dexhand/reports/Final Presentation.pdf',
            },
            {
              label: 'Final Report',
              href: publicAsset('dexhand/reports/final-report.pdf'),
              meta: 'PDF',
              note: 'Complete project report and archived deliverables',
              path: 'public/dexhand/reports/final-report.pdf',
            },
          ],
          sourceTitle: 'Source Code',
          source: [
            {
              label: 'Parts',
              href: publicAsset('dexhand/source/dexhand-mechanical-build-main.zip'),
              meta: 'CAD / STL / STEP',
              note: 'Mechanical parts, 3D-printing files, and assembly materials',
              path: 'public/dexhand/source/dexhand-mechanical-build-main.zip',
            },
            {
              label: 'Control Program & Host Computer',
              href: publicAsset('dexhand/source/Dexhand.zip'),
              meta: 'Host App',
              note: 'Control program, host-side UI, communication debugging, and data exchange code',
              path: 'public/dexhand/source/Dexhand.zip',
            },
          ],
        },
      },
      {
        slug: 'wind-power-forecasting',
        heading:
          '2026.04-Present Research on Long-Term Wind Power Output Forecasting Models Based on Deep Learning Lead',
        details: [
          '1. Based on ERA5 meteorological data and wind-farm historical output data, completed data cleaning, time alignment, correlation analysis, and key meteorological feature selection; built criteria for identifying continuous low-output events; reproduced and trained LSTM, TiDE, TimeXer, and other time-series forecasting models on hourly wind-power datasets, completing sliding-window sample construction, hyperparameter tuning, and multi-model performance comparison.',
          '2. Built a long-term wind-power forecasting model in PyTorch that fuses historical output, historical meteorological features, and future meteorological features; completed model training, error evaluation, result visualization, and low-output process forecasting analysis.',
        ],
      },
      {
        slug: 'energy-storage-optimization',
        heading:
          '2025.09-Present Multi-Time-Scale Energy Storage Dispatch and Optimization Planning for High-Penetration Renewable Power Systems Lead',
        details: [
          '1. For high-penetration wind-solar power systems with continuous multi-day low-output and seasonal low-output issues, built a large-scale mixed-integer linear programming (MILP) power-system optimization model.',
          '2. Established a capacity-planning and operation-dispatch optimization model for battery energy storage, short-term hydrogen storage, and long-term hydrogen storage, characterizing multi-time-scale regulation capability across intraday, multi-day, and seasonal scales.',
          '3. Modeled renewable-output uncertainty based on chance constraints and stochastic optimization ideas, and completed case validation using MATLAB / YALMIP / GUROBI.',
        ],
      },
      {
        slug: 'wind-turbine-blades',
        heading:
          '2025.01-2025.06 Analysis of the Aeroelastic Impact of Structural Deformation on Ultra-Long Flexible Wind Turbine Blades Lead',
        details: [
          'This project first modeled wind turbine blades based on the OpenFAST multi-physics open-source platform and verified reliability through simulation; then systematically studied the dynamic deformation at rated wind speed of 5MW, 10MW, and 22MW flexible wind turbine blades based on FFA-W3 with different spans; finally, based on the IEA-22-280-RWT wind turbine, studied the impact of dynamic deformation of ultra-long flexible blades on blade aerodynamic performance and overall wind turbine performance.',
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
    updatedAt: 'Last updated: 2026.05.28',
    footer: '© 2026 Guangtian Liu. All rights reserved.',
  },
}

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

const normalizeProjectHeading = (heading) =>
  heading
    .replace(/（硕士）|（本科）|\(Master\)|\(Undergraduate\)/g, '')
    .replace(/\s+/g, ' ')
    .trim()

const splitProjectHeading = (heading) => {
  const normalized = normalizeProjectHeading(heading)
  const match = normalized.match(/^(\d{4}\.\d{2}\s*-\s*(?:\d{4}\.\d{2}|至今|Present))\s+(.+)$/)

  if (!match) {
    return { title: normalized }
  }

  const [, time, rest] = match
  const roles = ['核心成员', '负责人', 'Core Member', 'Lead']
  const role = roles.find((candidate) => rest === candidate || rest.endsWith(` ${candidate}`))

  if (!role) {
    return { time, title: rest }
  }

  return {
    time,
    title: rest.slice(0, -role.length).trim(),
    role,
  }
}

function EmphasizedText({ text }) {
  const separator = text.includes('：') ? '：' : text.includes(':') ? ':' : ''

  if (!separator) {
    return text
  }

  const [label, ...rest] = text.split(separator)
  const plainLabels = new Set([
    '1.机械结构优化与样机组装',
    '2.嵌入式控制与上位机开发',
    '1. Mechanical structure optimization and prototype assembly',
    '2. Embedded control and host-computer development',
  ])

  if (!rest.length || label.length > 72 || plainLabels.has(label)) {
    return text
  }

  return (
    <>
      <strong>{label}{separator}</strong>
      {rest.join(separator)}
    </>
  )
}
function ProjectHeading({ heading, level = 3 }) {
  const Tag = `h${level}`
  const parts = splitProjectHeading(heading)

  if (!parts.time) {
    return <Tag>{parts.title}</Tag>
  }

  return (
    <Tag className="project-heading">
      <span className="project-heading-time">{parts.time}</span>
      <span className="project-heading-title">{parts.title}</span>
      {parts.role ? <span className="project-heading-role">{parts.role}</span> : null}
    </Tag>
  )
}

function ProjectMedia({ item, labels, onPreview }) {
  const [hasError, setHasError] = useState(false)
  const canPreview = !hasError && item.type !== 'video'
  const mediaClassName = [
    'card',
    'media-card',
    item.fit === 'contain' ? 'media-card-contain' : '',
    item.layout === 'wide' ? 'media-card-wide' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <article className={mediaClassName}>
      <div className="media-card-head">
        <h2>{item.title}</h2>
        {canPreview ? (
          <button className="media-preview-button" type="button" onClick={() => onPreview(item)}>
            {labels.imagePreviewButton}
          </button>
        ) : null}
      </div>
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

function ReportCard({ item, labels, onPreview }) {
  return (
    <article className="card report-card">
      <div>
        <h3>{item.label}</h3>
        <span className="resource-meta">{item.meta}</span>
      </div>
      <button className="inline-action" type="button" onClick={() => onPreview(item)}>
        {labels.previewButton}
      </button>
    </article>
  )
}

function SourceCard({ item, onDownload }) {
  return (
    <button className="card source-card source-card-button" type="button" onClick={() => onDownload(item)}>
      <span className="resource-label">{item.label}</span>
      <span className="resource-meta">{item.meta}</span>
    </button>
  )
}

function ReportSection({ title, items, labels, onPreview }) {
  if (!items?.length) {
    return null
  }

  return (
    <section className="detail-block">
      <div className="detail-block-head">
        <h2>{title}</h2>
      </div>
      <div className="resource-grid resource-grid-reports">
        {items.map((item) => (
          <ReportCard item={item} labels={labels} onPreview={onPreview} key={item.href} />
        ))}
      </div>
    </section>
  )
}

function SourceSection({ title, items, onDownload }) {
  if (!items?.length) {
    return null
  }

  return (
    <section className="detail-block">
      <div className="detail-block-head">
        <h2>{title}</h2>
      </div>
      <div className="resource-grid resource-grid-source">
        {items.map((item) => (
          <SourceCard item={item} onDownload={onDownload} key={item.href} />
        ))}
      </div>
    </section>
  )
}

function ReportPreviewModal({ item, labels, onClose }) {
  if (!item) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal-panel preview-modal"
        role="dialog"
        aria-modal="true"
        aria-label={item.label}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <h2>{item.label}</h2>
          <button className="modal-close" type="button" onClick={onClose}>
            {labels.closeButton}
          </button>
        </div>
        <iframe className="pdf-preview" src={item.href} title={item.label} />
        <div className="modal-actions">
          <a className="inline-action secondary-inline-action" href={item.href} target="_blank" rel="noreferrer">
            {labels.openInNewTabButton}
          </a>
        </div>
      </section>
    </div>
  )
}

function ImagePreviewModal({ item, labels, onClose }) {
  if (!item) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal-panel image-preview-modal"
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <h2>{item.title}</h2>
          <button className="modal-close" type="button" onClick={onClose}>
            {labels.closeButton}
          </button>
        </div>
        <div className="image-preview-frame">
          <img src={item.src} alt={item.alt} />
        </div>
        <div className="modal-actions">
          <a className="inline-action secondary-inline-action" href={item.src} target="_blank" rel="noreferrer">
            {labels.openInNewTabButton}
          </a>
        </div>
      </section>
    </div>
  )
}

function DownloadConfirmModal({ item, labels, onCancel, onConfirm }) {
  if (!item) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onCancel}>
      <section
        className="modal-panel download-modal"
        role="dialog"
        aria-modal="true"
        aria-label={labels.downloadPromptTitle}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <h2>{labels.downloadPromptTitle}</h2>
        </div>
        <p className="download-message">
          {labels.downloadPromptText}
          <strong>{item.label}</strong>
        </p>
        <div className="modal-actions">
          <button className="inline-action secondary-inline-action" type="button" onClick={onCancel}>
            {labels.cancelButton}
          </button>
          <button className="inline-action" type="button" onClick={onConfirm}>
            {labels.confirmDownloadButton}
          </button>
        </div>
      </section>
    </div>
  )
}

function ProjectDetail({ labels, project, onBack }) {
  const [previewReport, setPreviewReport] = useState(null)
  const [previewImage, setPreviewImage] = useState(null)
  const [pendingDownload, setPendingDownload] = useState(null)

  useEffect(() => {
    if (!previewReport && !previewImage && !pendingDownload) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setPreviewReport(null)
        setPreviewImage(null)
        setPendingDownload(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [previewReport, previewImage, pendingDownload])

  const confirmDownload = () => {
    if (!pendingDownload) {
      return
    }

    const link = document.createElement('a')
    link.href = pendingDownload.href
    link.download = ''
    document.body.appendChild(link)
    link.click()
    link.remove()
    setPendingDownload(null)
  }

  return (
    <section className="section detail-page">
      <div className="section-inner">
        <button className="back-button" type="button" onClick={onBack}>
          {labels.backToProjects}
        </button>
        <p className="detail-kicker">{labels.projectIntroTitle}</p>
        <article className="card detail-card">
          <ProjectHeading heading={project.heading} level={1} />
          <div className="detail-list">
            {project.details.map((detail) => (
              <p key={detail}><EmphasizedText text={detail} /></p>
            ))}
          </div>
        </article>
        {project.showcase ? (
          <div className="project-detail-sections">
            <section className="detail-block">
              <div className="detail-block-head">
                <h2>{project.showcase.mediaTitle ?? labels.mediaAreaTitle}</h2>
              </div>
              <div className="detail-media-grid">
                {project.showcase.media.map((item) => (
                  <ProjectMedia item={item} labels={labels} onPreview={setPreviewImage} key={item.title} />
                ))}
              </div>
            </section>
            <ReportSection
              title={project.showcase.reportsTitle ?? labels.reportAreaTitle}
              items={project.showcase.reports ?? project.showcase.files}
              labels={labels}
              onPreview={setPreviewReport}
            />
            <SourceSection
              title={project.showcase.sourceTitle ?? labels.sourceAreaTitle}
              items={project.showcase.source}
              onDownload={setPendingDownload}
            />
          </div>
        ) : null}
      </div>
      <ReportPreviewModal item={previewReport} labels={labels} onClose={() => setPreviewReport(null)} />
      <ImagePreviewModal item={previewImage} labels={labels} onClose={() => setPreviewImage(null)} />
      <DownloadConfirmModal
        item={pendingDownload}
        labels={labels}
        onCancel={() => setPendingDownload(null)}
        onConfirm={confirmDownload}
      />
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
                      src={publicAsset('your-photo.png')}
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
                          <p key={detail}><EmphasizedText text={detail} /></p>
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
                      <div className="project-card-head">
                        <ProjectHeading heading={project.heading} />
                        <button
                          className="action-button secondary-action project-detail-button"
                          type="button"
                          onClick={() => openProjectDetail(project.slug)}
                        >
                          {t.projectDetailButton}
                        </button>
                      </div>
                      <div className="detail-list">
                        {project.details.map((detail) => (
                          <p key={detail}><EmphasizedText text={detail} /></p>
                        ))}
                      </div>
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
                      <p><EmphasizedText text={skill} /></p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="section" id="other">
              <div className="section-inner">
                <SectionTitle>{t.sections.other}</SectionTitle>
                <article className="card simple-card">
                  <p><EmphasizedText text={t.other} /></p>
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
