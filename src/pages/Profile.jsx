import { Grid, Card, CardContent, Typography, Box, Avatar, Divider, Button } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'

function Profile() {
  const user = {
    name: 'Demo User',
    email: 'demo@metricflow.dev',
    role: 'Administrator',
    organization: 'Metricflow AI Developer',
    joined: 'January 2024',
    lastActive: '2 hours ago',
  }

  const stats = [
    { label: 'PRs Reviewed', value: 47 },
    { label: 'PRs Merged', value: 42 },
    { label: 'Dependencies Updated', value: 128 },
    { label: 'Vulnerabilities Fixed', value: 15 },
  ]

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: '#e6edf3' }}>
        Profile
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent sx={{ textAlign: 'center' }}>
              <Avatar
                sx={{
                  width: 100,
                  height: 100,
                  mx: 'auto',
                  mb: 2,
                  bgcolor: '#21262d',
                  border: '2px solid #58a6ff',
                }}
              >
                <PersonIcon sx={{ fontSize: 50, color: '#58a6ff' }} />
              </Avatar>
              <Typography variant="h5" sx={{ color: '#e6edf3' }}>
                {user.name}
              </Typography>
              <Typography sx={{ color: '#8b949e', mt: 0.5 }}>
                {user.role}
              </Typography>
              <Typography sx={{ color: '#58a6ff', mt: 1 }}>
                {user.organization}
              </Typography>
              <Divider sx={{ my: 2, borderColor: '#30363d' }} />
              <Box sx={{ textAlign: 'left' }}>
                <Typography variant="body2" sx={{ color: '#8b949e', mb: 1 }}>
                  Email: <span style={{ color: '#e6edf3' }}>{user.email}</span>
                </Typography>
                <Typography variant="body2" sx={{ color: '#8b949e', mb: 1 }}>
                  Joined: <span style={{ color: '#e6edf3' }}>{user.joined}</span>
                </Typography>
                <Typography variant="body2" sx={{ color: '#8b949e' }}>
                  Last Active: <span style={{ color: '#3fb950' }}>{user.lastActive}</span>
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 3, color: '#e6edf3' }}>
                Activity Statistics
              </Typography>
              <Grid container spacing={2}>
                {stats.map((stat) => (
                  <Grid item xs={6} sm={3} key={stat.label}>
                    <Box
                      sx={{
                        textAlign: 'center',
                        p: 2,
                        bgcolor: '#0d1117',
                        borderRadius: 1,
                        border: '1px solid #30363d',
                      }}
                    >
                      <Typography variant="h4" sx={{ color: '#58a6ff' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#8b949e', mt: 0.5 }}>
                        {stat.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          <Card sx={{ mt: 3 }}>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Account Settings
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#30363d',
                    color: '#e6edf3',
                    '&:hover': { borderColor: '#58a6ff' },
                  }}
                >
                  Edit Profile
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#30363d',
                    color: '#e6edf3',
                    '&:hover': { borderColor: '#58a6ff' },
                  }}
                >
                  Change Password
                </Button>
                <Button
                  variant="outlined"
                  sx={{
                    borderColor: '#30363d',
                    color: '#e6edf3',
                    '&:hover': { borderColor: '#58a6ff' },
                  }}
                >
                  Notification Preferences
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Profile
