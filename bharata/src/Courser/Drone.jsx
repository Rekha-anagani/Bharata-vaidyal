

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

import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import SmartToyIcon from '@mui/icons-material/SmartToy'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import CameraAltIcon from '@mui/icons-material/CameraAlt'
import AgricultureIcon from '@mui/icons-material/Agriculture'
import LocalShippingIcon from '@mui/icons-material/LocalShipping'
import SecurityIcon from '@mui/icons-material/Security'
import ConstructionIcon from '@mui/icons-material/Construction';
import WaterIcon from '@mui/icons-material/Water';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import MapIcon from '@mui/icons-material/Map';
import FireExtinguisherIcon from '@mui/icons-material/FireExtinguisher';
import OilBarrelIcon from '@mui/icons-material/OilBarrel';
import { Style } from '../commonComponets/Style'

const Drone = () => {
  const modules = [
    'Drone basics and safety protocols',
    'Flight dynamics & controller tuning',
    'FPV systems and ground station',
    'Aerial mapping & data acquisition',
    'Payload integration and sensor systems',
    'Drone regulations and certifications'
  ]

  const badges = ['Hands-on labs', 'Safety focused', 'Field exercises', 'Regulations overview']

 const applications = [
  { icon: <CameraAltIcon color="primary" />, text: "Aerial Photography & Cinematography" },
  { icon: <AgricultureIcon color="primary" />, text: "Precision Agriculture & Crop Monitoring" },
  { icon: <LocalShippingIcon color="primary" />, text: "Logistics & Package Delivery" },
  { icon: <SecurityIcon color="primary" />, text: "Surveillance & Disaster Management" },
  { icon: <ConstructionIcon color="primary" />, text: "Construction Site Monitoring & Mapping" },
  { icon: <WaterIcon color="primary" />, text: "Environmental Monitoring & Wildlife Tracking" },
  { icon: <HealthAndSafetyIcon color="primary" />, text: "Medical Supply Transport in Emergencies" },
  { icon: <MapIcon color="primary" />, text: "3D Mapping & Land Surveying" },
  { icon: <FireExtinguisherIcon color="primary" />, text: "Firefighting & Search-and-Rescue Operations" },
  { icon: <OilBarrelIcon color="primary" />, text: "Pipeline & Powerline Inspection" }
]

  const benefits = [
    "Master the fundamentals of UAV technology.",
    "Gain practical flying and assembly experience.",
    "Learn aerial mapping, surveying, and data analysis.",
    "Career opportunities in defense, logistics, and agriculture."
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ background: Style.colors.gradients.primary, color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Chip label="Aviation Tech" sx={{ alignSelf: 'center', background: 'rgba(255,255,255,0.2)', color: 'white' }} />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>Drone Technology</Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Learn to build, configure, and operate drones safely and effectively.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button sx={{ ...Style.ModernButton }} href="/contactUs">Join Now</Button>
              <Button sx={{ ...Style.SecondaryButton }} href="/home">Explore Tracks</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* About Drone Section */}
      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f9f9fb' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{...Style.CommonHeadingForDrone, fontWeight: 800, mb: 4 ,textAlign:"start"}}>
                What is Drone Technology?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                Drones, or Unmanned Aerial Vehicles (UAVs), are aircraft systems that can be remotely 
                controlled or fly autonomously using software-controlled flight plans. 
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                They are widely used in industries such as agriculture, filmmaking, delivery services, 
                defense, and disaster response. With AI integration <SmartToyIcon sx={{ verticalAlign: 'middle', fontSize: 20, color: 'primary.main' }} />, 
                drones are becoming smarter and capable of autonomous decision-making.
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <FlightTakeoffIcon color="primary" />
                <Typography>Drones are reshaping industries and everyday life.</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ 
                background: 'linear-gradient(135deg, #2196f3 0%, #21cbf3 100%)', 
                borderRadius: 3, 
                height: { xs: 220, md: 300 }, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                color: 'white', 
                textAlign: 'center',
                p: 2 
              }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  “Drone technology with AI <SmartToyIcon sx={{ verticalAlign: 'middle' }} /> 
                  is unlocking new opportunities in data collection, automation, 
                  and global connectivity.”
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{...Style.CommonHeadingForDrone, fontWeight: 800, textAlign: "start", mb: 4 }}>
            Applications of Drone Technology
          </Typography>
          <Grid container spacing={3} sx={{...Style.GridLayout1}}>
            {applications.map((app, i) => (
              <Grid item xs={12} md={6} key={i} >
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  {app.icon}
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>{app.text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, backgroundColor: '#f9f9fb' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{...Style.CommonHeadingForDrone, fontWeight: 800, textAlign: "start", mb: 4 }}>
            Why Learn Drone Technology?
          </Typography>
          <List>
            {benefits.map((b, i) => (
              <ListItem key={i}>
                <ListItemIcon>
                  <CheckCircleIcon color="primary" />
                </ListItemIcon>
                <ListItemText primary={b} />
              </ListItem>
            ))}
          </List>
        </Container>
      </Box>
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{...Style.GridLayout}}>
            <Grid item xs={12} md={7}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#2196f3', color: 'white' }}>
                      <FlightTakeoffIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>Course Modules</Typography>
                  </Stack>
                  <List>
                    {modules.map((text, i) => (
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
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>Highlights</Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{p:1,display:"flex",gap:"10px"}}>
                    {badges.map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5 }} />
                    ))}
                  </Stack>
                  <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 3 }}>
                    <PrecisionManufacturingIcon color="primary" />
                    <Typography>Assembly and tuning workshops</Typography>
                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>

        {/* Call to Action */}
        <Container maxWidth="lg" sx={{  mt:4 }}>
          <Card sx={{ ...Style.ModernCard, p: 4 }}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="space-between" alignItems="center">
              <Typography variant="h5" sx={{ fontWeight: 700 }}>Fly your first custom drone</Typography>
              <Button sx={Style.ModernButton} href="/contactUs">Get Syllabus</Button>
            </Stack>
            <Box sx={{backgroundColor:"grey",textAlign:"center",mt:2,p:1,borderRadius:2,height:{xs:100,md:200}}}>
              {/* Placeholder for drone image/video */}
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}

export default Drone
