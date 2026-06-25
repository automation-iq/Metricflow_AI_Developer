import { Grid, Card, CardContent, Typography, Box, Switch, FormControlLabel, Divider, TextField, Button } from '@mui/material'
import { useState } from 'react'

function Configuration() {
  const [settings, setSettings] = useState({
    autoUpdate: true,
    securityMode: true,
    notifications: true,
    maxOpenPRs: 5,
    cooldownDays: 7,
  })

  const handleToggle = (key) => {
    setSettings({ ...settings, [key]: !settings[key] })
  }

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 3, color: '#e6edf3' }}>
        Configuration
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Agent P Settings
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.autoUpdate}
                      onChange={() => handleToggle('autoUpdate')}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#3fb950',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#3fb950',
                        },
                      }}
                    />
                  }
                  label={<Typography sx={{ color: '#e6edf3' }}>Enable Automatic Updates</Typography>}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.securityMode}
                      onChange={() => handleToggle('securityMode')}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#3fb950',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#3fb950',
                        },
                      }}
                    />
                  }
                  label={<Typography sx={{ color: '#e6edf3' }}>Security Mode (Prioritize CVEs)</Typography>}
                />
                <FormControlLabel
                  control={
                    <Switch
                      checked={settings.notifications}
                      onChange={() => handleToggle('notifications')}
                      sx={{
                        '& .MuiSwitch-switchBase.Mui-checked': {
                          color: '#3fb950',
                        },
                        '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                          backgroundColor: '#3fb950',
                        },
                      }}
                    />
                  }
                  label={<Typography sx={{ color: '#e6edf3' }}>Email Notifications</Typography>}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Policy Limits
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <TextField
                  label="Max Open PRs per Run"
                  type="number"
                  value={settings.maxOpenPRs}
                  onChange={(e) => setSettings({ ...settings, maxOpenPRs: parseInt(e.target.value) })}
                  InputLabelProps={{ sx: { color: '#8b949e' } }}
                  InputProps={{ sx: { color: '#e6edf3' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#30363d' },
                      '&:hover fieldset': { borderColor: '#58a6ff' },
                    },
                  }}
                />
                <TextField
                  label="Cooldown Days (for closed PRs)"
                  type="number"
                  value={settings.cooldownDays}
                  onChange={(e) => setSettings({ ...settings, cooldownDays: parseInt(e.target.value) })}
                  InputLabelProps={{ sx: { color: '#8b949e' } }}
                  InputProps={{ sx: { color: '#e6edf3' } }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': { borderColor: '#30363d' },
                      '&:hover fieldset': { borderColor: '#58a6ff' },
                    },
                  }}
                />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" sx={{ mb: 2, color: '#e6edf3' }}>
                Current Configuration Summary
              </Typography>
              <Box sx={{ bgcolor: '#0d1117', p: 2, borderRadius: 1, border: '1px solid #30363d' }}>
                <pre style={{ color: '#8b949e', margin: 0, fontSize: 14, fontFamily: 'monospace' }}>
{`# Agent P Configuration (agp.yml)
version: "1"

agent:
  enabled: true
  provider: bedrock
  model: us.anthropic.claude-sonnet-4-6
  awsRegion: us-west-2
  maxFixAttempts: 3

limits:
  maxOpenPRs: ${settings.maxOpenPRs}
  maxPRsPerRun: ${settings.maxOpenPRs}
  closedPrCooldownDays: ${settings.cooldownDays}

pr:
  labels:
    - dependencies
    - automated
    - agp`}
                </pre>
              </Box>
              <Button
                variant="contained"
                sx={{
                  mt: 2,
                  bgcolor: '#238636',
                  '&:hover': { bgcolor: '#2ea043' },
                }}
              >
                Save Configuration
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Configuration
