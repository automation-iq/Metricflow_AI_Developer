import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { securityMetrics, vulnerabilityTrends } from '../data/mockData'

function Alerts() {
  const getSeverityColor = (severity) => {
    switch (severity.toLowerCase()) {
      case 'critical':
        return '#f85149'
      case 'high':
        return '#f0883e'
      case 'medium':
        return '#d29922'
      case 'low':
        return '#8b949e'
      default:
        return '#8b949e'
    }
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: '#e6edf3' }}>
        Security Alerts & Notifications
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Critical Vulnerabilities
              </Typography>
              <Typography variant="h4" sx={{ color: '#f85149', mt: 1 }}>
                {securityMetrics.critical}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                High Severity
              </Typography>
              <Typography variant="h4" sx={{ color: '#f0883e', mt: 1 }}>
                {securityMetrics.high}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Avg Remediation Time
              </Typography>
              <Typography variant="h4" sx={{ color: '#3fb950', mt: 1 }}>
                {securityMetrics.avgRemediationDays} days
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Security Score
              </Typography>
              <Typography variant="h4" sx={{ color: '#58a6ff', mt: 1 }}>
                {securityMetrics.securityScore}/100
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Vulnerability Trends (Last 30 Days)
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <LineChart data={vulnerabilityTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                    <XAxis dataKey="date" stroke="#8b949e" />
                    <YAxis stroke="#8b949e" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#161b22',
                        border: '1px solid #30363d',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="vulnerabilities"
                      stroke="#f85149"
                      strokeWidth={2}
                      dot={{ fill: '#f85149' }}
                    />
                    <Line
                      type="monotone"
                      dataKey="resolved"
                      stroke="#3fb950"
                      strokeWidth={2}
                      dot={{ fill: '#3fb950' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Active Vulnerabilities
              </Typography>
              <Box>
                {securityMetrics.vulnerabilities.map((vuln, index) => (
                  <Box
                    key={vuln.id}
                    sx={{
                      py: 2,
                      borderBottom: index < securityMetrics.vulnerabilities.length - 1 ? '1px solid #30363d' : 'none',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <Box>
                      <Typography sx={{ color: '#e6edf3', fontWeight: 500 }}>
                        {vuln.package} - {vuln.cve}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#8b949e', mt: 0.5 }}>
                        {vuln.description}
                      </Typography>
                    </Box>
                    <Chip
                      label={vuln.severity}
                      size="small"
                      sx={{
                        bgcolor: `${getSeverityColor(vuln.severity)}20`,
                        color: getSeverityColor(vuln.severity),
                        border: `1px solid ${getSeverityColor(vuln.severity)}`,
                        fontWeight: 600,
                      }}
                    />
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Alerts
