# Metricflow AI Developer

A modern metrics dashboard application for demonstrating Agent P (Agentic Patches) capabilities.

## Overview

Metricflow AI Developer is a React-based dashboard application that displays development metrics, business analytics, and security notifications. This project is designed to showcase how Agent P automatically manages dependencies, fixes vulnerabilities, and creates pull requests.

## Features

- **Dashboard**: View development metrics including builds, tests, and coverage
- **Reports**: Business metrics with revenue trends and user distribution
- **Alerts**: Security vulnerability tracking and remediation status
- **History**: Pull request tracking with status visibility (open, merged, blocked)
- **Configuration**: Agent P policy settings demonstration
- **Profile**: User activity and account management

## Tech Stack

- **React 19** - UI framework
- **Vite** - Build tool
- **Material UI** - Component library (Dark theme)
- **Recharts** - Chart visualization
- **React Router** - Navigation

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Agent P Configuration

This project includes Agent P configuration for automatic dependency management:

- `agp.yml` - Agent P configuration with policy limits
- `.github/workflows/agp.yml` - GitHub Actions workflow

### Key Policies

- **Max Open PRs**: 5
- **Max PRs Per Run**: 5
- **Cooldown Period**: 7 days

## Included Vulnerabilities (For Demo)

This project intentionally includes outdated/vulnerable packages for demonstration:

| Package | Version | Vulnerability | Severity |
|---------|---------|---------------|----------|
| lodash | 4.17.15 | CVE-2021-23337 | Critical |
| axios | 0.21.1 | CVE-2021-3749 | High |

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components (Dashboard, Reports, etc.)
├── data/           # Mock data for metrics
├── styles/         # Global styles
└── App.jsx         # Main application component
```

## License

MIT
