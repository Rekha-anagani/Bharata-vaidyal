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
import MedicalServicesIcon from '@mui/icons-material/MedicalServices'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import { Style } from '../commonComponets/Style'

const CprmedicalSkills = () => {
  const outcomes = [
    'Adult, Child, Infant CPR protocols',
    'AED usage and emergency response',
    'First-aid essentials and triage',
    'Scenario-based practical assessments'
  ]

  const modules = [
    'Introduction to BLS/ACLS',
    'Airway management & rescue breathing',
    'CPR techniques and AED operation',
    'Medical emergencies and stabilization'
  ]

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
              label="Healthcare Skills"
              sx={{
                alignSelf: 'center',
                background: 'rgba(255,255,255,0.2)',
                color: 'white'
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              CPR & Medical Skills
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Hands-on lifesaving skills training for healthcare students and
              professionals.
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              justifyContent="center"
            >
              <Button sx={{ ...Style.ModernButton }} href="/contactUs">
                Join the Next Batch
              </Button>
              <Button sx={{ ...Style.SecondaryButton }} href="/home">
                Know More
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
  <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {/* Left Side - Why CPR is Important */}
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight={700} gutterBottom sx={{...Style.CommonHeadingForDrone,mb:5}}>
                Why CPR & Medical Skills?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Every second counts during a medical emergency. Knowing CPR and
                essential first-aid can make the difference between life and
                death. This training provides healthcare students and working
                professionals with the confidence and ability to act swiftly in
                critical situations.
              </Typography>
              <Typography variant="body1">
                With a blend of classroom teaching and hands-on practice, you
                will learn internationally recognized protocols like BLS and
                ACLS, equipping you to respond effectively in real-world
                scenarios.
              </Typography>
            </Grid>

            {/* Right Side - Benefits List */}
         
          </Grid>
        </Container>
      </Box>
      {/* Modules + Outcomes */}
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
                        background: "blue",
                        color: 'white'
                      }}
                    >
                      <MedicalServicesIcon />
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, alignSelf: 'center' }}
                    >
                      Training Modules
                    </Typography>
                  </Stack>
                  <List>
                    {modules.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon >
                          <CheckCircleIcon sx={{ color: 'blue' }} />
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
                    Learning Outcomes
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{display:"flex",justifyContent:"center",gap:"10px"}}>
                    {outcomes.map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5 }} />
                    ))}
                  </Stack>
                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mt: 3 }}
                  >
                    <HealthAndSafetyIcon color="primary" />
                    <Typography>Certification on completion</Typography>
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
                      <ListItemText primary="Confidence in handling cardiac arrest cases" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Mastery of AED and CPR techniques" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Preparedness for workplace & hospital emergencies" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Globally valid certification for career growth" />
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

export default CprmedicalSkills
