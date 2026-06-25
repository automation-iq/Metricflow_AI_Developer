import { Grid, Card, CardContent, Typography, Box, Chip } from '@mui/material'
import { historyData } from '../data/mockData'

function History() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'merged':
        return '#3fb950'
      case 'open':
        return '#58a6ff'
      case 'closed':
        return '#f85149'
      case 'blocked':
        return '#d29922'
      default:
        return '#8b949e'
    }
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: '#e6edf3' }}>
        Change History
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Total PRs Created
              </Typography>
              <Typography variant="h4" sx={{ color: '#58a6ff', mt: 1 }}>
                {historyData.totalPRs}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Merged
              </Typography>
              <Typography variant="h4" sx={{ color: '#3fb950', mt: 1 }}>
                {historyData.merged}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Open
              </Typography>
              <Typography variant="h4" sx={{ color: '#58a6ff', mt: 1 }}>
                {historyData.open}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <CardContent>
              <Typography sx={{ color: '#8b949e', fontSize: 14 }}>
                Blocked by Policy
              </Typography>
              <Typography variant="h4" sx={{ color: '#d29922', mt: 1 }}>
                {historyData.blocked}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Recent Pull Requests by Agent P
              </Typography>
              <Box>
                {historyData.prList.map((pr, index) => (
                  <Box
                    key={pr.id}
                    sx={{
                      py: 2,
                      borderBottom: index < historyData.prList.length - 1 ? '1px solid #30363d' : 'none',
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                      <Box>
                        <Typography sx={{ color: '#e6edf3', fontWeight: 500 }}>
                          {pr.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#8b949e', mt: 0.5 }}>
                          Branch: <span style={{ color: '#58a6ff' }}>{pr.branch}</span>
                        </Typography>
                        <Typography variant="caption" sx={{ color: '#8b949e' }}>
                          Created: {pr.created}
                        </Typography>
                      </Box>
                      <Chip
                        label={pr.status.toUpperCase()}
                        size="small"
                        sx={{
                          bgcolor: `${getStatusColor(pr.status)}20`,
                          color: getStatusColor(pr.status),
                          border: `1px solid ${getStatusColor(pr.status)}`,
                          fontWeight: 600,
                        }}
                      />
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

export default History
