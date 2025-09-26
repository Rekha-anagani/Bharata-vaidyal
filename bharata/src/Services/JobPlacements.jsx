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
} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import SchoolIcon from '@mui/icons-material/School'
import GroupsIcon from '@mui/icons-material/Groups'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import { Style } from '../commonComponets/Style'

const JobPlacements = () => {
  const benefits = [
    'Resume building and optimization',
    'Mock interviews and HR screening',
    'Domain-specific job mapping',
    'Career counseling and mentorship',
  ]

  const process = [
    {
      icon: <SchoolIcon sx={{ color: '#2196f3' }} />,
      title: 'Skill Training',
      desc: 'Intensive training sessions with real-world projects to build confidence and job-ready skills.',
    },
    {
      icon: <GroupsIcon sx={{ color: '#9c27b0' }} />,
      title: 'Mock Interviews',
      desc: 'HR and technical mock rounds with feedback from industry mentors.',
    },
    {
      icon: <TrendingUpIcon sx={{ color: '#ff9800' }} />,
      title: 'Placement Drive',
      desc: 'Exclusive access to placement drives and recruitment partners.',
    },
  ]

  return (
    <Box>
      {/* Hero Section */}
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
              label="Career Acceleration"
              sx={{
                alignSelf: 'center',
                background: 'rgba(255,255,255,0.2)',
                color: 'white',
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Job Placements
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              End-to-end placement assistance with industry partnerships and
              expert guidance.
            </Typography>
          </Stack>
        </Container>
      </Box>
 <Box sx={{ py: 5}}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{...Style.CommonHeadingForFmg, fontWeight: 700, mb: 4 }}
              >
                Our Success Stories
              </Typography>
              <Typography variant="body1" sx={{lineHeight:"30px" }}>
                Over 500+ students have successfully landed jobs across
                industries like IT, Electronics, Robotics, and AI.<br/> Our alumni
                work at top companies including Infosys, Wipro, and HCL.
                With personalized mentorship and a structured approach, we
                ensure that every candidate gets the right opportunity to
                succeed in their career.
              </Typography>
            </Grid>
           
          </Grid>
        </Container>
      </Box>
      {/* Benefits Section */}
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
                        background: '#4279cbff',
                        color: 'white',
                      }}
                    >
                      <WorkIcon />
                    </Avatar>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 700, alignSelf: 'center' }}
                    >
                      What You Get
                    </Typography>
                  </Stack>
                  <List>
                    {benefits.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#4279cbff' }} />
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
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{display:"flex", justifyContent:{xs:"center", md:"flex-start"},gap:"5px"}}>
                    {[
                      '500+ placements',
                      '95% success',
                      'Industry mentors',
                      'Interview prep',
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
             <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 700, mb: 1 }}
                  >
                    Achievements
                  </Typography>
                  <List>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="500+ Successful Placements" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="95% Student Satisfaction" />
                    </ListItem>
                    <ListItem>
                      <ListItemIcon>
                        <CheckCircleIcon color="primary" />
                      </ListItemIcon>
                      <ListItemText primary="Partnerships with 50+ Companies" />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Process Section */}
      <Box sx={{ py: 8 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            sx={{...Style.CommonHeading ,fontWeight: 700, textAlign: 'center', mb: 6 }}
          >
            How Our Placement Process Works
          </Typography>
          <Grid container spacing={4} sx={{ ...Style.GridLayout3colums }}>
            {process.map((step, i) => (
              <Grid item xs={12} md={4} key={i}>
                <Card sx={Style.ModernCard}>
                  <CardContent sx={{ textAlign: 'center' }}>
                    <Avatar
                      sx={{
                        width: 64,
                        height: 64,
                        mx: 'auto',
                        mb: 2,
                        background: 'rgba(0,0,0,0.05)',
                      }}
                    >
                      {step.icon}
                    </Avatar>
                    <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                      {step.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {step.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Success Section */}
     
    </Box>
  )
}

export default JobPlacements
