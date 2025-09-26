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
  ListItemText,
  CardMedia,
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import WorkIcon from '@mui/icons-material/Work'
import HealingIcon from '@mui/icons-material/Healing'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital'
import StarIcon from '@mui/icons-material/Star'
import { Style } from '../commonComponets/Style';
import NurcingVideo from '../fmge & neet pg/NurcingVideo.mp4'

const BscNursing = () => {
  const features = [
    'Clinical rotations and postings',
    'Internship opportunities across hospitals',
    'Certification and documentation support',
    'Skill-based labs and workshops',
  ]

  const curriculum = [
    'Anatomy & Physiology',
    'Community Health Nursing',
    'Nutrition & Biochemistry',
    'Pharmacology',
    'Psychiatric Nursing',
    'Medical-Surgical Nursing',
  ]

  const careers = [
    { icon: <HealingIcon color="primary" />, role: 'Registered Nurse' },
    { icon: <LocalHospitalIcon color="secondary" />, role: 'Clinical Instructor' },
    { icon: <WorkIcon sx={{ color: '#4caf50' }} />, role: 'Hospital Administrator' },
    { icon: <StarIcon sx={{ color: '#ff9800' }} />, role: 'Healthcare Consultant' },
  ]

  return (
    <Box>
      {/* Hero */}
      <Box
        sx={{
          background: Style.colors.gradients.primary,
          color: 'white',
          py: { xs: 8, md: 10 },
        }}
      >
        <Container maxWidth="lg">
          <Stack
            spacing={2}
            sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}
          >
            <Chip
              label="Healthcare Pathways"
              sx={{
                alignSelf: 'center',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              BSc Nursing & Allied Health
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Hands-on exposure with hospital partnerships and guided
              internships.
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center" sx={{ ...Style.GridLayout1 }}>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ ...Style.CommonHeadingForDrone, fontWeight: 700, mb: 2 }}>
                Internships & Hands-On Training
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                Our students undergo clinical postings across reputed hospitals,
                gaining practical exposure to patient care, emergency response,
                and specialized departments.
              </Typography>
              <Typography variant="body1">
                With 200+ hospital partners, students receive real-world
                experience and mentorship from senior doctors and nurses.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardMedia
                  component="video"
                  height="300px"
                  image=""
                  src={NurcingVideo}
                  alt="Hospital Training Video"
                  sx={{ borderRadius: 2 }}
                  controls
                  autoPlay
                  muted
                  loop
                />
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>

      {/* Features + Highlights */}


      {/* Curriculum Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ ...Style.CommonHeading, fontWeight: 700, textAlign: 'center', mb: 4 }}
          >
            Curriculum Overview
          </Typography>
          <Grid container spacing={2} justifyContent="center" sx={{ ...Style.GridLayout3colums }}>
            {curriculum.map((subject, i) => (
              <Grid item xs={12} sm={6} md={4} key={i}>
                <Card sx={{ ...Style.homepaperCount, color: "grey" }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <CheckCircleIcon sx={{ fontSize: 40, mb: 1 }} />
                    <Typography variant="h6" fontWeight={600}>
                      {subject}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Career Opportunities */}
      <Box >
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{ ...Style.CommonHeading, fontWeight: 700, textAlign: 'center', mb: 5 }}
          >
            Career Opportunities
          </Typography>
          <Grid container spacing={3} sx={{ ...Style.GridLayout }}>
            {careers.map((career, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <Card sx={{ ...Style.CommonCard4, }}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 60,
                        height: 60,
                        mx: 'auto',
                        mb: 2,
                        background: 'rgba(0,0,0,0.05)',
                      }}
                    >
                      {career.icon}
                    </Avatar>
                    <Typography variant="h6" fontWeight={600}>
                      {career.role}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Internships & Training */}

      {/* Success Section */}
      <Box >
        <Container maxWidth="lg" sx={{mt:8}}>
          <Typography sx={{ ...Style.CommonHeading, mb: 4 }}>
            Our Features && Highlights
          </Typography>
          <Grid container spacing={4} sx={{ ...Style.GridLayout }}>
            <Grid item xs={12} md={7}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar
                      sx={{
                        width: 56,
                        height: 56,
                        background: '#2196f3',
                        color: 'white',
                      }}
                    >
                      <SchoolIcon />
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, alignSelf: 'center' }}
                    >
                      Program Features
                    </Typography>
                  </Stack>
                  <List>
                    {features.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#2196f3' }} />
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
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Highlights
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {[
                      '200+ partners',
                      'Clinical labs',
                      'Internships',
                      'Certification support',
                    ].map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5 }} />
                    ))}
                  </Stack>
                  <Button
                    sx={{ ...Style.ModernButton, mt: 3 }}
                    href="/contactUs"
                    fullWidth
                  >
                    Apply Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box >
        <Container maxWidth="lg" sx={{ mt: 3 }}>
          <Typography sx={{ ...Style.CommonHeading, mb: 3 }}>
            Success Stories
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ ...Style.GridLayout4colums }}>
            {[
              { count: '200+', label: 'Hospital Partners' },
              { count: '1000+', label: 'Students Trained' },
              { count: '95%', label: 'Placement Rate' },
              { count: '50+', label: 'Workshops & Camps' },
            ].map((stat, i) => (
              <Grid item xs={6} md={3} key={i}>
                <Card sx={Style.ModernCard}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" sx={{ fontWeight: 800, color: '#2196f3' }}>
                      {stat.count}
                    </Typography>
                    <Typography variant="body1">{stat.label}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default BscNursing
