import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, Chip, Stack, Avatar, Button, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import BadgeIcon from '@mui/icons-material/Badge'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Style } from '../commonComponets/Style'

const Internships = () => {
  const tracks = [
    'On-campus and off-campus roles',
    'Mentor-led projects and reviews',
    'Certification and LOR support',
    'Pre-placement offers for top interns',
  ]

  return (
    <Box>
      <Box sx={{ background: Style.colors.gradients.primary, color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 800, mx: 'auto' }}>
            <Chip label="Launch Your Career" sx={{ alignSelf: 'center', background: 'rgba(255,255,255,0.2)', color: 'white' }} />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>Internships</Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Practical exposure with real projects and industry mentors.
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ ...Style.SectionWithBackground }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={7}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#1976d2', color: 'white' }}>
                      <BadgeIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>
                      Tracks & benefits
                    </Typography>
                  </Stack>
                  <List>
                    {tracks.map((text, i) => (
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
            <Grid item xs={12} md={5}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Highlights</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {[ 'Stipend roles', 'Hybrid/remote', 'Placement-linked', 'Real projects' ].map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5 }} />
                    ))}
                  </Stack>
                  <Button sx={{ ...Style.ModernButton, mt: 3 }} href="/contactUs">Apply for Internships</Button>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  )
}

export default Internships


