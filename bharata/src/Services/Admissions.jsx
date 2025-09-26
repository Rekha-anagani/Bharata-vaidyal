import React from 'react'
import { 
  Box, Container, Typography, Grid, Card, CardContent, 
  Chip, Stack, Avatar, Button, List, ListItem, ListItemIcon, ListItemText 
} from '@mui/material'
import FlightIcon from '@mui/icons-material/Flight'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Style } from '../commonComponets/Style'

const Admissions = () => {
  const medicalSupport = [
    'Guidance for NEET UG/PG counseling',
    'Assistance with application to top medical colleges (India & Abroad)',
    'Documentation and Visa support for abroad MBBS',
    'Scholarship & loan assistance',
    'Pre-departure orientation for abroad students',
  ]

  const engineeringSupport = [
    'Counseling for JEE, EAMCET, and other state-level exams',
    'Application support for IITs, NITs, and top private universities',
    'Abroad admissions for B.Tech, MS, and specialized engineering programs',
    'Scholarship, visa, and funding guidance',
    'End-to-end admission support',
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ background: Style.colors.gradients.primary, color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Chip 
              label="India & Abroad" 
              sx={{ alignSelf: 'center', background: 'rgba(255,255,255,0.2)', color: 'white' }} 
            />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Medical & Engineering Admissions
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Streamlined, end-to-end admissions assistance for top universities.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Content Section */}
      <Box sx={{ ...Style.SectionWithBackground }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>

            {/* Medical Admissions */}
            <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#e91e63', color: 'white' }}>
                      <FlightIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>
                      Medical Admissions
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
                    From MBBS to MD/MS, we provide complete guidance for medical aspirants 
                    in India and abroad. Our team helps with counseling, documentation, and scholarships.
                  </Typography>
                  <List>
                    {medicalSupport.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#e91e63' }} />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                  <Button sx={{ ...Style.ModernButton, mt: 2 }} href="/contactUs" fullWidth>
                    Apply for Medical
                  </Button>
                </CardContent>
              </Card>
            </Grid>

            {/* Engineering Admissions */}
            <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#3f51b5', color: 'white' }}>
                      <FlightIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>
                      Engineering Admissions
                    </Typography>
                  </Stack>
                  <Typography variant="body1" sx={{ mb: 2, opacity: 0.9 }}>
                    From B.Tech to MS abroad, we assist students with counseling, exam prep, 
                    applications, scholarships, and visa guidance for top engineering institutes.
                  </Typography>
                  <List>
                    {engineeringSupport.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#3f51b5' }} />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                  <Button sx={{ ...Style.ModernButton, mt: 2 }} href="/contactUs" fullWidth>
                    Apply for Engineering
                  </Button>
                </CardContent>
              </Card>
            </Grid>

          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Admissions
