export interface ApprenticeshipPathway {
  id: string;
  title: string;
  level: number;
  reference: string;
  description: string;
  sector: string;
  duration: string;
}

export const apprenticeshipPathways: ApprenticeshipPathway[] = [
  {
    id: 'data-analyst',
    title: 'Data Analyst',
    level: 4,
    reference: 'ST0118/AP03',
    description: 'Collect, organize and study data to provide business insight. Use data visualization tools and programming languages to analyze trends and patterns.',
    sector: 'Digital',
    duration: '18-24 months',
  },
  {
    id: 'software-developer',
    title: 'Software Developer',
    level: 4,
    reference: 'ST0116/AP03',
    description: 'Build and test high-quality code across front end, back end and logic layers. Work in agile teams to develop software solutions.',
    sector: 'Digital',
    duration: '18-24 months',
  },
  {
    id: 'data-scientist',
    title: 'Data Scientist',
    level: 6,
    reference: 'ST0746/AP01',
    description: 'Apply advanced analytics and machine learning techniques to extract insights from data. Develop predictive models and algorithms.',
    sector: 'Digital',
    duration: '24-36 months',
  },
  {
    id: 'digital-marketer',
    title: 'Digital Marketer',
    level: 3,
    reference: 'ST0827/AP01',
    description: 'Define, design, build and implement digital campaigns across various online and social media platforms.',
    sector: 'Marketing',
    duration: '18 months',
  },
  {
    id: 'project-manager',
    title: 'Project Manager',
    level: 4,
    reference: 'ST0157/AP03',
    description: 'Lead projects and manage resources to deliver business objectives. Plan, organize and control projects from inception to completion.',
    sector: 'Business',
    duration: '18-24 months',
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security Technologist',
    level: 4,
    reference: 'ST0820/AP01',
    description: 'Analyze security requirements and develop security strategies. Implement and maintain security controls and measures.',
    sector: 'Digital',
    duration: '24 months',
  },
];
