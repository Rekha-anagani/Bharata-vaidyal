import React from 'react'
import {
  Box, Container, Typography, Grid, Card, CardContent,
  Chip, Stack, Avatar, Button, List, ListItem, ListItemIcon, ListItemText
} from '@mui/material'
import BusinessIcon from '@mui/icons-material/Business'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Style } from '../commonComponets/Style'

const CorporateTraining = () => {
  const modules = [
    'Customized curriculum design',
    'On-site and virtual delivery',
    'Expert industry instructors',
    'Performance assessment & reporting',
    'Soft skills & leadership development',
    'Emerging technologies (AI, Cloud, Data Science)',
    'Compliance & corporate ethics programs',
  ]

  const benefits = [
    'Bridging skill gaps for employees',
    'Boosting productivity and efficiency',
    'Retaining top talent with continuous learning',
    'Enhancing leadership and communication skills',
    'Adapting to latest industry trends & technologies',
  ]

  const industries = [
    'IT & Software',
    'Healthcare',
    'Banking & Finance',
    'Manufacturing',
    'Retail & E-commerce',
    'Education & Training',
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ background: Style.colors.gradients.primary, color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Chip
              label="Institution & Corporate"
              sx={{ alignSelf: 'center', background: 'rgba(255,255,255,0.2)', color: 'white' }}
            />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>
              Corporate Training
            </Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Tailored programs to upskill teams, boost productivity, and drive measurable business results.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Details Section */}
      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{ ...Style.GridLayout }}>
            <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#9c27b0', color: 'white' }}>
                      <BusinessIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>
                      Program Modules
                    </Typography>
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

            <Grid item xs={12} md={6}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                    Benefits of Corporate Training
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
      <Box >
        <Container maxWidth="lg" sx={{...Style.GridLayout1}}>
   <Grid item xs={12} md={6}>
        <Card sx={Style.ModernCard}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Industries We Serve
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {industries.map((t) => (
                <Chip key={t} label={t} sx={{ m: 0.5, background: '#f3e5f5' }} />
              ))}
            </Stack>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card sx={Style.ModernCard}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
              Highlights
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {[
                '100+ corporate clients',
                'Blended learning (online + offline)',
                'Outcome-driven approach',
                'Continuous reporting & feedback',
                'Global delivery capabilities'
              ].map((t) => (
                <Chip key={t} label={t} sx={{ m: 0.5 }} />
              ))}
            </Stack>
            <Button sx={{ ...Style.ModernButton, mt: 3 }} href="/contactUs" fullWidth>
              Request a Proposal
            </Button>
          </CardContent>
        </Card>
      </Grid>

        </Container>
      </Box>
   
    </Box>
  )
}

export default CorporateTraining
