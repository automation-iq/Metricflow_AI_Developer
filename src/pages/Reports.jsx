import { Grid, Card, CardContent, Typography, Box } from '@mui/material'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import { businessMetrics } from '../data/mockData'

function Reports() {
  const revenueData = businessMetrics.monthlyRevenue
  const userDistribution = [
    { name: 'Enterprise', value: 45 },
    { name: 'SMB', value: 30 },
    { name: 'Startup', value: 25 },
  ]
  const COLORS = ['#58a6ff', '#3fb950', '#f0883e']

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: '#e6edf3' }}>
        Business Metrics Reports
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Monthly Revenue
              </Typography>
              <Typography variant="h4" sx={{ color: '#3fb950', mt: 1 }}>
                ${businessMetrics.revenue}K
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Active Users
              </Typography>
              <Typography variant="h4" sx={{ color: '#58a6ff', mt: 1 }}>
                {businessMetrics.activeUsers.toLocaleString()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Conversion Rate
              </Typography>
              <Typography variant="h4" sx={{ color: '#f0883e', mt: 1 }}>
                {businessMetrics.conversionRate}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Customer Growth
              </Typography>
              <Typography variant="h4" sx={{ color: '#3fb950', mt: 1 }}>
                +{businessMetrics.customerGrowth}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Monthly Revenue Trend
              </Typography>
              <Box sx={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#30363d" />
                    <XAxis dataKey="month" stroke="#8b949e" />
                    <YAxis stroke="#8b949e" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#161b22',
                        border: '1px solid #30363d',
                        borderRadius: '8px',
                      }}
                    />
                    <Bar dataKey="revenue" fill="#58a6ff" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                User Distribution by Plan
              </Typography>
              <Box sx={{ width: '100%', height: 250 }}>
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={userDistribution}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {userDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#161b22',
                        border: '1px solid #30363d',
                        borderRadius: '8px',
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, mt: 1 }}>
                {userDistribution.map((item, index) => (
                  <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                    <Box
                      sx={{
                        width: 12,
                        height: 12,
                        borderRadius: '50%',
                        bgcolor: COLORS[index],
                      }}
                    />
                    <Typography variant="caption" sx={{ color: '#8b949e' }}>
                      {item.name}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Top Regions by Revenue
              </Typography>
              <Box>
                {businessMetrics.regions.map((region, index) => (
                  <Box
                    key={region.name}
                    sx={{
                      py: 1.5,
                      borderBottom: index < businessMetrics.regions.length - 1 ? '1px solid #30363d' : 'none'
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Typography sx={{ color: '#e6edf3' }}>{region.name}</Typography>
                      <Typography sx={{ color: '#3fb950' }}>${region.revenue}K</Typography>
                    </Box>
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

export default Reports
