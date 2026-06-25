import { Outlet, NavLink } from 'react-router-dom'
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  AppBar,
  Container,
} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard'
import AssessmentIcon from '@mui/icons-material/Assessment'
import SettingsIcon from '@mui/icons-material/Settings'
import PersonIcon from '@mui/icons-material/Person'
import NotificationsIcon from '@mui/icons-material/Notifications'
import HistoryIcon from '@mui/icons-material/History'

const drawerWidth = 240

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '/' },
  { text: 'Reports', icon: <AssessmentIcon />, path: '/reports' },
  { text: 'Alerts', icon: <NotificationsIcon />, path: '/alerts' },
  { text: 'History', icon: <HistoryIcon />, path: '/history' },
  { text: 'Configuration', icon: <SettingsIcon />, path: '/configuration' },
  { text: 'Profile', icon: <PersonIcon />, path: '/profile' },
]

function Layout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          bgcolor: '#161b22',
          borderBottom: '1px solid #30363d'
        }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" sx={{ color: '#e6edf3' }}>
            Metricflow AI Developer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#0d1117',
            borderRight: '1px solid #30363d',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', py: 2 }}>
          <Typography variant="h6" sx={{ color: '#58a6ff', fontWeight: 700 }}>
            Metricflow
          </Typography>
        </Toolbar>
        <List>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                component={NavLink}
                to={item.path}
                sx={{
                  '&.active': {
                    bgcolor: '#21262d',
                    borderRight: '2px solid #58a6ff',
                  },
                  '&:hover': {
                    bgcolor: '#21262d',
                  },
                }}
              >
                <ListItemIcon sx={{ color: '#8b949e' }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  primaryTypographyProps={{ sx: { color: '#e6edf3' } }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: '#0d1117',
          minHeight: '100vh',
          p: 3
        }}
      >
        <Toolbar />
        <Container maxWidth="xl">
          <Outlet />
        </Container>
      </Box>
    </Box>
  )
}

export default Layout
