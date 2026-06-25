# Metricflow AI Developer Documentation

## Demo Scenarios

This application demonstrates Agent P capabilities through four key scenarios:

### Scenario 1: Normal Dependency Update
- Agent P detects outdated library
- Automatically updates to latest version
- Creates PR ready for review
- Status: **PR Open**

### Scenario 2: Security Mode (CVE Fixes)
- Multiple libraries with known vulnerabilities
- Agent P prioritizes and fixes security issues
- Updates lodash (CVE-2021-23337), axios (CVE-2021-3749), recharts
- Status: **PR Open** with security details

### Scenario 3: Blocked by Policy
- Agent P attempts to create 6th PR
- Policy limit: max 5 open PRs
- Request is blocked automatically
- Demonstrates governance control
- Status: **Blocked**

### Scenario 4: PR Lifecycle Complete
- Previously created PR was reviewed
- Approved and merged by team
- Shows full automation cycle
- Status: **Merged**

## Pages Overview

| Page | Purpose | Metrics |
|------|---------|---------|
| Dashboard | Development overview | Builds, tests, coverage |
| Reports | Business analytics | Revenue, users, regions |
| Alerts | Security notifications | CVEs, vulnerabilities |
| History | PR tracking | All PRs with status |
| Configuration | Settings demo | Policy limits |
| Profile | User info | Activity stats |

## Vulnerability Information

### lodash 4.17.15
- **CVE**: CVE-2021-23337
- **Severity**: Critical
- **Type**: Prototype Pollution
- **Fix**: Update to 4.17.21+

### axios 0.21.1
- **CVE**: CVE-2021-3749
- **Severity**: High
- **Type**: SSRF
- **Fix**: Update to 0.27.2+

## Agent P Configuration

The `agp.yml` file configures:
- AI provider (AWS Bedrock)
- Policy limits (5 PRs max)
- Validation commands (build, test)
- PR labels
