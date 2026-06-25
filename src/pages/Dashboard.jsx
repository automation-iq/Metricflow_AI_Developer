import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from 'recharts'
import { devMetrics, buildTrends } from '../data/mockData'

function Dashboard() {
  const stats = [
    { label: 'Total Builds', value: devMetrics.totalBuilds, color: '#58a6ff' },
    { label: 'Success Rate', value: `${devMetrics.successRate}%`, color: '#3fb950' },
    { label: 'Avg Build Time', value: `${devMetrics.avgBuildTime}s`, color: '#f0883e' },
    { label: 'Tests Passing', value: `${devMetrics.testsPassing}%`, color: '#3fb950' },
  ]

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: '#e6edf3' }}>
        Development Metrics Overview
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.label}>
            <Card>
              <CardContent>
                <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                  {stat.label}
                </Typography>
                <Typography variant="h4" sx={{ color: stat.color, mt: 1 }}>
                  {stat.value}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Build Trends (Last 7 Days)
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <AreaChart data={buildTrends}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                    <XAxis dataKey="day" stroke="#8b949e" />
                    <YAxis stroke="#8b949e" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#161b22',
                        border: '1px solid #30363d',
                        borderRadius: '8px',
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="builds"
                      stroke="#58a6ff"
                      fill="#58a6ff"
                      fillOpacity={0.2}
                    />
                    <Area
                      type="monotone"
                      dataKey="success"
                      stroke="#3fb950"
                      fill="#3fb950"
                      fillOpacity={0.2}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Code Coverage by Module
              </Typography>
              <Box sx={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                  <LineChart data={devMetrics.coverageByModule}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                    <XAxis dataKey="module" stroke="#8b949e" />
                    <YAxis stroke="#8b949e" domain={[0, 100]} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#161b22',
                        border: '1px solid #30363d',
                        borderRadius: '8px',
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="coverage"
                      stroke="#d29922"
                      strokeWidth={2}
                      dot={{ fill: '#d29922' }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Recent Activity
              </Typography>
              <Box>
                {devMetrics.recentActivity.map((activity, index) => (
                  <Box
                    key={index}
                    sx={{
                      py: 1.5,
                      borderBottom: index < devMetrics.recentActivity.length - 1 ? '1px solid #30363d' : 'none'
                    }}
                  >
                    <Typography variant="body2" sx={{ color: '#e6edf3' }}>
                      {activity.message}
                    </Typography>
                    <Typography variant="caption" sx={{ color: '#8b949e' }}>
                      {activity.time}
                    </Typography>
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

export default Dashboard
