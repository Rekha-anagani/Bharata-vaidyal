import { 
  Box, Chip, Container, Stack, Typography, Grid, 
  Card, CardContent, Avatar, List, ListItem, ListItemIcon, ListItemText, Button 
} from '@mui/material'
import React from 'react'
import WorkIcon from '@mui/icons-material/Work'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Style } from '../commonComponets/Style'

const Internship = () => {
  const features = [
    'Hands-on real-time projects',
    'Mentorship from industry experts',
    'Weekly evaluations & feedback',
    'Flexible online/offline mode',
    'Certification upon completion',
  ]

  const benefits = [
    'Gain practical experience',
    'Improve technical & soft skills',
    'Build portfolio with live projects',
    'Increase employability',
    'Networking with professionals',
  ]

  const domains = [
    'Web Development',
    'Data Science & AI',
    'Digital Marketing',
    'UI/UX Designing',
    'Cyber Security',
    'Cloud Computing',
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ background: Style.colors.gradients.primary, color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Chip
              label="Internship"
              sx={{ alignSelf: 'center', background: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Internship Programs
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Structured internships designed to provide real-world exposure, skill development, and career readiness.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box sx={{py:4}}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{...Style.GridLayout}}>

            <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#1976d2', color: 'white' }}>
                      <WorkIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>
                      Program Features
                    </Typography>
                  </Stack>
                  <List>
                    {features.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#1976d2' }} />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Benefits of Internship
                  </Typography>
                  <List>
                    {benefits.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#4caf50' }} />
                        </ListItemIcon>
                        <ListItemText primary={text} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>

         
          </Grid>
        </Container>
      </Box>
      <Box sx={{py:{xs:4,md:8}}}>
        <Container maxWidth="lg">
               <Grid item xs={12}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Internship Domains
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {domains.map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5, background: '#e3f2fd' }} />
                    ))}
                  </Stack>
                  <Button sx={{ ...Style.ModernButton, mt: 3 }} href="/contactUs" fullWidth>
                    Apply for Internship
                  </Button>
                </CardContent>
              </Card>
            </Grid>

        </Container>
        </Box>
    </Box>
  )
}

export default Internship
