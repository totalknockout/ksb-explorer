import { KSBItem, KSBDetail } from '../types';

export const apprenticeshipStandard = {
  title: 'Level 4 Data Analyst',
  reference: 'ST0118/AP03',
  level: 4,
};

export const ksbItems: KSBItem[] = [
  // Knowledge (K1-K15)
  {
    id: 'k1',
    code: 'K1',
    type: 'knowledge',
    title: 'Data Legislation',
    description: 'Current relevant legislation and its application to the safe use of data',
  },
  {
    id: 'k2',
    code: 'K2',
    type: 'knowledge',
    title: 'Data Security Standards',
    description: 'Organisational data and information security standards, policies and procedures relevant to data management activities',
  },
  {
    id: 'k3',
    code: 'K3',
    type: 'knowledge',
    title: 'Data Life Cycle',
    description: 'Principles of the data life cycle and the steps involved in carrying out routine data analysis tasks',
  },
  {
    id: 'k4',
    code: 'K4',
    type: 'knowledge',
    title: 'Principles of Data',
    description: 'Principles of data, including open and public data, administrative data, and research data',
  },
  {
    id: 'k5',
    code: 'K5',
    type: 'knowledge',
    title: 'Data Structures',
    description: 'The differences between structured and unstructured data',
  },
  {
    id: 'k6',
    code: 'K6',
    type: 'knowledge',
    title: 'Database Fundamentals',
    description: 'The fundamentals of data structures, database system design, implementation and maintenance',
  },
  {
    id: 'k7',
    code: 'K7',
    type: 'knowledge',
    title: 'User Experience',
    description: 'Principles of user experience and domain context for data analytics',
  },
  {
    id: 'k8',
    code: 'K8',
    type: 'knowledge',
    title: 'Data Quality',
    description: 'Quality risks inherent in data and how to mitigate or resolve these',
  },
  {
    id: 'k9',
    code: 'K9',
    type: 'knowledge',
    title: 'Customer Requirements',
    description: 'Principal approaches to defining customer requirements for data analysis',
  },
  {
    id: 'k10',
    code: 'K10',
    type: 'knowledge',
    title: 'Data Combination',
    description: 'Approaches to combining data from different sources',
  },
  {
    id: 'k11',
    code: 'K11',
    type: 'knowledge',
    title: 'Analysis Tools',
    description: 'Approaches to organisational tools and methods for data analysis',
  },
  {
    id: 'k12',
    code: 'K12',
    type: 'knowledge',
    title: 'Data Architecture',
    description: 'Organisational data architecture',
  },
  {
    id: 'k13',
    code: 'K13',
    type: 'knowledge',
    title: 'Statistical Principles',
    description: 'Principles of statistics for analysing datasets',
  },
  {
    id: 'k14',
    code: 'K14',
    type: 'knowledge',
    title: 'Analytics Types',
    description: 'The principles of descriptive, predictive and prescriptive analytics',
  },
  {
    id: 'k15',
    code: 'K15',
    type: 'knowledge',
    title: 'Data Ethics',
    description: 'The ethical aspects associated with the use and collation of data',
  },
  
  // Skills (S1-S15)
  {
    id: 's1',
    code: 'S1',
    type: 'skill',
    title: 'Secure Data Systems',
    description: 'Use data systems securely to meet requirements and in line with organisational procedures and legislation including principles of Privacy by Design',
  },
  {
    id: 's2',
    code: 'S2',
    type: 'skill',
    title: 'Data Analysis Lifecycle',
    description: 'Implement the stages of the data analysis lifecycle',
  },
  {
    id: 's3',
    code: 'S3',
    type: 'skill',
    title: 'Data Classification',
    description: 'Apply principles of data classification within data analysis activity',
  },
  {
    id: 's4',
    code: 'S4',
    type: 'skill',
    title: 'Dataset Analysis',
    description: 'Analyse data sets taking account of different data structures and database designs',
  },
  {
    id: 's5',
    code: 'S5',
    type: 'skill',
    title: 'User Experience Impact',
    description: 'Assess the impact on user experience and domain context on data analysis activity',
  },
  {
    id: 's6',
    code: 'S6',
    type: 'skill',
    title: 'Quality Risk Management',
    description: 'Identify and escalate quality risks in data analysis with suggested mitigation or resolutions as appropriate',
  },
  {
    id: 's7',
    code: 'S7',
    type: 'skill',
    title: 'Requirements Analysis',
    description: 'Undertake customer requirements analysis and implement findings in data analytics planning and outputs',
  },
  {
    id: 's8',
    code: 'S8',
    type: 'skill',
    title: 'Data Source Identification',
    description: 'Identify data sources and the risks and challenges to combination within data analysis activity',
  },
  {
    id: 's9',
    code: 'S9',
    type: 'skill',
    title: 'Architecture Application',
    description: 'Apply organizational architecture requirements to data analysis activities',
  },
  {
    id: 's10',
    code: 'S10',
    type: 'skill',
    title: 'Statistical Methods',
    description: 'Apply statistical methodologies to data analysis tasks',
  },
  {
    id: 's11',
    code: 'S11',
    type: 'skill',
    title: 'Predictive Analytics',
    description: 'Apply predictive analytics in the collation and use of data',
  },
  {
    id: 's12',
    code: 'S12',
    type: 'skill',
    title: 'Stakeholder Communication',
    description: 'Collaborate and communicate with a range of internal and external stakeholders using appropriate styles and behaviours to suit the audience',
  },
  {
    id: 's13',
    code: 'S13',
    type: 'skill',
    title: 'Analytical Techniques',
    description: 'Use a range of analytical techniques such as data mining, time series forecasting and modelling techniques to identify and predict trends and patterns in data',
  },
  {
    id: 's14',
    code: 'S14',
    type: 'skill',
    title: 'Data Visualization',
    description: 'Collate and interpret qualitative and quantitative data and convert into infographics, reports, tables, dashboards and graphs',
  },
  {
    id: 's15',
    code: 'S15',
    type: 'skill',
    title: 'Tool Selection',
    description: 'Select and apply the most appropriate data tools to achieve the optimum outcome',
  },
  
  // Behaviors (B1-B7)
  {
    id: 'b1',
    code: 'B1',
    type: 'behavior',
    title: 'Professional Environment',
    description: 'Maintain a productive, professional and secure working environment',
  },
  {
    id: 'b2',
    code: 'B2',
    type: 'behavior',
    title: 'Initiative and Resourcefulness',
    description: 'Show initiative, being resourceful when faced with a problem and taking responsibility for solving problems within their own remit',
  },
  {
    id: 'b3',
    code: 'B3',
    type: 'behavior',
    title: 'Independent and Collaborative Work',
    description: 'Work independently and collaboratively',
  },
  {
    id: 'b4',
    code: 'B4',
    type: 'behavior',
    title: 'Logical and Analytical',
    description: 'Logical and analytical',
  },
  {
    id: 'b5',
    code: 'B5',
    type: 'behavior',
    title: 'Problem Solving',
    description: 'Identify issues quickly, investigating and solving complex problems and applying appropriate solutions. Ensures the true root cause of any problem is found and a solution is identified which prevents recurrence.',
  },
  {
    id: 'b6',
    code: 'B6',
    type: 'behavior',
    title: 'Resilience',
    description: 'Resilient - viewing obstacles as challenges and learning from failure.',
  },
  {
    id: 'b7',
    code: 'B7',
    type: 'behavior',
    title: 'Adaptability',
    description: 'Adaptable to changing contexts within the scope of a project, direction of the organisation or Data Analyst role.',
  },
];

export const ksbDetails: Record<string, KSBDetail> = {
  k1: {
    projectIdeas: [
      {
        id: 'p1',
        title: 'Data Protection Compliance Audit',
        description: 'Conduct a comprehensive audit of data handling practices against GDPR, DPA 2018, and other relevant legislation. Document compliance gaps and create action plans.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p2',
        title: 'Privacy by Design Implementation',
        description: 'Implement Privacy by Design principles in a new data analysis project, documenting how privacy considerations are embedded from the start.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p3',
        title: 'Data Rights Request Process',
        description: 'Create a documented process for handling Subject Access Requests (SARs) and other data rights under GDPR.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e1',
        type: 'Policy Documentation',
        description: 'Create or contribute to data compliance documentation',
        examples: [
          'GDPR compliance checklist for data projects',
          'Data retention schedules aligned with legal requirements',
          'Privacy impact assessments (PIAs)',
        ],
      },
      {
        id: 'e2',
        type: 'Case Study',
        description: 'Document real-world application of legislation',
        examples: [
          'How you applied GDPR principles in a project',
          'Data anonymization techniques used to protect privacy',
          'Lawful basis justification for data processing',
        ],
      },
    ],
  },
  k2: {
    projectIdeas: [
      {
        id: 'p4',
        title: 'Security Standards Implementation',
        description: 'Implement organizational security standards for a data pipeline, including access controls, encryption, and audit logging.',
        difficulty: 'Advanced',
        timeEstimate: '4-6 weeks',
      },
      {
        id: 'p5',
        title: 'Data Security Policy Review',
        description: 'Review and update data security policies and procedures, ensuring they align with industry best practices and organizational needs.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p6',
        title: 'Access Control Matrix',
        description: 'Create a role-based access control (RBAC) matrix for data systems, documenting who should access what data and why.',
        difficulty: 'Intermediate',
        timeEstimate: '2 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e3',
        type: 'Security Documentation',
        description: 'Show understanding of security measures',
        examples: [
          'Access control configurations',
          'Data encryption methods applied',
          'Security incident response procedures',
        ],
      },
      {
        id: 'e4',
        type: 'Compliance Evidence',
        description: 'Demonstrate adherence to standards',
        examples: [
          'Security audit trails and logs',
          'Data masking implementations',
          'Secure data transfer protocols used',
        ],
      },
    ],
  },
  k3: {
    projectIdeas: [
      {
        id: 'p7',
        title: 'End-to-End Analysis Process',
        description: 'Document and execute a complete data analysis lifecycle from requirement gathering through to delivery and review.',
        difficulty: 'Intermediate',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p8',
        title: 'Data Lifecycle Automation',
        description: 'Create automated workflows that handle different stages of the data lifecycle (collection, processing, analysis, archival).',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p9',
        title: 'Standard Operating Procedures',
        description: 'Create SOPs for routine data analysis tasks, documenting each stage of the lifecycle.',
        difficulty: 'Beginner',
        timeEstimate: '2 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e5',
        type: 'Process Documentation',
        description: 'Show understanding of lifecycle stages',
        examples: [
          'Data collection to insight workflow diagrams',
          'Quality gates at each lifecycle stage',
          'Handover documentation between stages',
        ],
      },
      {
        id: 'e6',
        type: 'Project Timeline',
        description: 'Map lifecycle to real projects',
        examples: [
          'Project plan showing all lifecycle stages',
          'Stage-gate review documentation',
          'Lessons learned from each phase',
        ],
      },
    ],
  },
  k4: {
    projectIdeas: [
      {
        id: 'p10',
        title: 'Open Data Integration Project',
        description: 'Integrate open government or public datasets with organizational data to provide new insights (e.g., census data, weather data, economic indicators).',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p11',
        title: 'Data Type Comparison Study',
        description: 'Create a comparative analysis of different data types (administrative, research, operational) used in your organization.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
      {
        id: 'p12',
        title: 'Research Data Analysis',
        description: 'Conduct analysis using research data (surveys, experiments) and document methodological considerations specific to this data type.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e7',
        type: 'Data Source Portfolio',
        description: 'Document work with different data types',
        examples: [
          'Open data sources accessed and rationale',
          'Administrative data extraction and use',
          'Research data methodology documentation',
        ],
      },
      {
        id: 'e8',
        type: 'Comparative Analysis',
        description: 'Show understanding of data type differences',
        examples: [
          'Strengths/limitations of different data types',
          'Data quality considerations by type',
          'Appropriate use cases for each data type',
        ],
      },
    ],
  },
  k5: {
    projectIdeas: [
      {
        id: 'p13',
        title: 'Unstructured Data Analysis',
        description: 'Extract insights from unstructured data (text, images, documents) and compare with structured data analysis approaches.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p14',
        title: 'Data Structure Documentation',
        description: 'Create comprehensive documentation of structured vs unstructured data in your organization, with handling recommendations.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
      {
        id: 'p15',
        title: 'Hybrid Data Pipeline',
        description: 'Build a pipeline that processes both structured (databases) and unstructured data (logs, documents) for unified analysis.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e9',
        type: 'Technical Examples',
        description: 'Demonstrate handling both data types',
        examples: [
          'Structured data queries (SQL)',
          'Unstructured data processing (text mining, NLP)',
          'Semi-structured data (JSON, XML) handling',
        ],
      },
      {
        id: 'e10',
        type: 'Methodology Document',
        description: 'Explain approach differences',
        examples: [
          'When to use structured vs unstructured approaches',
          'Tools and techniques for each data type',
          'Performance considerations',
        ],
      },
    ],
  },
  k6: {
    projectIdeas: [
      {
        id: 'p16',
        title: 'Database Design Project',
        description: 'Design and implement a relational database schema for a business need, including normalization and indexing.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p17',
        title: 'Database Optimization',
        description: 'Analyze and optimize existing database structures for performance, documenting improvements made.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p18',
        title: 'Data Model Documentation',
        description: 'Create entity-relationship diagrams (ERDs) and data dictionaries for key organizational databases.',
        difficulty: 'Beginner',
        timeEstimate: '2 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e11',
        type: 'Design Artifacts',
        description: 'Show database design skills',
        examples: [
          'Entity-relationship diagrams',
          'Database schema documentation',
          'Normalization rationale (1NF, 2NF, 3NF)',
        ],
      },
      {
        id: 'e12',
        type: 'Implementation Evidence',
        description: 'Demonstrate practical database work',
        examples: [
          'DDL scripts (CREATE TABLE statements)',
          'Index design and justification',
          'Referential integrity constraints',
        ],
      },
    ],
  },
  k7: {
    projectIdeas: [
      {
        id: 'p19',
        title: 'User-Centered Dashboard Design',
        description: 'Design and build dashboards with user research, personas, and usability testing to ensure they meet user needs.',
        difficulty: 'Intermediate',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p20',
        title: 'Domain Context Analysis',
        description: 'Conduct stakeholder interviews to understand domain context and create analysis outputs tailored to that context.',
        difficulty: 'Intermediate',
        timeEstimate: '3 weeks',
      },
      {
        id: 'p21',
        title: 'Analytics Usability Study',
        description: 'Conduct usability testing on existing analytics outputs and implement improvements based on user feedback.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e13',
        type: 'User Research',
        description: 'Show user-centered approach',
        examples: [
          'User personas for different stakeholder groups',
          'Interview notes and requirements gathering',
          'Usability testing results and iterations',
        ],
      },
      {
        id: 'e14',
        type: 'Design Decisions',
        description: 'Demonstrate context awareness',
        examples: [
          'Domain-specific terminology used',
          'Visualization choices based on user expertise',
          'Context-appropriate level of detail',
        ],
      },
    ],
  },
  k8: {
    projectIdeas: [
      {
        id: 'p22',
        title: 'Data Quality Framework',
        description: 'Develop a data quality framework with dimensions (accuracy, completeness, consistency, timeliness), assessment methods, and remediation processes.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p23',
        title: 'Data Quality Audit',
        description: 'Conduct a data quality audit identifying issues, root causes, and implementing fixes with before/after metrics.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p24',
        title: 'Automated Quality Checks',
        description: 'Implement automated data quality checks that flag issues in real-time or during data pipeline execution.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e15',
        type: 'Quality Assessment',
        description: 'Document quality issues found',
        examples: [
          'Data quality scorecard/metrics',
          'Issue log with severity ratings',
          'Root cause analysis documentation',
        ],
      },
      {
        id: 'e16',
        type: 'Mitigation Strategies',
        description: 'Show problem resolution',
        examples: [
          'Data cleansing scripts and logic',
          'Validation rules implemented',
          'Before/after quality comparisons',
        ],
      },
    ],
  },
  k9: {
    projectIdeas: [
      {
        id: 'p25',
        title: 'Requirements Elicitation Framework',
        description: 'Create a structured framework for gathering and documenting customer requirements for data analysis projects.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p26',
        title: 'Stakeholder Needs Analysis',
        description: 'Conduct stakeholder interviews using various techniques (workshops, surveys, observation) to define requirements for a complex project.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p27',
        title: 'Requirements Documentation',
        description: 'Create comprehensive requirements documents including functional, non-functional, and acceptance criteria.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e17',
        type: 'Requirements Documents',
        description: 'Show requirements gathering work',
        examples: [
          'Business requirements documents (BRDs)',
          'User stories and acceptance criteria',
          'Requirements traceability matrix',
        ],
      },
      {
        id: 'e18',
        type: 'Stakeholder Engagement',
        description: 'Demonstrate customer interaction',
        examples: [
          'Meeting notes and workshop outputs',
          'Requirements validation sessions',
          'Sign-off documentation',
        ],
      },
    ],
  },
  k10: {
    projectIdeas: [
      {
        id: 'p28',
        title: 'Multi-Source Data Integration',
        description: 'Combine data from multiple sources (databases, APIs, files) resolving schema differences, keys, and data quality issues.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p29',
        title: 'Data Fusion Study',
        description: 'Research and document different approaches to data combination (joins, unions, merges) with examples of when to use each.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
      {
        id: 'p30',
        title: 'Master Data Management',
        description: 'Create a master data approach to resolve multiple sources of customer, product, or other key entity data.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e19',
        type: 'Integration Documentation',
        description: 'Show data combination techniques',
        examples: [
          'Data lineage showing multiple sources',
          'Join logic and key matching strategies',
          'Conflict resolution rules',
        ],
      },
      {
        id: 'e20',
        type: 'Technical Implementation',
        description: 'Demonstrate practical integration',
        examples: [
          'ETL/ELT pipeline code',
          'Data mapping documents',
          'Reconciliation and validation checks',
        ],
      },
    ],
  },
  k11: {
    projectIdeas: [
      {
        id: 'p31',
        title: 'Tool Comparison Study',
        description: 'Evaluate different data analysis tools (Excel, Python, R, Power BI, Tableau) for various use cases in your organization.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p32',
        title: 'Analysis Methodology Guide',
        description: 'Create a guide documenting standard analysis methods used in your organization with examples and best practices.',
        difficulty: 'Beginner',
        timeEstimate: '2 weeks',
      },
      {
        id: 'p33',
        title: 'Tool Implementation',
        description: 'Select, implement and train team members on a new analysis tool or method based on organizational needs.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e21',
        type: 'Tool Portfolio',
        description: 'Show proficiency with multiple tools',
        examples: [
          'Excel analysis with advanced formulas/pivots',
          'Python/R scripts for statistical analysis',
          'BI tool dashboards and reports',
        ],
      },
      {
        id: 'e22',
        type: 'Method Selection',
        description: 'Demonstrate appropriate tool/method choice',
        examples: [
          'Decision matrix for tool selection',
          'Use case to tool mapping',
          'Comparative performance analysis',
        ],
      },
    ],
  },
  k12: {
    projectIdeas: [
      {
        id: 'p34',
        title: 'Architecture Documentation',
        description: 'Document your organization\'s data architecture including systems, data flows, and integration points.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p35',
        title: 'Architecture Compliance Review',
        description: 'Review a data project for compliance with organizational data architecture standards and recommend improvements.',
        difficulty: 'Advanced',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p36',
        title: 'System Integration Mapping',
        description: 'Create detailed integration maps showing how different systems in the data architecture connect and exchange data.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e23',
        type: 'Architecture Diagrams',
        description: 'Show understanding of system landscape',
        examples: [
          'High-level architecture diagrams',
          'Data flow diagrams',
          'System integration documentation',
        ],
      },
      {
        id: 'e24',
        type: 'Compliance Evidence',
        description: 'Demonstrate working within architecture',
        examples: [
          'Project design aligned with architecture',
          'Approved architecture patterns used',
          'Integration through established channels',
        ],
      },
    ],
  },
  k13: {
    projectIdeas: [
      {
        id: 'p37',
        title: 'Statistical Analysis Project',
        description: 'Conduct comprehensive statistical analysis including descriptive stats, hypothesis testing, correlation, and regression.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p38',
        title: 'Statistical Methods Guide',
        description: 'Create a guide to statistical methods with when to use each, assumptions, and interpretation examples.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p39',
        title: 'A/B Test Analysis',
        description: 'Design and analyze an A/B test including power analysis, significance testing, and confidence intervals.',
        difficulty: 'Advanced',
        timeEstimate: '3-4 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e25',
        type: 'Statistical Reports',
        description: 'Show application of statistical methods',
        examples: [
          'Hypothesis tests with p-values and interpretation',
          'Regression analysis with model diagnostics',
          'Distribution analysis and visualizations',
        ],
      },
      {
        id: 'e26',
        type: 'Methodology Justification',
        description: 'Explain statistical approach',
        examples: [
          'Test selection rationale',
          'Assumptions checking and validation',
          'Sample size calculations',
        ],
      },
    ],
  },
  k14: {
    projectIdeas: [
      {
        id: 'p40',
        title: 'Analytics Maturity Progression',
        description: 'Implement descriptive, predictive, and prescriptive analytics for the same business problem, showing progression in value.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
      {
        id: 'p41',
        title: 'Predictive Model Development',
        description: 'Build a predictive model (forecasting, classification, clustering) and document the methodology and validation.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p42',
        title: 'Prescriptive Analytics Use Case',
        description: 'Develop prescriptive analytics that recommends actions based on predictive insights (optimization, simulation).',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e27',
        type: 'Analytics Examples',
        description: 'Demonstrate different analytics types',
        examples: [
          'Descriptive: dashboard showing what happened',
          'Predictive: forecast model showing what will happen',
          'Prescriptive: recommendation engine showing what to do',
        ],
      },
      {
        id: 'e28',
        type: 'Technical Documentation',
        description: 'Show advanced analytics work',
        examples: [
          'Model development methodology',
          'Algorithm selection and tuning',
          'Validation and performance metrics',
        ],
      },
    ],
  },
  k15: {
    projectIdeas: [
      {
        id: 'p43',
        title: 'Ethics Framework Development',
        description: 'Develop an ethics framework for data use in your organization, addressing bias, fairness, transparency, and accountability.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p44',
        title: 'Ethical Impact Assessment',
        description: 'Conduct an ethical impact assessment for a data project, identifying and mitigating ethical risks.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p45',
        title: 'Bias Detection and Mitigation',
        description: 'Analyze a dataset or model for bias, document findings, and implement mitigation strategies.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e29',
        type: 'Ethics Documentation',
        description: 'Show consideration of ethical issues',
        examples: [
          'Ethical review checklists used',
          'Bias assessment reports',
          'Fairness metrics and monitoring',
        ],
      },
      {
        id: 'e30',
        type: 'Case Studies',
        description: 'Demonstrate ethical decision-making',
        examples: [
          'Ethical dilemmas faced and resolved',
          'Transparency measures implemented',
          'Stakeholder consent and communication',
        ],
      },
    ],
  },
  s1: {
    projectIdeas: [
      {
        id: 'p46',
        title: 'Secure Data Pipeline Implementation',
        description: 'Build a data pipeline incorporating encryption at rest and in transit, access controls, and audit logging.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p47',
        title: 'Privacy by Design Project',
        description: 'Implement a data project demonstrating Privacy by Design principles at every stage.',
        difficulty: 'Intermediate',
        timeEstimate: '4 weeks',
      },
      {
        id: 'p48',
        title: 'Secure Access Implementation',
        description: 'Implement and document secure access methods (SSO, MFA, RBAC) for data systems.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e31',
        type: 'Security Implementation',
        description: 'Show secure practices',
        examples: [
          'Encryption configurations',
          'Access control lists and permissions',
          'Audit trail examples',
        ],
      },
      {
        id: 'e32',
        type: 'Privacy Documentation',
        description: 'Demonstrate Privacy by Design',
        examples: [
          'Privacy impact assessments',
          'Data minimization strategies applied',
          'Anonymization/pseudonymization techniques',
        ],
      },
    ],
  },
  s2: {
    projectIdeas: [
      {
        id: 'p49',
        title: 'Complete Lifecycle Project',
        description: 'Execute a full data analysis project documenting each lifecycle stage: plan, collect, process, analyze, present, evaluate.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
      {
        id: 'p50',
        title: 'Lifecycle Process Documentation',
        description: 'Create detailed SOPs for each stage of the data analysis lifecycle with templates and checklists.',
        difficulty: 'Beginner',
        timeEstimate: '2 weeks',
      },
      {
        id: 'p51',
        title: 'Iterative Analysis Framework',
        description: 'Implement an iterative analysis approach showing multiple cycles through the lifecycle with refinements.',
        difficulty: 'Intermediate',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e33',
        type: 'Stage Documentation',
        description: 'Show work at each lifecycle stage',
        examples: [
          'Requirements document (plan)',
          'Data collection scripts (collect)',
          'Analysis code and outputs (analyze)',
          'Presentation materials (present)',
        ],
      },
      {
        id: 'e34',
        type: 'Process Evidence',
        description: 'Demonstrate lifecycle understanding',
        examples: [
          'Project timeline mapping to lifecycle',
          'Stage gate reviews completed',
          'Retrospective and lessons learned',
        ],
      },
    ],
  },
  s3: {
    projectIdeas: [
      {
        id: 'p52',
        title: 'Data Classification System',
        description: 'Implement a data classification system (public, internal, confidential, restricted) with handling procedures for each level.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p53',
        title: 'Sensitive Data Identification',
        description: 'Conduct an audit to identify and classify sensitive data (PII, financial, health) across systems.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p54',
        title: 'Classification-Based Controls',
        description: 'Implement security controls appropriate to data classification levels (encryption, access, retention).',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e35',
        type: 'Classification Scheme',
        description: 'Show classification framework',
        examples: [
          'Data classification policy document',
          'Classification decision trees',
          'Labeled datasets and systems',
        ],
      },
      {
        id: 'e36',
        type: 'Applied Classifications',
        description: 'Demonstrate practical application',
        examples: [
          'Data inventory with classifications',
          'Handling procedures by classification',
          'Training materials on classifications',
        ],
      },
    ],
  },
  s4: {
    projectIdeas: [
      {
        id: 'p55',
        title: 'Complex Multi-Table Analysis',
        description: 'Analyze data across multiple related tables using complex joins, understanding database design implications.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p56',
        title: 'Database Structure Optimization',
        description: 'Analyze how database structure affects query performance and recommend optimizations.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p57',
        title: 'Cross-Database Analysis',
        description: 'Conduct analysis combining data from different database types (relational, NoSQL, data warehouse).',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e37',
        type: 'SQL Queries',
        description: 'Show database querying skills',
        examples: [
          'Complex multi-table JOIN queries',
          'Subqueries and CTEs',
          'Window functions and aggregations',
        ],
      },
      {
        id: 'e38',
        type: 'Analysis Documentation',
        description: 'Demonstrate understanding of structures',
        examples: [
          'ERD analysis and interpretation',
          'Query optimization based on structure',
          'Index utilization strategies',
        ],
      },
    ],
  },
  s5: {
    projectIdeas: [
      {
        id: 'p58',
        title: 'User Research for Analytics',
        description: 'Conduct user research (interviews, surveys, observation) to understand how domain context affects analytics needs.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p59',
        title: 'Persona-Based Dashboard Design',
        description: 'Create different dashboard versions for different user personas, tailored to their domain expertise and needs.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p60',
        title: 'Usability Testing Program',
        description: 'Implement usability testing for analytics outputs, iterating based on user feedback.',
        difficulty: 'Intermediate',
        timeEstimate: '4 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e39',
        type: 'User Research',
        description: 'Show user-centered approach',
        examples: [
          'User interview transcripts/summaries',
          'Persona documents with needs analysis',
          'Usability test results and iterations',
        ],
      },
      {
        id: 'e40',
        type: 'Design Adaptations',
        description: 'Demonstrate responsive design',
        examples: [
          'Different outputs for different user types',
          'Domain terminology used appropriately',
          'Complexity level matched to audience',
        ],
      },
    ],
  },
  s6: {
    projectIdeas: [
      {
        id: 'p61',
        title: 'Quality Risk Register',
        description: 'Create and maintain a data quality risk register, identifying risks, impact, mitigation strategies, and owners.',
        difficulty: 'Intermediate',
        timeEstimate: '3 weeks',
      },
      {
        id: 'p62',
        title: 'Escalation Process Implementation',
        description: 'Implement a quality issue escalation process with clear triggers, procedures, and resolution tracking.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p63',
        title: 'Proactive Quality Monitoring',
        description: 'Set up automated monitoring for quality risks with alerts and dashboards for proactive management.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e41',
        type: 'Risk Documentation',
        description: 'Show risk identification',
        examples: [
          'Quality risk assessments',
          'Issue logs with severity ratings',
          'Risk mitigation plans',
        ],
      },
      {
        id: 'e42',
        type: 'Escalation Evidence',
        description: 'Demonstrate appropriate escalation',
        examples: [
          'Escalation emails and communications',
          'Resolution tracking documentation',
          'Post-incident reviews',
        ],
      },
    ],
  },
  s7: {
    projectIdeas: [
      {
        id: 'p64',
        title: 'Requirements Workshop Facilitation',
        description: 'Facilitate requirements workshops with stakeholders, documenting needs and translating to analytics specifications.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p65',
        title: 'Iterative Requirements Development',
        description: 'Use agile approaches to iteratively develop and refine requirements with continuous stakeholder feedback.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p66',
        title: 'Requirements to Delivery Traceability',
        description: 'Create traceability from customer requirements through to delivered analytics outputs.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e43',
        type: 'Requirements Artifacts',
        description: 'Show requirements analysis work',
        examples: [
          'Workshop outputs and notes',
          'Requirements documents with sign-off',
          'User stories and acceptance criteria',
        ],
      },
      {
        id: 'e44',
        type: 'Implementation Evidence',
        description: 'Demonstrate requirements implementation',
        examples: [
          'Requirement to output mapping',
          'UAT and acceptance testing',
          'Feedback incorporation examples',
        ],
      },
    ],
  },
  s8: {
    projectIdeas: [
      {
        id: 'p67',
        title: 'Data Source Assessment',
        description: 'Conduct comprehensive assessment of available data sources, evaluating quality, accessibility, risks, and value.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p68',
        title: 'Data Integration Risk Analysis',
        description: 'Analyze risks of combining specific data sources (schema differences, quality issues, governance) with mitigation plans.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p69',
        title: 'Data Source Catalog',
        description: 'Create a catalog of data sources with metadata, lineage, quality metrics, and usage guidance.',
        difficulty: 'Beginner',
        timeEstimate: '2-3 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e45',
        type: 'Source Documentation',
        description: 'Show data source knowledge',
        examples: [
          'Data source inventory with assessments',
          'Data lineage documentation',
          'Source system characteristics',
        ],
      },
      {
        id: 'e46',
        type: 'Risk Analysis',
        description: 'Demonstrate risk identification',
        examples: [
          'Integration challenge documentation',
          'Data quality comparisons across sources',
          'Mitigation strategies implemented',
        ],
      },
    ],
  },
  s9: {
    projectIdeas: [
      {
        id: 'p70',
        title: 'Architecture-Compliant Pipeline',
        description: 'Build a data pipeline that fully complies with organizational architecture standards and patterns.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p71',
        title: 'Architecture Standards Document',
        description: 'Document how data analysis activities should align with organizational architecture requirements.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p72',
        title: 'Architecture Review Process',
        description: 'Participate in architecture reviews for data projects, providing compliance assessments.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e47',
        type: 'Compliance Documentation',
        description: 'Show architecture alignment',
        examples: [
          'Architecture review approvals',
          'Design documents referencing standards',
          'Approved patterns and components used',
        ],
      },
      {
        id: 'e48',
        type: 'Architecture Artifacts',
        description: 'Demonstrate understanding of architecture',
        examples: [
          'Solution designs within architecture',
          'Integration using approved methods',
          'Technology choices aligned with standards',
        ],
      },
    ],
  },
  s10: {
    projectIdeas: [
      {
        id: 'p73',
        title: 'Statistical Analysis Suite',
        description: 'Conduct analysis using multiple statistical methods: t-tests, ANOVA, chi-square, correlation, regression.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p74',
        title: 'Hypothesis Testing Project',
        description: 'Design and execute hypothesis tests to answer business questions, with proper methodology and interpretation.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p75',
        title: 'Statistical Quality Control',
        description: 'Implement statistical process control (SPC) using control charts and capability analysis.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e49',
        type: 'Statistical Reports',
        description: 'Show statistical analysis work',
        examples: [
          'Test results with interpretations',
          'Regression models with diagnostics',
          'Statistical visualizations',
        ],
      },
      {
        id: 'e50',
        type: 'Methodology Documentation',
        description: 'Demonstrate statistical rigor',
        examples: [
          'Assumptions testing and validation',
          'Sample size justification',
          'Significance level selection rationale',
        ],
      },
    ],
  },
  s11: {
    projectIdeas: [
      {
        id: 'p76',
        title: 'Forecasting Model Development',
        description: 'Build time series forecasting models using techniques like ARIMA, exponential smoothing, or machine learning.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
      {
        id: 'p77',
        title: 'Classification Model',
        description: 'Develop classification models (logistic regression, decision trees, random forest) for business prediction.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p78',
        title: 'Customer Churn Prediction',
        description: 'Build predictive model to identify customers at risk of churning with targeted intervention recommendations.',
        difficulty: 'Advanced',
        timeEstimate: '6-7 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e51',
        type: 'Model Documentation',
        description: 'Show predictive modeling work',
        examples: [
          'Model development methodology',
          'Feature engineering documentation',
          'Model validation and performance metrics',
        ],
      },
      {
        id: 'e52',
        type: 'Predictive Outputs',
        description: 'Demonstrate practical application',
        examples: [
          'Forecast accuracy assessments',
          'Prediction explanations and confidence',
          'Business impact of predictions',
        ],
      },
    ],
  },
  s12: {
    projectIdeas: [
      {
        id: 'p79',
        title: 'Stakeholder Communication Strategy',
        description: 'Develop communication strategy for different stakeholder groups with tailored messaging and delivery methods.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p80',
        title: 'Executive Presentation Series',
        description: 'Create and deliver presentations to executives, translating complex analysis into business insights.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p81',
        title: 'Technical-to-Non-Technical Translation',
        description: 'Create paired documents showing same analysis for technical and non-technical audiences.',
        difficulty: 'Beginner',
        timeEstimate: '2 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e53',
        type: 'Communication Artifacts',
        description: 'Show varied communication styles',
        examples: [
          'Executive summaries (one-pagers)',
          'Technical documentation',
          'Presentation decks for different audiences',
        ],
      },
      {
        id: 'e54',
        type: 'Collaboration Evidence',
        description: 'Demonstrate stakeholder engagement',
        examples: [
          'Meeting notes and action items',
          'Feedback received and incorporated',
          'Cross-functional project collaboration',
        ],
      },
    ],
  },
  s13: {
    projectIdeas: [
      {
        id: 'p82',
        title: 'Data Mining Project',
        description: 'Use data mining techniques (clustering, association rules, anomaly detection) to discover patterns in large datasets.',
        difficulty: 'Advanced',
        timeEstimate: '6-7 weeks',
      },
      {
        id: 'p83',
        title: 'Time Series Analysis',
        description: 'Conduct comprehensive time series analysis including trend, seasonality, and forecasting.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p84',
        title: 'Predictive Modeling',
        description: 'Build and validate predictive models using regression, classification, or clustering techniques.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e55',
        type: 'Technique Portfolio',
        description: 'Show diverse analytical techniques',
        examples: [
          'Clustering analysis with interpretation',
          'Time series decomposition',
          'Predictive model code and outputs',
        ],
      },
      {
        id: 'e56',
        type: 'Insights Documentation',
        description: 'Demonstrate pattern identification',
        examples: [
          'Trends and patterns discovered',
          'Business implications of findings',
          'Recommendations based on patterns',
        ],
      },
    ],
  },
  s14: {
    projectIdeas: [
      {
        id: 'p85',
        title: 'Comprehensive Dashboard Suite',
        description: 'Create interactive dashboards using various visualization types appropriate to different data and insights.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
      {
        id: 'p86',
        title: 'Data Storytelling Report',
        description: 'Create compelling data stories combining qualitative context with quantitative visualizations.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p87',
        title: 'Visualization Best Practices Guide',
        description: 'Create guide for data visualization in your organization with examples of effective infographics and dashboards.',
        difficulty: 'Beginner',
        timeEstimate: '2-3 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e57',
        type: 'Visualization Portfolio',
        description: 'Show visualization skills',
        examples: [
          'Dashboard screenshots with annotations',
          'Infographic examples',
          'Various chart types appropriately used',
        ],
      },
      {
        id: 'e58',
        type: 'Design Rationale',
        description: 'Demonstrate thoughtful design',
        examples: [
          'Chart type selection justification',
          'Color and layout decisions',
          'Accessibility considerations',
        ],
      },
    ],
  },
  s15: {
    projectIdeas: [
      {
        id: 'p88',
        title: 'Tool Selection Framework',
        description: 'Develop decision framework for selecting appropriate tools based on data type, analysis needs, and outcomes.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p89',
        title: 'Tool Comparison Study',
        description: 'Conduct comparative analysis of tools (Excel vs Python, Power BI vs Tableau) for specific use cases.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p90',
        title: 'Multi-Tool Analysis Pipeline',
        description: 'Create analysis pipeline using multiple tools in combination, optimizing for each tool\'s strengths.',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e59',
        type: 'Tool Proficiency',
        description: 'Show competency across tools',
        examples: [
          'Python/R code samples',
          'SQL queries',
          'BI tool dashboards',
          'Excel advanced functions',
        ],
      },
      {
        id: 'e60',
        type: 'Selection Documentation',
        description: 'Demonstrate appropriate tool choice',
        examples: [
          'Tool selection decision matrix',
          'Performance comparisons',
          'Use case to tool mapping',
        ],
      },
    ],
  },
  b1: {
    projectIdeas: [
      {
        id: 'p91',
        title: 'Workspace Standards Implementation',
        description: 'Establish and document professional workspace standards including file organization, version control, and security practices.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
      {
        id: 'p92',
        title: 'Security Audit and Improvement',
        description: 'Conduct security audit of data analysis workspace and implement improvements.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p93',
        title: 'Productivity Enhancement Project',
        description: 'Identify and implement productivity improvements in analysis workflow (automation, templates, tools).',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e61',
        type: 'Professional Practices',
        description: 'Show professional working methods',
        examples: [
          'Organized file and folder structures',
          'Version control usage (Git)',
          'Documentation standards followed',
        ],
      },
      {
        id: 'e62',
        type: 'Security Practices',
        description: 'Demonstrate secure working',
        examples: [
          'Credential management (no hardcoded passwords)',
          'Secure data handling procedures',
          'Clean desk policy adherence',
        ],
      },
    ],
  },
  b2: {
    projectIdeas: [
      {
        id: 'p94',
        title: 'Self-Initiated Analysis Project',
        description: 'Identify a business problem independently, propose solution, and deliver analysis without being asked.',
        difficulty: 'Intermediate',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p95',
        title: 'Problem Resolution Documentation',
        description: 'Document problems encountered in analysis work and solutions developed independently.',
        difficulty: 'Beginner',
        timeEstimate: 'Ongoing',
      },
      {
        id: 'p96',
        title: 'Process Improvement Initiative',
        description: 'Identify inefficiency in data analysis process, develop solution, and implement improvement.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e63',
        type: 'Initiative Examples',
        description: 'Show proactive behavior',
        examples: [
          'Self-initiated projects and outcomes',
          'Problems identified and solved',
          'Improvements suggested and implemented',
        ],
      },
      {
        id: 'e64',
        type: 'Problem-Solving Evidence',
        description: 'Demonstrate resourcefulness',
        examples: [
          'Complex problems solved independently',
          'Creative solutions developed',
          'Research and learning undertaken to solve issues',
        ],
      },
    ],
  },
  b3: {
    projectIdeas: [
      {
        id: 'p97',
        title: 'Independent Analysis Project',
        description: 'Complete an analysis project independently from requirements through to delivery.',
        difficulty: 'Intermediate',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p98',
        title: 'Cross-Team Collaboration',
        description: 'Lead or participate in cross-functional data project requiring collaboration with multiple teams.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
      {
        id: 'p99',
        title: 'Peer Review Program',
        description: 'Participate in peer review program, both reviewing others\' work and receiving feedback.',
        difficulty: 'Beginner',
        timeEstimate: 'Ongoing',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e65',
        type: 'Independent Work',
        description: 'Show autonomous working',
        examples: [
          'Projects completed with minimal supervision',
          'Self-directed learning and development',
          'Independent decision-making examples',
        ],
      },
      {
        id: 'e66',
        type: 'Collaboration Evidence',
        description: 'Demonstrate teamwork',
        examples: [
          'Cross-functional project participation',
          'Knowledge sharing with colleagues',
          'Peer review given and received',
        ],
      },
    ],
  },
  b4: {
    projectIdeas: [
      {
        id: 'p100',
        title: 'Logical Framework Development',
        description: 'Develop logical frameworks for approaching data problems (flowcharts, decision trees, process maps).',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p101',
        title: 'Root Cause Analysis',
        description: 'Conduct systematic root cause analysis using logical methods (5 Whys, fishbone diagrams).',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p102',
        title: 'Analytical Problem Solving',
        description: 'Document analytical approach to complex business problem, showing logical reasoning process.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e67',
        type: 'Logical Reasoning',
        description: 'Show structured thinking',
        examples: [
          'Logic flowcharts and diagrams',
          'Structured problem-solving approaches',
          'Clear reasoning in analysis documentation',
        ],
      },
      {
        id: 'e68',
        type: 'Analytical Process',
        description: 'Demonstrate systematic analysis',
        examples: [
          'Hypothesis development and testing',
          'Elimination of alternative explanations',
          'Evidence-based conclusions',
        ],
      },
    ],
  },
  b5: {
    projectIdeas: [
      {
        id: 'p103',
        title: 'Complex Problem Resolution',
        description: 'Identify and solve complex data quality or analysis problem, documenting root cause and preventive measures.',
        difficulty: 'Advanced',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p104',
        title: 'Issue Investigation Framework',
        description: 'Develop systematic framework for investigating and resolving data issues.',
        difficulty: 'Intermediate',
        timeEstimate: '2-3 weeks',
      },
      {
        id: 'p105',
        title: 'Preventive Solution Implementation',
        description: 'Implement solutions that prevent recurrence of problems (automation, validation, monitoring).',
        difficulty: 'Advanced',
        timeEstimate: '5-6 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e69',
        type: 'Problem Resolution',
        description: 'Show problem-solving capability',
        examples: [
          'Root cause analysis documentation',
          'Complex issues identified and resolved',
          'Preventive measures implemented',
        ],
      },
      {
        id: 'e70',
        type: 'Investigation Process',
        description: 'Demonstrate thorough investigation',
        examples: [
          'Systematic troubleshooting approach',
          'Multiple hypotheses tested',
          'Solution validation and monitoring',
        ],
      },
    ],
  },
  b6: {
    projectIdeas: [
      {
        id: 'p106',
        title: 'Learning from Failure Project',
        description: 'Document a failed or challenging project, analyzing what went wrong and lessons learned.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
      {
        id: 'p107',
        title: 'Obstacle Overcoming Documentation',
        description: 'Document significant obstacles encountered in data work and how they were overcome.',
        difficulty: 'Beginner',
        timeEstimate: 'Ongoing',
      },
      {
        id: 'p108',
        title: 'Challenging Project Completion',
        description: 'Complete a challenging project that requires persistence through setbacks and obstacles.',
        difficulty: 'Advanced',
        timeEstimate: '6-8 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e71',
        type: 'Resilience Examples',
        description: 'Show perseverance through difficulties',
        examples: [
          'Challenges faced and overcome',
          'Setbacks and recovery actions',
          'Persistence in solving difficult problems',
        ],
      },
      {
        id: 'e72',
        type: 'Learning Documentation',
        description: 'Demonstrate learning from failure',
        examples: [
          'Retrospectives and lessons learned',
          'Improvements made after failures',
          'Growth mindset reflections',
        ],
      },
    ],
  },
  b7: {
    projectIdeas: [
      {
        id: 'p109',
        title: 'Changing Requirements Management',
        description: 'Manage project with changing requirements, documenting adaptations and impacts.',
        difficulty: 'Intermediate',
        timeEstimate: '4-5 weeks',
      },
      {
        id: 'p110',
        title: 'New Technology Adoption',
        description: 'Learn and implement a new tool or technology in response to changing organizational needs.',
        difficulty: 'Intermediate',
        timeEstimate: '3-4 weeks',
      },
      {
        id: 'p111',
        title: 'Role Expansion Documentation',
        description: 'Document how your role has evolved and how you\'ve adapted to new responsibilities.',
        difficulty: 'Beginner',
        timeEstimate: '1-2 weeks',
      },
    ],
    evidenceSuggestions: [
      {
        id: 'e73',
        type: 'Adaptability Examples',
        description: 'Show flexibility and adaptation',
        examples: [
          'Projects adapted to changing context',
          'New skills learned in response to needs',
          'Pivot examples when direction changed',
        ],
      },
      {
        id: 'e74',
        type: 'Change Management',
        description: 'Demonstrate handling of change',
        examples: [
          'Agile approach to requirements changes',
          'Learning new tools/methods quickly',
          'Positive attitude toward organizational change',
        ],
      },
    ],
  },
};
