// Development Metrics
export const devMetrics = {
  totalBuilds: 1247,
  successRate: 94,
  avgBuildTime: 127,
  testsPassing: 89,
  coverageByModule: [
    { module: 'API', coverage: 87 },
    { module: 'UI', coverage: 92 },
    { module: 'Core', coverage: 78 },
    { module: 'Auth', coverage: 95 },
    { module: 'Utils', coverage: 84 },
  ],
  recentActivity: [
    { message: 'Build #1247 completed successfully', time: '2 minutes ago' },
    { message: 'Dependency lodash updated to 4.17.21', time: '15 minutes ago' },
    { message: 'Tests passed for PR #89', time: '1 hour ago' },
    { message: 'New vulnerability detected in axios 0.21.1', time: '2 hours ago' },
    { message: 'Build #1246 failed - timeout', time: '3 hours ago' },
  ],
}

export const buildTrends = [
  { day: 'Mon', builds: 42, success: 40 },
  { day: 'Tue', builds: 38, success: 36 },
  { day: 'Wed', builds: 55, success: 52 },
  { day: 'Thu', builds: 47, success: 44 },
  { day: 'Fri', builds: 35, success: 33 },
  { day: 'Sat', builds: 12, success: 12 },
  { day: 'Sun', builds: 8, success: 8 },
]

// Business Metrics
export const businessMetrics = {
  revenue: 847,
  activeUsers: 12847,
  conversionRate: 4.2,
  customerGrowth: 23,
  monthlyRevenue: [
    { month: 'Jan', revenue: 620 },
    { month: 'Feb', revenue: 680 },
    { month: 'Mar', revenue: 720 },
    { month: 'Apr', revenue: 690 },
    { month: 'May', revenue: 780 },
    { month: 'Jun', revenue: 847 },
  ],
  regions: [
    { name: 'North America', revenue: 385 },
    { name: 'Europe', revenue: 247 },
    { name: 'Asia Pacific', revenue: 156 },
    { name: 'Latin America', revenue: 59 },
  ],
}

// Security Metrics
export const securityMetrics = {
  critical: 3,
  high: 7,
  medium: 12,
  low: 24,
  avgRemediationDays: 4.2,
  securityScore: 78,
  vulnerabilities: [
    {
      id: 1,
      package: 'lodash',
      version: '4.17.15',
      cve: 'CVE-2021-23337',
      severity: 'Critical',
      description: 'Prototype pollution vulnerability allows attackers to modify object prototype',
    },
    {
      id: 2,
      package: 'axios',
      version: '0.21.1',
      cve: 'CVE-2021-3749',
      severity: 'High',
      description: 'Server-Side Request Forgery (SSRF) vulnerability in redirect handling',
    },
    {
      id: 3,
      package: 'recharts',
      version: '2.1.5',
      cve: 'CVE-2023-xxxx',
      severity: 'High',
      description: 'Cross-site scripting vulnerability in chart rendering',
    },
    {
      id: 4,
      package: 'follow-redirects',
      version: '1.14.7',
      cve: 'CVE-2022-0155',
      severity: 'Medium',
      description: 'Information exposure through sensitive header leakage',
    },
  ],
}

export const vulnerabilityTrends = [
  { date: 'Jun 1', vulnerabilities: 18, resolved: 12 },
  { date: 'Jun 5', vulnerabilities: 22, resolved: 18 },
  { date: 'Jun 10', vulnerabilities: 15, resolved: 20 },
  { date: 'Jun 15', vulnerabilities: 12, resolved: 14 },
  { date: 'Jun 20', vulnerabilities: 8, resolved: 10 },
  { date: 'Jun 25', vulnerabilities: 5, resolved: 7 },
]

// History Data for PR Tracking
export const historyData = {
  totalPRs: 47,
  merged: 35,
  open: 5,
  closed: 4,
  blocked: 3,
  prList: [
    {
      id: 1,
      title: 'Update lodash from 4.17.15 to 4.17.21',
      branch: 'agp/update-lodash-4.17.21',
      status: 'merged',
      created: 'June 20, 2024',
    },
    {
      id: 2,
      title: 'Update axios from 0.21.1 to 0.27.2',
      branch: 'agp/update-axios-0.27.2',
      status: 'merged',
      created: 'June 18, 2024',
    },
    {
      id: 3,
      title: 'Update recharts from 2.1.5 to 2.15.3',
      branch: 'agp/update-recharts-2.15.3',
      status: 'merged',
      created: 'June 15, 2024',
    },
    {
      id: 4,
      title: 'Update chart.js from 3.7.0 to 4.4.9',
      branch: 'agp/update-chartjs-4.4.9',
      status: 'open',
      created: 'June 22, 2024',
    },
    {
      id: 5,
      title: 'Update @mui/material from 5.10.0 to 6.4.11',
      branch: 'agp/update-mui-material-6.4.11',
      status: 'open',
      created: 'June 23, 2024',
    },
    {
      id: 6,
      title: 'Update date-fns from 2.28.0 to 4.1.0',
      branch: 'agp/update-date-fns-4.1.0',
      status: 'blocked',
      created: 'June 24, 2024',
      reason: 'Maximum open PRs limit reached (5)',
    },
    {
      id: 7,
      title: 'Update react-hook-form from 7.30.0 to 7.56.4',
      branch: 'agp/update-react-hook-form-7.56.4',
      status: 'open',
      created: 'June 24, 2024',
    },
  ],
}
