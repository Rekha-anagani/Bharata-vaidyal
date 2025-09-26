import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Stack,
  Avatar,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import MemoryIcon from '@mui/icons-material/Memory'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BoltIcon from '@mui/icons-material/Bolt'
import { Style } from '../commonComponets/Style'

const Electroincs = () => {
  const modules = [
    'Circuit theory & simulation (LTspice)',
    'Analog and digital electronics',
    'Microcontrollers: Arduino/ESP32 basics',
    'PCB design introduction'
  ]

  const badges = ['Lab-first approach', 'Kits provided', 'Safety practices', 'Mini projects']

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          background: Style.colors.gradients.primary,
          color: 'white',
          py: { xs: 8, md: 10 }
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={2}
            sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}
          >
            <Chip
              label="Core Engineering"
              sx={{
                alignSelf: 'center',
                background: 'rgba(255,255,255,0.2)',
                color: 'white'
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Electronics
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Build a strong foundation in circuit design, microcontrollers, and
              PCB basics.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button sx={{ ...Style.ModernButton }} href="/contactUs">
                Enroll
              </Button>
              <Button sx={{ ...Style.SecondaryButton }} href="/home">
                Syllabus
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
  <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={700} gutterBottom sx={{...Style.CommonHeadingForDrone,mb:5}}>
                Why Learn Electronics?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Electronics is the backbone of modern technology. From smartphones
                to robotics, every innovation depends on strong knowledge of
                circuits, sensors, and controllers. This course equips you with
                hands-on experience to design, build, and test electronic systems.
              </Typography>
              <Typography variant="body1">
                By the end of this program, you’ll gain the confidence to explore
                embedded systems, IoT, and advanced hardware design.
              </Typography>
            </Grid>
        
          </Grid>
        </Container>
      </Box>
      {/* Modules + Highlights */}
      <Box >
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ ...Style.GridLayout3colums }}>
            <Grid item xs={12} md={7}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        background: 'blue',
                        color: 'white'
                      }}
                    >
                      <MemoryIcon />
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, alignSelf: 'center' }}
                    >
                      Course Modules
                    </Typography>
                  </Stack>
                  <List>
                    {modules.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: "blue" }} />
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
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    Highlights
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{display:"flex",justifyContent:"center",gap:"10px"}}>
                    {badges.map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5 }} />
                    ))}
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mt: 3 }}
                  >
                    <BoltIcon color="primary" />
                    <Typography>Hands-on lab sessions every week</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
                <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Typography
                    variant="h6"
                    fontWeight={700}
                    gutterBottom
                  >
                    What You Will Gain
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Practical circuit building skills" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Introduction to real-world microcontrollers" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Understanding PCB design process" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Problem-solving with electronics projects" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Extra Content Section */}
    
    </Box>
  )
}

export default Electroincs
