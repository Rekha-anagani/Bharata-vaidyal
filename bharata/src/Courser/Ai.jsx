

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
import SmartToyIcon from '@mui/icons-material/SmartToy'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import InsightsIcon from '@mui/icons-material/Insights'
import PsychologyIcon from '@mui/icons-material/Psychology'
import ScienceIcon from '@mui/icons-material/Science'
import WorkIcon from '@mui/icons-material/Work'
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety'
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing'
import { Style } from '../commonComponets/Style'

const Ai = () => {
  const highlights = [
    'Hands-on ML & DL projects',
    'Model deployment and MLOps basics',
    'Computer vision and NLP modules',
    'Capstone with industry mentor'
  ]

  const modules = [
    'Python for Data Science, NumPy & Pandas',
    'Supervised & Unsupervised Learning',
    'Neural Networks with TensorFlow/PyTorch',
    'NLP fundamentals and Transformers',
    'Computer Vision with CNNs',
    'MLOps: model serving and monitoring'
  ]

  const applications = [
    { icon: <HealthAndSafetyIcon color="primary" />, text: "Healthcare – Disease prediction, drug discovery, medical imaging." },
    { icon: <WorkIcon color="primary" />, text: "Business – Predictive analytics, chatbots, automation." },
    { icon: <PrecisionManufacturingIcon color="primary" />, text: "Manufacturing – Quality control, robotics, predictive maintenance." },
    { icon: <ScienceIcon color="primary" />, text: "Research – Climate modeling, space exploration, genomics." },
  ]

  const benefits = [
    "AI reduces human errors and increases accuracy.",
    "It automates repetitive tasks, saving time and cost.",
    "AI-powered systems provide better decision-making insights.",
    "It opens career opportunities in emerging fields."
  ]

  return (
    <Box>
      {/* Hero Section */}
      <Box sx={{ background: Style.colors.gradients.primary, color: 'white', py: { xs: 8, md: 10 } }}>
        <Container maxWidth="lg">
          <Stack spacing={2} sx={{ textAlign: 'center', maxWidth: 900, mx: 'auto' }}>
            <Chip label="AI & Machine Learning" sx={{ alignSelf: 'center', background: 'rgba(255,255,255,0.2)', color: 'white' }} />
            <Typography variant="h3" sx={{ fontWeight: 800 }}>Artificial Intelligence</Typography>
            <Typography variant="h6" sx={{ opacity: 0.9 }}>
              Learn practical AI with end-to-end projects, from data to deployment.
            </Typography>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
              <Button sx={{ ...Style.ModernButton }} href="/contactUs">Enroll Now</Button>
              <Button sx={{ ...Style.SecondaryButton }} href="/home">View More</Button>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* About AI Section */}
      <Box sx={{ py: { xs: 6, md: 5 }, backgroundColor: '#f9f9fb' }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" sx={{ ...Style.CommonHeadingForDrone,fontWeight: 800, mb: 4 }}>
                What is Artificial Intelligence?
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                Artificial Intelligence (AI) is a branch of computer science that enables machines 
                to perform tasks that typically require human intelligence such as learning, reasoning, 
                problem-solving, perception, and decision-making.
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
                From self-driving cars to voice assistants, AI is powering the next wave of 
                technological innovation. By learning AI, you’ll gain skills in data analysis, 
                machine learning, deep learning, computer vision, and natural language processing.
              </Typography>
              <Stack direction="row" spacing={1} alignItems="center">
                <PsychologyIcon color="primary" />
                <Typography>AI is shaping the future of industries worldwide</Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                        borderRadius: 3, 
                        height: { xs: 220, md: 300 }, 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        color: 'white', 
                        textAlign: 'center',
                        p: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 700 }}>
                  “AI is not just about coding, it’s about creating intelligent solutions 
                  that transform the way we live and work.”
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Applications Section */}
      <Box sx={{ py: { xs: 6, md:3 } }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{ ...Style.CommonHeadingForFmg,fontWeight: 800, mb: 4 }}>
            Applications of AI
          </Typography>
          <Grid container spacing={3} sx={{...Style.GridLayout1}}>
            {applications.map((app, i) => (
              <Grid item xs={12} md={6} key={i}>
                <Stack direction="row" spacing={2} alignItems="flex-start">
                  {app.icon}
                  <Typography variant="body1" sx={{ color: "text.secondary" }}>{app.text}</Typography>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box sx={{ py: { xs: 6, md:3 }, backgroundColor: '#f9f9fb' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" sx={{...Style.CommonHeadingForFmg, fontWeight: 800, textAlign: "start", mb: 4 }}>
            Why Learn AI?
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

      {/* Modules + Highlights Section */}
      {/*  sx={{ ...Style.SectionWithBackground }} */}
      <Box>
        <Container maxWidth="lg">
          <Grid container spacing={4} sx={{...Style.GridLayout}}>
            <Grid item xs={12} md={7}>
              <Card sx={Style.ModernCard}>
                <CardContent>
                  <Stack direction="row" spacing={2} sx={{ mb: 1 }}>
                    <Avatar sx={{ width: 56, height: 56, background: '#667eea', color: 'white' }}>
                      <SmartToyIcon />
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 700, alignSelf: 'center' }}>Program Modules</Typography>
                  </Stack>
                  <List>
                    {modules.map((text, i) => (
                      <ListItem key={i} sx={{ px: 0 }}>
                        <ListItemIcon sx={{ minWidth: 36 }}>
                          <CheckCircleIcon sx={{ color: '#667eea' }} />
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
                  <Stack direction="row" spacing={1} flexWrap="wrap" sx={{display:"flex",gap:"10px",p:1}}>
                    {highlights.map((t) => (
                      <Chip key={t} label={t} sx={{ m: 0.5 }} />
                    ))}
                  </Stack>
                  <Stack spacing={2} sx={{ mt: 3 }}>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <AutoAwesomeIcon color="primary" />
                      <Typography>Project-first pedagogy</Typography>
                    </Stack>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <InsightsIcon color="primary" />
                      <Typography>Career mentoring & mock interviews</Typography>
                    </Stack>
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
              <Typography variant="h5" sx={{ fontWeight: 700 }}>Build your first AI portfolio</Typography>
              <Button sx={Style.ModernButton} href="/contactUs">Get Syllabus</Button>
            </Stack>
            <Box sx={{backgroundColor:"grey",textAlign:"center",mt:2,p:1,borderRadius:2,height:{xs:100,md:200}}}>
              {/* Image or video placeholder */}
            </Box>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}

export default Ai
