import React from 'react'
import { 
  Box, Container, Typography, Grid, Card, CardContent, 
  Chip, Stack, Avatar, Button, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material'
import RoboticsIcon from '@mui/icons-material/PrecisionManufacturing'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest'
import AndroidIcon from '@mui/icons-material/Android'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import FactoryIcon from '@mui/icons-material/Factory'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import WorkIcon from '@mui/icons-material/Work'
import SchoolIcon from '@mui/icons-material/School'
import { Style } from '../commonComponets/Style'

const Robotic = () => {
  const modules = [
    'Kinematics & dynamics basics',
    'Sensors, actuators, and control',
    'Microcontrollers & ROS introduction',
    'Path planning fundamentals',
    'Computer vision & robotic perception',
    'Human-robot interaction (HRI)',
    'AI integration with Robotics',
    'Capstone robotics project'
  ]

  const highlights = [
    'Real robots & simulators',
    'Team projects & labs',
    'Control systems',
    'ROS basics',
    'AI-driven robotics',
    'Career mentoring'
  ]

  const applications = [
    { icon: <AndroidIcon color="primary" />, text: "Humanoid & Service Robots" },
    { icon: <LocalHospitalIcon color="primary" />, text: "Medical & Surgical Robotics" },
    { icon: <FactoryIcon color="primary" />, text: "Industrial Automation & Manufacturing" },
    { icon: <AgricultureIcon color="primary" />, text: "Agriculture Robotics & Smart Farming" }
  ]

  const careers = [
    "Robotics Engineer",
    "Automation Specialist",
    "Research Scientist",
    "AI & Robotics Developer",
    "Industrial Automation Expert",
    "Embedded Systems Engineer"
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ background: Style.colors.gradients.primary, color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Chip label="Automation" sx={{ alignSelf: 'center', background: 'rgba(255,255,255,0.2)', color: 'white' }} />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>Robotics</Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Build and program robots with strong foundations in control, AI, and perception.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button sx={{ ...Style.ModernButton }} href="/contactUs">Reserve Seat</Button>
              <Button sx={{ ...Style.SecondaryButton }} href="/home">View Curriculum</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

   

      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box>
            <CardContent>
              <Typography variant="h5" sx={{...Style.CommonHeadingForDrone, fontWeight: 700, mb: 4,}}>
                Real-world Applications of Robotics
              </Typography>
              <Grid container spacing={3} sx={{...Style.GridLayout1}}>
                {applications.map((app, i) => (
                  <Grid item xs={12} sm={6} key={i}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      {app.icon}
                      <Typography>{app.text}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Box>
            <CardContent>
              <Typography variant="h5" sx={{...Style.CommonHeadingForDrone, fontWeight: 700, mb: 3, }}>
                Career Opportunities in Robotics
              </Typography>
              <Grid container spacing={2} sx={{...Style.GridLayout1}}>
                {careers.map((c, i) => (
                  <Grid item xs={12} sm={6} md={4} key={i}>
                    <Stack direction="row" spacing={2} alignItems="center">
                      <WorkIcon color="primary" />
                      <Typography>{c}</Typography>
                    </Stack>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Box>
        </Container>
      </Box>
      {/* sx={{ ...Style.SectionWithBackground }} */}
   <Box >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{...Style.GridLayout}}>
            <Grid item xs={12} md={12}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#9c27b0', color: 'white' }}>
                      <RoboticsIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>Core Modules</Typography>
                  </Stack>
                  <List>
                    {modules.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#9c27b0' }} />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={5}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Highlights</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{display:'flex',justifyContent:'center',gap:"10px"}}>
                    {highlights.map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5 }} />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3 }}>
                    <SettingsSuggestIcon color="primary" />
                    <Typography>Hands-on robotics control labs</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ py: 6 }}>
        <Container maxWidth="lg">
          <Card sx={{ ...Style.ModernCard, p: 4 }}>
            <Stack 
              direction={{ xs: 'column', sm: 'row' }} 
              spacing={2} 
              justifyContent="space-between" 
              alignItems="center"
            >
              <Typography variant="h5" sx={{ fontWeight: 700 }}>
                Start your journey in Robotics today
              </Typography>
              <Button sx={Style.ModernButton} href="/contactUs">Get Syllabus</Button>
            </Stack>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}

export default Robotic
