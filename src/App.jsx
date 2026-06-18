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
    certificateUnavailableTitle: '实习证明',
    certificateUnavailableText: '暂无实习证明',
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
    ],
    sections: {
      education: '教育背景',
      experience: '实习经历',
      projects: '项目经历',
      skills: '专业技能',
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
        '主修课程：Python 编程、C++、机器学习、深度学习入门、动手学深度学习、电路理论、电力电子技术、电工学、半导体物理与器件、风力发电系统与控制技术、风力机原理、光伏器件与系统、太阳能工程、智能电网、电力系统、控制工程基础、储能原理与技术',
      coreAdvantages: [
        '1.AI+新能源背景：具备风电/光伏、电力系统、电力电子及储能技术基础，熟悉新能源发电与电气控制相关知识。',
        '2.深度学习理论：熟悉 PyTorch 深度学习框架及 NumPy、Pandas 数据处理工具，具备模型开发、训练与时序预测分析经验。',
        '3.优化建模与调度算法：熟练使用 MATLAB / YALMIP / GUROBI 构建并求解 MILP 等优化模型，熟悉随机优化、鲁棒优化与机会约束等不确定性建模方法，具备储能配置、运行调度及电力市场场景下的优化决策建模经验。',
        '4.新能源数字化产品全栈开发：具备新能源数字化产品全栈开发经验，目前正在开发“面向风电场的AI功率预测与风机运行分析平台”。',
      ],
      extras: [
        {
          title: '科研成果',
          lines: [
            '[1] T. Xu, G. Liu, C. Ma, and S. Lei, “Identifying Critical Meteorological Factors for Wind Power Generation under Heatwaves,” manuscript in preparation, 2026.',
            '[2] G. Liu et al., “Multi-Timescale Power System Planning Under Joint Risks of Persistent Renewable Droughts and Seasonal Energy Imbalance,” manuscript in preparation, 2026.',
          ],
        },
        {
          title: '荣誉获奖',
          lines: [
            '南京理工大学校级奖学金 4 次；“社会活动积极分子”称号；“第一届可再生能源大赛优秀奖”等。',
          ],
        },
      ],
    },
    experiences: [
      {
        id: 'megdu',
        time: '2026.04-2026.06',
        company: '上海麦格度储能科技有限公司',
        position: '算法工程师（电力交易）',
        details: [
          '1.深度学习时序预测：基于深度学习时序模型处理负荷、风光出力、电价等时序数据，开展预测模型构建、训练与结果分析。',
          '2.虚拟电厂调度算法：搭建虚拟电厂（VPP）资源聚合模型，参与光伏、储能、充电桩等分布式能源优化调度算法研发。',
          '3.电力市场交易建模：面向现货、辅助服务、需求响应等交易场景，构建报价约束、收益测算与市场出清规则模型，支持售电交易策略优化；协助完成虚拟电厂/售电平台核心算法模块开发、模型测试与技术方案整理，支撑算法工程化落地。',
        ],
      },
      {
        id: 'naura',
        time: '2025.06-2025.08',
        company: '北方华创微电子装备有限公司',
        position: '电气开发工程师',
        certificateHref: publicAsset('naura-proof.pdf'),
        details: [
          '1.PLM 管理：负责清洗机机台物料的 PLM 流程管理，包括物料申请、图纸修改与检入、物料发布、BOM 维护及变更发布。',
          '2.电气开发：参与机台器件选型并使用 SWE / CAD 完成机台电缆图、配线图等原理图的绘制、核对与修正，累计 200+ 个原理图。',
          '3.洁净间测试：Safety Check 测试—协助制造人员完成设备出厂前的安全测试，确保设备故障预警功能正常；万用表等仪器—对清洗机腔室电机 Driver Converter 的输入输出电压进行测试，累计进行 300+ 次。',
        ],
      },
    ],
    projects: [
      {
        slug: 'wind-power-forecasting',
        heading:
          '2026.04-至今 基于深度学习的风电长时出力预测模型研究 核心成员',
        details: [
          '1.项目介绍：为有效预测识别极端风电出力场景，开展风电长时出力预测及持续低出力事件识别研究。',
          '2.项目职责：基于风电场气象数据与风电场历史出力数据，完成关键气象特征筛选，构建持续低出力事件识别判据；复现并训练 TiDE、TimeXer 等时序预测模型，完成超参数调优及多模型预测性能对比。使用 PyTorch 构建融合历史出力、气象与未来气象特征的长时风电预测模型，实现风电长时出力预测性能提升。',
        ],
      },
      {
        slug: 'heatwave-wind-curtailment',
        heading:
          '2026.01-至今 高温热浪下风电出力削减关键气象因子识别研究 核心成员',
        details: [
          '1.项目介绍：基于西班牙十年小时级风电与 ERA5 气象数据，研究热浪下风电削减特征、关键气象因子及区域风险模式。',
          '2.项目职责：负责西班牙小时级风电出力、ERA5 气象变量及装机容量数据处理，完成数据清洗、时间对齐、空间聚合与省级匹配；构建热浪识别与风电削减量化方法，并结合 GMM 聚类、岭回归和 PCA/PCR 分析关键气象因子及响应模式。',
        ],
      },
      {
        slug: 'energy-storage-optimization',
        heading:
          '2025.09-至今 高比例新能源电力系统多时间尺度储能建模与调度 负责人',
        details: [
          '1.项目介绍：高比例风光给新型电力系统带来多时间尺度能量失衡问题，为此构建多时间尺度储能模型以及调度方法。',
          '2.项目职责：针对高比例风光电力系统中持续多日低出力与季节低出力问题，构建大规模混合整数线性规划（MILP）优化模型；建立电池储能、短期/长期储氢的多时间尺度储能数学模型，刻画日内、多日与季节尺度的多时间尺度调节能力。基于机会约束和随机优化思想建模新能源出力不确定性，使用 MATLAB / YALMIP / GUROBI 完成算例验证。',
        ],
      },
      {
        slug: 'dexhand',
        heading:
          '2026.02-2026.06 DexHand 灵巧手样机制作与上位机控制 核心成员',
        details: [
          '1.项目介绍：面向多自由度仿生灵巧手控制需求，搭建五指 DexHand 灵巧手样机及舵机控制系统。',
          '2.项目职责：机械结构优化与样机组装：完成物料采购、结构件 3D 打印、机械结构及零部件优化与最终样机组装。嵌入式控制与上位机开发：自主开发基于 ESP32 与 PCA9685 的 15 路舵机控制程序，实现 I2C 通信下的多路 PWM 输出与舵机驱动；基于 PySide6 开发上位机控制界面，通过串口通信完成指令交互与动作控制。',
          '3.项目成果：灵巧手样机实物；舵机控制程序及上位机；https://liuguangtian.github.io/website/#project-dexhand',
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
        slug: 'wind-turbine-simulation',
        heading:
          '2025.01-2025.06 风力机仿真-结构变形对超长柔性叶片气动弹性影响分析 负责人',
        details: [
          '1.项目介绍：面向风机叶片大型化与柔性化趋势，研究超长柔性叶片在运行过程中的弯曲、扭转变形及其对气动性能和整机性能的影响。',
          '2.项目职责：基于 OpenFAST 多物理场仿真平台完成风力机叶片建模与可靠性验证；对 5MW、10MW、22MW 不同展长柔性叶片在额定风速下的动态变形进行仿真分析；进一步基于 IEA-22-280-RWT 风力机，研究叶片结构变形对气动载荷、功率输出及整机性能的影响。',
          '3.项目成果：完成毕业论文《结构变形对超长柔性风电叶片气动特性的影响研究》。',
        ],
        showcase: {
          reportsTitle: '毕业论文',
          reports: [
            {
              label: '《结构变形对超长柔性风电叶片气动特性的影响研究》',
              href: publicAsset('wind-turbine-simulation/thesis.pdf'),
              meta: 'PDF',
              note: '毕业论文',
              path: 'public/wind-turbine-simulation/thesis.pdf',
            },
          ],
        },
      }
    ],
    skills: [
      '英语水平：已通过 CET4 & CET6；雅思 6.5 分（2025.04）；英语可进行日常交流。',
      '编程水平：掌握 Python、C++；Notepad++、Docker、Git、Conda、Codex、VS Code。',
      '专业软件：熟悉 MATLAB / Python 电力系统建模；SW、SWE、中望 CAD 建模以及电气绘图；Fluent、OpenFAST 流体仿真。',
    ],
    updatedAt: '更新时间：2026.06.05',
    footer: '© 2026 刘广天。保留所有权利。',
  },
  en: {
    languageButton: '中文',
    projectDetailButton: 'Project Details',
    projectIntroTitle: 'Project Introduction',
    backToProjects: 'Back to Projects',
    certificateButton: 'Internship Certificate',
    certificateUnavailableTitle: 'Internship Certificate',
    certificateUnavailableText: 'No internship certificate yet.',
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
    ],
    sections: {
      education: 'Education',
      experience: 'Experience',
      projects: 'Projects',
      skills: 'Skills',
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
        'Major Courses: Python Programming, C++, Machine Learning, Introduction to Deep Learning, Dive into Deep Learning, Circuit Theory, Power Electronics, Electrical Engineering, Semiconductor Physics and Devices, Wind Power Generation Systems and Control Technology, Principles of Wind Turbines, Photovoltaic Devices and Systems, Solar Energy Engineering, Smart Grid, Power Systems, Fundamentals of Control Engineering, Energy Storage Principles and Technology',
      coreAdvantages: [
        '1. AI + renewable energy background: foundation in wind/PV, power systems, power electronics, and energy storage; familiar with renewable generation and electrical control.',
        '2. Deep learning theory: familiar with PyTorch, NumPy, and Pandas; experienced in model development, training, and time-series forecasting analysis.',
        '3. Optimization modeling and dispatch algorithms: skilled in MATLAB / YALMIP / GUROBI for building and solving MILP optimization models; familiar with stochastic optimization, robust optimization, and chance-constrained uncertainty modeling; experienced in energy storage configuration, operational dispatch, and power-market decision modeling.',
        '4. Full-stack development for renewable digital products: experienced in full-stack development for renewable energy digital products; currently developing an AI wind-power forecasting and turbine operation analysis platform for wind farms.',
      ],
      extras: [
        {
          title: 'Research Output',
          lines: [
            '[1] T. Xu, G. Liu, C. Ma, and S. Lei, “Identifying Critical Meteorological Factors for Wind Power Generation under Heatwaves,” manuscript in preparation, 2026.',
            '[2] G. Liu et al., “Multi-Timescale Power System Planning Under Joint Risks of Persistent Renewable Droughts and Seasonal Energy Imbalance,” manuscript in preparation, 2026.',
          ],
        },
        {
          title: 'Honors and Awards',
          lines: [
            'Nanjing University of Science and Technology university-level scholarship 4 times; title of “Social Activity Activist”; First Renewable Energy Competition Excellence Award, etc.',
          ],
        },
      ],
    },
    experiences: [
      {
        id: 'megdu',
        time: '2026.04-2026.06',
        company: 'Shanghai Megdu Energy Storage Technology Co., Ltd.',
        position: 'Algorithm Engineer (Power Trading)',
        details: [
          '1. Deep-learning time-series forecasting: processed load, wind-solar output, electricity prices, and other time-series data using deep-learning models; built, trained, and analyzed forecasting models.',
          '2. Virtual power plant dispatch algorithms: built virtual power plant (VPP) resource aggregation models and participated in optimization dispatch algorithm R&D for distributed resources such as photovoltaics, energy storage, and charging piles.',
          '3. Power market trading modeling: for spot markets, ancillary services, demand response, and other trading scenarios, built quotation constraints, revenue estimation, and market-clearing rule models to support retail electricity trading strategy optimization; assisted development, model testing, and technical documentation for core algorithm modules of virtual power plant and retail electricity platforms.',
        ],
      },
      {
        id: 'naura',
        time: '2025.06-2025.08',
        company: 'NAURA Microelectronics Equipment Co., Ltd.',
        position: 'Electrical Development Engineer',
        certificateHref: publicAsset('naura-proof.pdf'),
        details: [
          '1. PLM management: managed PLM workflows for cleaning equipment materials, including material applications, drawing revisions and check-ins, material releases, BOM maintenance, and change releases.',
          '2. Electrical development: participated in equipment component selection and used SWE / CAD to draw, check, and revise equipment cable diagrams, wiring diagrams, and other schematics, totaling 200+ schematic drawings.',
          '3. Cleanroom testing: Safety Check tests - assisted manufacturing staff with pre-shipment safety tests to ensure normal fault-warning functions; instruments such as multimeters - tested input and output voltages of the Driver Converter for cleaning machine chamber motors, 300+ times in total.',
        ],
      },
    ],
    projects: [
      {
        slug: 'wind-power-forecasting',
        heading:
          '2026.04-Present Long-Term Wind Power Output Forecasting Model Research Based on Deep Learning Core Member',
        details: [
          '1. Project introduction: conducted long-term wind power output forecasting and persistent low-output event identification to better predict and identify extreme wind power output scenarios.',
          '2. Project responsibilities: based on wind-farm meteorological data and historical wind power output data, completed key meteorological feature selection and built criteria for persistent low-output event identification; reproduced and trained TiDE, TimeXer, and other time-series forecasting models, completing hyperparameter tuning and multi-model forecasting performance comparison. Used PyTorch to build a long-term wind power forecasting model integrating historical output, meteorological features, and future meteorological features, improving long-term wind power forecasting performance.',
        ],
      },
      {
        slug: 'heatwave-wind-curtailment',
        heading:
          '2026.01-Present Wind Power Curtailment and Critical Meteorological Factor Identification under Heatwaves Core Member',
        details: [
          '1. Project introduction: based on ten years of hourly wind power data in Spain and ERA5 meteorological data, studied wind power curtailment characteristics, critical meteorological factors, and regional risk patterns under heatwaves.',
          '2. Project responsibilities: processed Spanish hourly wind power output, ERA5 meteorological variables, and installed-capacity data, completing data cleaning, time alignment, spatial aggregation, and province-level matching; built heatwave identification and wind power curtailment quantification methods, and analyzed critical meteorological factors and response patterns using GMM clustering, ridge regression, and PCA/PCR.',
        ],
      },
      {
        slug: 'energy-storage-optimization',
        heading:
          '2025.09-Present Multi-Time-Scale Energy Storage Modeling and Dispatch for High-Penetration Renewable Power Systems Lead',
        details: [
          '1. Project introduction: high-penetration wind and solar power introduce multi-time-scale energy imbalance challenges to new power systems; this project builds multi-time-scale energy storage models and dispatch methods.',
          '2. Project responsibilities: for persistent multi-day low-output and seasonal low-output issues in high-penetration wind-solar power systems, built a large-scale mixed-integer linear programming (MILP) optimization model; established multi-time-scale mathematical models for battery energy storage and short-/long-term hydrogen storage, characterizing regulation capability across intraday, multi-day, and seasonal scales. Modeled renewable-output uncertainty based on chance constraints and stochastic optimization ideas, and completed case validation using MATLAB / YALMIP / GUROBI.',
        ],
      },
      {
        slug: 'dexhand',
        heading:
          '2026.02-2026.06 DexHand Dexterous Hand Prototype Fabrication and Host-Computer Control Core Member',
        details: [
          '1. Project introduction: built a five-finger DexHand prototype and servo control system for multi-DOF bionic dexterous hand control requirements.',
          '2. Project responsibilities: mechanical structure optimization and prototype assembly: completed material procurement, structural part 3D printing, mechanical structure and component optimization, and final prototype assembly. Embedded control and host-computer development: independently developed a 15-channel servo control program based on ESP32 and PCA9685, implemented multi-channel PWM output and servo driving over I2C communication; developed the host-computer control interface with PySide6 and completed command interaction and motion control through serial communication.',
          '3. Project outcomes: DexHand prototype; servo control program and host computer; https://liuguangtian.github.io/website/#project-dexhand',
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
        slug: 'wind-turbine-simulation',
        heading:
          '2025.01-2025.06 Wind Turbine Simulation - Influence of Structural Deformation on the Aeroelastic Performance of Ultra-Long Flexible Blades Lead',
        details: [
          '1. Project introduction: studied bending and torsional deformation of ultra-long flexible blades during operation, and analyzed their influence on aerodynamic performance and overall wind turbine performance under the trend of larger and more flexible wind turbine blades.',
          '2. Project responsibilities: built wind turbine blade models and completed reliability verification based on the OpenFAST multi-physics simulation platform; simulated dynamic deformation of 5MW, 10MW, and 22MW flexible blades with different spans under rated wind speed; further studied the influence of blade structural deformation on aerodynamic loads, power output, and overall turbine performance based on the IEA-22-280-RWT wind turbine.',
          '3. Project outcomes: completed the graduation thesis "Research on the Influence of Structural Deformation on the Aerodynamic Characteristics of Ultra-Long Flexible Wind Turbine Blades".',
        ],
        showcase: {
          reportsTitle: 'Graduation Thesis',
          reports: [
            {
              label:
                'Research on the Influence of Structural Deformation on the Aerodynamic Characteristics of Ultra-Long Flexible Wind Turbine Blades',
              href: publicAsset('wind-turbine-simulation/thesis.pdf'),
              meta: 'PDF',
              note: 'Graduation thesis',
              path: 'public/wind-turbine-simulation/thesis.pdf',
            },
          ],
        },
      }
    ],
    skills: [
      'English: passed CET4 & CET6; IELTS 6.5 (2025.04); able to communicate in daily English.',
      'Programming: Python and C++; Notepad++, Docker, Git, Conda, Codex, VS Code.',
      'Professional Software: MATLAB / Python power system modeling; SW, SWE, ZWCAD modeling and electrical drawing; Fluent and OpenFAST fluid simulation.',
    ],
    updatedAt: 'Last updated: 2026.06.05',
    footer: '© 2026 Guangtian Liu. All rights reserved.',
  },
}

const PROJECT_ORDER_STORAGE_KEY = 'liuguangtian-project-order'
const EXPERIENCE_ORDER_STORAGE_KEY = 'liuguangtian-experience-order'

const getExperienceId = (experience) => experience.id ?? `${experience.time}-${experience.company}`

const normalizeProjectOrder = (order, projects = content.zh.projects) => {
  const knownSlugs = projects.map((project) => project.slug)
  const uniqueKnownOrder = Array.isArray(order)
    ? order.filter((slug, index, array) => knownSlugs.includes(slug) && array.indexOf(slug) === index)
    : []

  return [
    ...uniqueKnownOrder,
    ...knownSlugs.filter((slug) => !uniqueKnownOrder.includes(slug)),
  ]
}

const getStoredProjectOrder = () => {
  if (typeof window === 'undefined') {
    return normalizeProjectOrder()
  }

  try {
    return normalizeProjectOrder(JSON.parse(window.localStorage.getItem(PROJECT_ORDER_STORAGE_KEY)))
  } catch {
    return normalizeProjectOrder()
  }
}

const getOrderedProjects = (projects, order) => {
  const normalizedOrder = normalizeProjectOrder(order, projects)

  return normalizedOrder
    .map((slug) => projects.find((project) => project.slug === slug))
    .filter(Boolean)
}

const normalizeExperienceOrder = (order, experiences = content.zh.experiences) => {
  const knownIds = experiences.map(getExperienceId)
  const uniqueKnownOrder = Array.isArray(order)
    ? order.filter((id, index, array) => knownIds.includes(id) && array.indexOf(id) === index)
    : []

  return [
    ...uniqueKnownOrder,
    ...knownIds.filter((id) => !uniqueKnownOrder.includes(id)),
  ]
}

const getStoredExperienceOrder = () => {
  if (typeof window === 'undefined') {
    return normalizeExperienceOrder()
  }

  try {
    return normalizeExperienceOrder(JSON.parse(window.localStorage.getItem(EXPERIENCE_ORDER_STORAGE_KEY)))
  } catch {
    return normalizeExperienceOrder()
  }
}

const getOrderedExperiences = (experiences, order) => {
  const normalizedOrder = normalizeExperienceOrder(order, experiences)

  return normalizedOrder
    .map((id) => experiences.find((experience) => getExperienceId(experience) === id))
    .filter(Boolean)
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

const getLabeledTextParts = (text) => {
  const separator = text.includes('：') ? '：' : text.includes(':') ? ':' : ''

  if (!separator) {
    return null
  }

  const [label, ...rest] = text.split(separator)

  if (!rest.length || label.length > 72) {
    return null
  }

  return {
    label: label + separator,
    body: rest.join(separator).trimStart(),
  }
}

const getCourseItems = (courses) => {
  const parts = getLabeledTextParts(courses)
  const body = parts?.body ?? courses

  return body
    .split('、')
    .map((course) => course.trim())
    .filter(Boolean)
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
function DetailText({ text }) {
  const parts = getLabeledTextParts(text)

  if (!parts) {
    return <p>{text}</p>
  }

  const plainLabels = new Set([
    '1.机械结构优化与样机组装：',
    '2.嵌入式控制与上位机开发：',
    '1. Mechanical structure optimization and prototype assembly:',
    '2. Embedded control and host-computer development:',
  ])

  if (plainLabels.has(parts.label)) {
    return <p>{text}</p>
  }

  return (
    <p className="detail-row">
      <strong className="detail-label">{parts.label}</strong>
      <span className="detail-copy">{parts.body}</span>
    </p>
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

function ProjectCardHeading({ heading }) {
  const parts = splitProjectHeading(heading)

  if (!parts.time) {
    return <h3 className="project-card-title-only">{parts.title}</h3>
  }

  return (
    <>
      <span className="project-heading-time">{parts.time}</span>
      <h3 className="project-heading-title">{parts.title}</h3>
      {parts.role ? <span className="project-heading-role">{parts.role}</span> : null}
    </>
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


function CertificateNoticeModal({ isOpen, labels, onClose }) {
  if (!isOpen) {
    return null
  }

  return (
    <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
      <section
        className="modal-panel notice-modal"
        role="dialog"
        aria-modal="true"
        aria-label={labels.certificateUnavailableTitle}
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="modal-head">
          <h2>{labels.certificateUnavailableTitle}</h2>
        </div>
        <p className="notice-message">{labels.certificateUnavailableText}</p>
        <div className="modal-actions">
          <button className="inline-action" type="button" onClick={onClose}>
            {labels.closeButton}
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
  const showcaseMedia = project.showcase?.media ?? []

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
              <DetailText text={detail} key={detail} />
            ))}
          </div>
        </article>
        {project.showcase ? (
          <div className="project-detail-sections">
            {showcaseMedia.length ? (
              <section className="detail-block">
                <div className="detail-block-head">
                  <h2>{project.showcase.mediaTitle ?? labels.mediaAreaTitle}</h2>
                </div>
                <div className="detail-media-grid">
                  {showcaseMedia.map((item) => (
                    <ProjectMedia item={item} labels={labels} onPreview={setPreviewImage} key={item.title} />
                  ))}
                </div>
              </section>
            ) : null}
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

const getProjectSlugFromHash = () => {
  if (typeof window === 'undefined') {
    return null
  }

  const prefix = '#project-'

  if (!window.location.hash.startsWith(prefix)) {
    return null
  }

  return decodeURIComponent(window.location.hash.slice(prefix.length))
}

function App() {
  const [language, setLanguage] = useState('zh')
  const [selectedProjectSlug, setSelectedProjectSlug] = useState(() => getProjectSlugFromHash())
  const [photoLoaded, setPhotoLoaded] = useState(true)
  const [certificateNoticeOpen, setCertificateNoticeOpen] = useState(false)
  const [messageText, setMessageText] = useState('')
  const [messageStatus, setMessageStatus] = useState('')
  const [messageSending, setMessageSending] = useState(false)
  const [projectOrder, setProjectOrder] = useState(getStoredProjectOrder)
  const [experienceOrder, setExperienceOrder] = useState(getStoredExperienceOrder)
  const [draggingProjectSlug, setDraggingProjectSlug] = useState(null)
  const [dropTargetProjectSlug, setDropTargetProjectSlug] = useState(null)
  const [draggingExperienceId, setDraggingExperienceId] = useState(null)
  const [dropTargetExperienceId, setDropTargetExperienceId] = useState(null)
  const t = content[language]
  const orderedProjects = getOrderedProjects(t.projects, projectOrder)
  const orderedExperiences = getOrderedExperiences(t.experiences, experienceOrder)
  const selectedProject = t.projects.find((project) => project.slug === selectedProjectSlug)

  useEffect(() => {
    const syncProjectFromHash = () => {
      setSelectedProjectSlug(getProjectSlugFromHash())
    }

    syncProjectFromHash()
    window.addEventListener('hashchange', syncProjectFromHash)
    return () => window.removeEventListener('hashchange', syncProjectFromHash)
  }, [])

  useEffect(() => {
    if (selectedProjectSlug) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [selectedProjectSlug])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(
      PROJECT_ORDER_STORAGE_KEY,
      JSON.stringify(normalizeProjectOrder(projectOrder, t.projects)),
    )
  }, [projectOrder, t.projects])

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    window.localStorage.setItem(
      EXPERIENCE_ORDER_STORAGE_KEY,
      JSON.stringify(normalizeExperienceOrder(experienceOrder, t.experiences)),
    )
  }, [experienceOrder, t.experiences])

  useEffect(() => {
    if (!certificateNoticeOpen) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setCertificateNoticeOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [certificateNoticeOpen])

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'zh' ? 'en' : 'zh'))
  }

  const submitMessage = async () => {
    const normalizedMessage = messageText.trim()

    if (!normalizedMessage) {
      setMessageStatus(language === 'zh' ? '请先输入留言。' : 'Please enter a message first.')
      return
    }

    if (messageSending) {
      return
    }

    setMessageSending(true)
    setMessageStatus(language === 'zh' ? '正在发送...' : 'Sending...')

    try {
      const response = await fetch('https://formsubmit.co/ajax/18832060103@163.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: language === 'zh' ? '个人网站访客' : 'Personal website visitor',
          message: normalizedMessage,
          _subject: language === 'zh' ? '个人网站留言' : 'Message from personal website',
          _template: 'table',
          _captcha: 'false',
        }),
      })

      if (!response.ok) {
        throw new Error('Message request failed')
      }

      setMessageText('')
      setMessageStatus(language === 'zh' ? '留言已发送。' : 'Message sent.')
    } catch {
      setMessageStatus(language === 'zh' ? '发送失败，请稍后再试。' : 'Failed to send. Please try again later.')
    } finally {
      setMessageSending(false)
    }
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


  const moveProject = (sourceSlug, targetSlug) => {
    if (!sourceSlug || !targetSlug || sourceSlug === targetSlug) {
      return
    }

    setProjectOrder((currentOrder) => {
      const normalizedOrder = normalizeProjectOrder(currentOrder, t.projects)
      const sourceIndex = normalizedOrder.indexOf(sourceSlug)
      const targetIndex = normalizedOrder.indexOf(targetSlug)

      if (sourceIndex < 0 || targetIndex < 0) {
        return currentOrder
      }

      const nextOrder = [...normalizedOrder]
      const [movedSlug] = nextOrder.splice(sourceIndex, 1)
      nextOrder.splice(targetIndex, 0, movedSlug)
      return nextOrder
    })
  }

  const handleProjectDragStart = (event, slug) => {
    setDraggingProjectSlug(slug)
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', slug)
  }

  const handleProjectDragOver = (event, slug) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    setDropTargetProjectSlug(slug)
  }

  const handleProjectDrop = (event, slug) => {
    event.preventDefault()
    const sourceSlug = draggingProjectSlug || event.dataTransfer.getData('text/plain')
    moveProject(sourceSlug, slug)
    setDraggingProjectSlug(null)
    setDropTargetProjectSlug(null)
  }

  const handleProjectDragEnd = () => {
    setDraggingProjectSlug(null)
    setDropTargetProjectSlug(null)
  }

  const moveExperience = (sourceId, targetId) => {
    if (!sourceId || !targetId || sourceId === targetId) {
      return
    }

    setExperienceOrder((currentOrder) => {
      const normalizedOrder = normalizeExperienceOrder(currentOrder, t.experiences)
      const sourceIndex = normalizedOrder.indexOf(sourceId)
      const targetIndex = normalizedOrder.indexOf(targetId)

      if (sourceIndex < 0 || targetIndex < 0) {
        return currentOrder
      }

      const nextOrder = [...normalizedOrder]
      const [movedId] = nextOrder.splice(sourceIndex, 1)
      nextOrder.splice(targetIndex, 0, movedId)
      return nextOrder
    })
  }

  const handleExperienceDragStart = (event, id) => {
    setDraggingExperienceId(id)
    event.dataTransfer.effectAllowed = 'move'
    event.dataTransfer.setData('text/plain', id)
  }

  const handleExperienceDragOver = (event, id) => {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
    setDropTargetExperienceId(id)
  }

  const handleExperienceDrop = (event, id) => {
    event.preventDefault()
    const sourceId = draggingExperienceId || event.dataTransfer.getData('text/plain')
    moveExperience(sourceId, id)
    setDraggingExperienceId(null)
    setDropTargetExperienceId(null)
  }

  const handleExperienceDragEnd = () => {
    setDraggingExperienceId(null)
    setDropTargetExperienceId(null)
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
      <header className="site-header">
        <div className="site-header__inner">
          <a className="site-header__brand" href="#home" onClick={(event) => goToSection(event, 'home')}>
            {t.name}
          </a>
          <div className="site-header__right">
            <nav
              className="site-header__nav"
              aria-label={language === 'zh' ? '主导航' : 'Main navigation'}
            >
              {t.nav.map((item) => (
                <a key={item.id} href={`#${item.id}`} onClick={(event) => goToSection(event, item.id)}>
                  {item.label}
                </a>
              ))}
            </nav>
            <p className="site-header__updated">{t.updatedAt}</p>
            <button className="site-header__lang" type="button" onClick={toggleLanguage}>
              {t.languageButton}
            </button>
          </div>
        </div>
      </header>

      <main>
        {selectedProject ? (
          <ProjectDetail labels={t} project={selectedProject} onBack={backToProjects} />
        ) : (
          <>
            <section className="home-section" id="home">
              <div className="hero-section">
                <div className="section-inner hero-layout">
                  <div className="hero-copy">
                    <h1>{t.name}</h1>
                    <p className="hero-role">{t.role}</p>
                  </div>
                </div>
              </div>

              <div className="section home-about-section">
                <div className="section-inner">
                  <SectionTitle>{language === 'zh' ? '基本信息' : 'About Me'}</SectionTitle>
                  <div className="home-about-layout">
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
                    <div className="home-about-copy">
                      <div
                        className="basic-info-list"
                        aria-label={language === 'zh' ? '基础信息' : 'Basic information'}
                      >
                        <p><strong>{language === 'zh' ? '姓名：' : 'Name: '}</strong>{t.name}</p>
                        <p><a href={t.phoneHref}>{t.phone}</a></p>
                        <p><a href="mailto:18832060103@163.com">{t.email}</a></p>
                        <div className="message-box">
                          <p className="message-box-title">{language === 'zh' ? '留言区' : 'Message'}</p>
                          <textarea
                            value={messageText}
                            placeholder={language === 'zh' ? '可以直接留言哦~' : 'Leave a message here'}
                            aria-label={language === 'zh' ? '留言内容' : 'Message content'}
                            onChange={(event) => {
                              setMessageText(event.target.value)
                              setMessageStatus('')
                            }}
                          />
                          <button className="message-submit" type="button" onClick={submitMessage} disabled={messageSending}>
                            {messageSending ? (language === 'zh' ? '发送中' : 'Sending') : (language === 'zh' ? '确认' : 'Send')}
                          </button>
                          {messageStatus ? <p className="message-status">{messageStatus}</p> : null}
                        </div>
                      </div>
                    </div>
                  </div>
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
                <div className="education-showcase">
                  <article className="courses-panel">
                    <h3>{getLabeledTextParts(t.education.courses)?.label.replace(/[：:]$/, '')}</h3>
                    <div className="course-tags">
                      {getCourseItems(t.education.courses).map((course) => (
                        <span className="course-tag" key={course}>{course}</span>
                      ))}
                    </div>
                  </article>
                  <article className="card core-advantages-card">
                    <h3>{language === 'zh' ? '核心优势' : 'Core Strengths'}</h3>
                    <div className="core-advantages-grid">
                      {t.education.coreAdvantages.map((advantage) => (
                        <p className="core-advantage-item" key={advantage}><EmphasizedText text={advantage} /></p>
                      ))}
                    </div>
                  </article>
                  <div className="education-extra-grid">
                    {t.education.extras.map((item) => (
                      <article className="card education-extra-card" key={item.title}>
                        <h3>{item.title}</h3>
                        <ul className="education-line-list">
                          {item.lines.map((line) => (
                            <li key={line}><EmphasizedText text={line} /></li>
                          ))}
                        </ul>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            <section className="section section-muted" id="experience">
              <div className="section-inner">
                <SectionTitle>{t.sections.experience}</SectionTitle>
                <div className="experience-list">
                  {orderedExperiences.map((experience) => {
                    const experienceId = getExperienceId(experience)

                    return (
                      <article
                        className={[
                          'card',
                          'highlight-card',
                          'experience-card',
                          draggingExperienceId === experienceId ? 'is-dragging' : '',
                          dropTargetExperienceId === experienceId && draggingExperienceId !== experienceId
                            ? 'is-drop-target'
                            : '',
                        ].filter(Boolean).join(' ')}
                        key={experienceId}
                        onDragOver={(event) => handleExperienceDragOver(event, experienceId)}
                        onDrop={(event) => handleExperienceDrop(event, experienceId)}
                      >
                        <button
                          className="drag-handle"
                          type="button"
                          draggable
                          aria-label={language === 'zh' ? '拖动实习经历排序' : 'Drag to reorder experience'}
                          title={language === 'zh' ? '拖动排序' : 'Drag to reorder'}
                          onDragStart={(event) => handleExperienceDragStart(event, experienceId)}
                          onDragEnd={handleExperienceDragEnd}
                        >
                          <span aria-hidden="true">⋮⋮</span>
                        </button>
                        <div className="experience-head">
                          <div className="experience-meta">
                            <span>{experience.time}</span>
                            <span>{experience.company}</span>
                            <span>{experience.position}</span>
                          </div>
                          {experience.certificateHref ? (
                            <a
                              className="action-button secondary-action"
                              href={experience.certificateHref}
                              target="_blank"
                              rel="noreferrer"
                            >
                              {t.certificateButton}
                            </a>
                          ) : (
                            <button
                              className="action-button secondary-action"
                              type="button"
                              onClick={() => setCertificateNoticeOpen(true)}
                            >
                              {t.certificateButton}
                            </button>
                          )}
                        </div>
                        <div className="detail-list">
                          {experience.details.map((detail) => (
                            <DetailText text={detail} key={detail} />
                          ))}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </div>
            </section>

            <section className="section" id="projects">
              <div className="section-inner">
                <SectionTitle>{t.sections.projects}</SectionTitle>
                <div className="project-grid">
                  {orderedProjects.map((project) => (
                    <article
                      className={[
                        'card',
                        'project-card',
                        draggingProjectSlug === project.slug ? 'is-dragging' : '',
                        dropTargetProjectSlug === project.slug && draggingProjectSlug !== project.slug
                          ? 'is-drop-target'
                          : '',
                      ].filter(Boolean).join(' ')}
                      key={project.slug}
                      onDragOver={(event) => handleProjectDragOver(event, project.slug)}
                      onDrop={(event) => handleProjectDrop(event, project.slug)}
                    >
                      <button
                        className="drag-handle"
                        type="button"
                        draggable
                        aria-label={language === 'zh' ? '拖动项目经历排序' : 'Drag to reorder project'}
                        title={language === 'zh' ? '拖动排序' : 'Drag to reorder'}
                        onDragStart={(event) => handleProjectDragStart(event, project.slug)}
                        onDragEnd={handleProjectDragEnd}
                      >
                        <span aria-hidden="true">⋮⋮</span>
                      </button>
                      <div className="project-card-head">
                        <ProjectCardHeading heading={project.heading} />
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
                          <DetailText text={detail} key={detail} />
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


          </>
        )}
      </main>

      <footer className="site-footer">
        <p>{t.footer}</p>
      </footer>

      <CertificateNoticeModal
        isOpen={certificateNoticeOpen}
        labels={t}
        onClose={() => setCertificateNoticeOpen(false)}
      />
    </div>
  )
}

export default App
