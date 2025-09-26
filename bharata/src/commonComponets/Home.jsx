import React from 'react'
import { 
  Box, 
  Button, 
  Container, 
  Grid, 
  Stack, 
  Typography, 
  Card, 
  CardContent,
  Chip,
  Avatar,
  Paper
} from '@mui/material'
import { useNavigate, Link } from 'react-router-dom'
import { 
  School as SchoolIcon, 
  MedicalServices as MedicalServicesIcon, 
  Engineering as EngineeringIcon,
  ShowChart as ShowChartIcon,   // Alternative to TrendingUpIcon
  Group as GroupIcon,
  Star as StarIcon,
  CheckCircle as CheckCircleIcon
} from '@mui/icons-material';

import HeroImg from '../imageGallarey/Innohubimage.png'
import { Style } from './Style'

const Home = () => {
  const navigate = useNavigate()

  const courses = [
    { 
      title: 'FMGE', 
      desc: 'Comprehensive syllabus coverage and mock tests', 
      cta: '/fmge',
      icon: <MedicalServicesIcon />,
      color: '#ff6f00'
    },
    { 
      title: 'NEET PG', 
      desc: 'High-yield concepts with case discussions', 
      cta: '/neet',
      icon: <SchoolIcon />,
      color: '#1976d2'
    },
    { 
      title: 'CPR & Skills', 
      desc: 'Emergency response and practical skills', 
      cta: '/home',
      icon: <MedicalServicesIcon />,
      color: '#4caf50'
    },
  ]

  const features = [
    { icon: <ShowChartIcon />, text: 'Expert mentors and structured curriculum' },
    { icon: <EngineeringIcon />, text: 'Real-world labs and simulation' },
    { icon: <GroupIcon />, text: 'Career guidance and placements' },
    { icon: <StarIcon />, text: 'Industry-recognized certifications' }
  ]

  return (
    <Box>
      {/* Modern Hero Section */}
      <Box
        sx={{
        ...Style.heroSectionHome,
        }}
      >
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={3} alignItems="center" sx={{...Style.GridLayout}}>
            <Grid item xs={12} md={6}>
              <Chip 
                label="🚀 Leading Education Platform" 
                sx={{ 
                  mb: 3, 
                  background: 'rgba(255,255,255,0.2)', 
                  color: 'white',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.3)'
                }} 
              />
              <Typography 
                variant="h2" 
                sx={{ 
                  ...Style.typography.hero,
                  color: 'white',
                  mb: 3,
                  textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                Empowering InnoHub Careers
              </Typography>
              <Typography 
                variant="h5" 
                sx={{ 
                  mb: 4, 
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.6,
                  maxWidth: '600px'
                }}
              >
                Transform your career with our comprehensive programs in FMGE, NEET PG, CPR & Medical Skills, and cutting-edge Engineering courses.
              </Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={3} sx={{ mb: 4 }}>
                <Button 
                  variant="contained" 
                  sx={{
                    ...Style.ModernButton,
                    background: 'rgba(255,255,255,0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.3)',
                      transform: 'translateY(-3px)'
                    }
                  }}
                  onClick={() => navigate('/fmge')}
                >
                  Explore FMGE
                </Button>
                <Button 
                  variant="outlined" 
                  sx={{
                    ...Style.SecondaryButton,
                    borderColor: 'rgba(255,255,255,0.8)',
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(255,255,255,0.2)',
                      borderColor: 'white'
                    }
                  }}
                  onClick={() => navigate('/neet')}
                >
                  Explore NEET PG
                </Button>
              </Stack>
            </Grid>
            <Grid item xs={12} md={5}>
              <Box
                sx={{
               ...Style.homepaper
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, fontWeight: 700,color: "rgba(89, 133, 195, 0.8)",
 }}>
                  Why Choose Bharata Vaidyal?
                </Typography>
                <Stack spacing={2}>
                  {features.map((feature, index) => (
                    <Stack key={index} direction="row" spacing={2} alignItems="center">
                      <Avatar sx={{ 
                        width: 40, 
                        height: 40, 
                        background: 'rgba(255,255,255,0.2)',
color: "rgba(89, 133, 195, 0.8)"                      }}>
                        {feature.icon}
                      </Avatar>
                      <Typography sx={{color: "rgba(89, 133, 195, 0.8)" }}>
                        {feature.text}
                      </Typography>
                    </Stack>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Popular Courses Section */}
      <Box sx={{ ...Style.Section,  }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography sx={Style.CommonHeading}>
              Our Popular Tracks
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: Style.colors.text.secondary, 
                maxWidth: '600px', 
                mx: 'auto',
                mt: 2
              }}
            >
              Choose from our comprehensive range of medical and engineering programs designed to accelerate your career
            </Typography>
          </Box>
          
          <Grid container spacing={4} sx={{...Style.GridLayout3colums,mb:5}}>
            {courses.map((course, index) => (
              <Grid item xs={12} sm={6} md={4} key={course.title}>
                <Card 
                  sx={{ 
                    ...Style.CommonCard4,
                    height: '100%',
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`
                  }}
                  onClick={() => navigate(course.cta)}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        ...Style.IconContainer,
                        background: `linear-gradient(135deg, ${course.color} 0%, ${course.color}dd 100%)`,
                        mb: 3
                      }}
                    >
                      {course.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, mb: 2, color: Style.colors.text.primary }}>
                      {course.title}
                    </Typography>
                    <Typography sx={{ color: Style.colors.text.secondary, mb: 3, lineHeight: 1.6 }}>
                      {course.desc}
                    </Typography>
                    <Button 
                      component={Link} 
                      to={course.cta} 
                      sx={{ 
                        color: course.color,
                        fontWeight: 600,
                        '&:hover': {
                          background: `${course.color}10`
                        }
                      }}
                    >
                      Learn More →
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box sx={{ ...Style.Section,
         color: 'black' }}>
        <Container maxWidth="xl">
          <Grid container spacing={3} textAlign="center" sx={{display:"flex", justifyContent:"center"}}>
            {[
              { number: '10,000+', label: 'Students Trained' },
              { number: '95%', label: 'Success Rate' },
              { number: '50+', label: 'Expert Faculty' },
              { number: '100+', label: 'Industry Partners' }
            ].map((stat, index) => (
              <Grid item  key={index} sx={{width:{xs:"auto", md:"280px"}}}>
                <Paper elevation={6} sx={{...Style.homepaperCount,color:"grey"}}>
                <Typography variant="h3" sx={{ fontWeight: 800,  }}>
                  {stat.number}
                </Typography>
                <Typography variant="h6" sx={{ opacity: 0.9 }}>
                  {stat.label}
                </Typography>
                </Paper>
              </Grid>
              
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services CTA Section */}
      <Box sx={{ ...Style.Section, background: Style.colors.background }}>
        <Container maxWidth="lg">
          <Card 
            sx={{ 
              background: Style.colors.gradients.card,
              borderRadius: 4,
              p: 6,
              boxShadow: '0 16px 48px rgba(0,0,0,0.1)',
              border: '1px solid rgba(0,0,0,0.05)'
            }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={8}>
                <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                  <CheckCircleIcon sx={{ color: Style.colors.success }} />
                  <Typography variant="h5" sx={{ fontWeight: 700, color: Style.colors.text.primary }}>
                    Comprehensive Services for Students and Institutions
                  </Typography>
                </Stack>
                <Typography variant="h6" sx={{ color: Style.colors.text.secondary, lineHeight: 1.6 }}>
                  From job placements to admissions support, we provide end-to-end career services across India and abroad.
                </Typography>
                <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
                  <Chip label="Job Placements" sx={{ background: `${Style.colors.success}20`, color: Style.colors.success }} />
                  <Chip label="Internships" sx={{ background: `${Style.colors.primary}20`, color: Style.colors.primary }} />
                  <Chip label="Admissions Support" sx={{ background: `${Style.colors.secondary}20`, color: Style.colors.secondary }} />
                </Stack>
              </Grid>
              <Grid item xs={12} md={4}>
                <Stack direction={{ xs: 'column', sm: 'row', md: 'row' }} spacing={2} justifyContent="flex-end">
                  <Button 
                    sx={Style.ModernButton}
                    onClick={() => navigate('/services')}
                  >
                    View Services
                  </Button>
                  <Button 
                    sx={Style.SecondaryButton}
                    onClick={() => navigate('/contactUs')}
                  >
                    Contact Us
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Container>
      </Box>
    </Box>
  )
}

export default Home 