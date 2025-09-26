import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Chip,
  Stack
} from '@mui/material';
import {
  School,
  Engineering,
  MedicalServices,
  Science
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { Style } from './Style';
import logo from '../../src/logo.jpg'
const Dashbord = () => {
  const navigate = useNavigate();

  const dashboardContent = [
    {
      id: 'fmge',
      title: 'FMGE Course',
      description: 'Foreign Medical Graduate Examination Preparation',
      image: logo,
      icon: <MedicalServices />,
      color: '#1976d2',
      route: '/home',
      features: ['Expert Faculty', 'Video Lectures', 'Mock Tests', '95% Pass Rate']
    },
    {
      id: 'neet',
      title: 'NEET PG Course',
      description: 'National Eligibility cum Entrance Test for Post Graduate',
  image: logo,
      icon: <School />,
      color: '#2e7d32',
      route: '/neet',
      features: ['Live Classes', 'Test Series', '90% Success Rate', '8000+ Students']
    },
    {
      id: 'engineering',
      title: 'Engineering Courses',
      description: 'Advanced Engineering and Technology Programs',
  image: logo,
      icon: <Engineering />,
      color: '#f57c00',
      route: '/engineering',
      features: ['Drone Technology', 'Robotics', 'AI & ML', 'Electronics']
    },
    {
      id: 'medical-skills',
      title: 'Medical Skills',
      description: 'CPR & Advanced Medical Skills Training',
  image: logo,
      icon: <Science />,
      color: '#d32f2f',
      route: '/medical-skills',
      features: ['CPR Training', 'Medical Skills', 'Certification', 'Hands-on Practice']
    }
  ];

  const handleCardClick = (route) => {
    navigate(route);
  };

  return (
    <>
      <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
        <Box
          sx={{
            background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
            color: 'white',
            py: 8,
            textAlign: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 'bold', mb: 2 }}>
              Welcome to Bharata Vaidyal
            </Typography>
            <Typography variant="h5" sx={{ mb: 4, opacity: 0.9 }}>
              Excellence in Medical and Engineering Education
            </Typography>
            <Typography variant="body1" sx={{ fontSize: '1.2rem', maxWidth: '600px', mx: 'auto', opacity: 0.8 }}>
              Choose your path to success with our comprehensive courses designed by industry experts
            </Typography>
          </Container>
        </Box>

        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Typography
            variant="h3"
            component="h2"
            gutterBottom
            sx={{
              ...Style.CommonHeading,
              color: '#1976d2',
              mb: 6
            }}
          >
            Our Courses
          </Typography>

          <Grid container spacing={4} sx={{ ...Style.GridLayout }}>
            {dashboardContent.map((course) => (
              <Grid item xs={12} sm={6} md={6} key={course.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    borderRadius: 3,
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 16px 48px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <CardActionArea
                    onClick={() => handleCardClick(course.route)}
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <Box
                      sx={{
                        height: 200,
                        background: `linear-gradient(135deg, ${course.color}20 0%, ${course.color}40 100%)`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative'
                      }}
                    >
                      <Box
                        sx={{
                          // width: 80,
                          // height: 80,
                          borderRadius: '50%',
                          backgroundColor: course.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'white',
                          fontSize: '2rem'
                        }}
                      >
                        <Box
                          component="img"
                          src={course.image}
                          alt={course.title}
                          sx={{
                            width: "100%",
                            height: 200,
                            objectFit: "cover",
                            borderRadius: 2
                          }}
                        />

                        {/* {course.icon} */}
                      </Box>
                      <Chip
                        label="Click to Explore"
                        size="small"
                        sx={{
                          position: 'absolute',
                          top: 16,
                          right: 16,
                          backgroundColor: 'rgba(255,255,255,0.9)',
                          color: course.color,
                          fontWeight: 600
                        }}
                      />
                    </Box>

                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      {/* <Typography
                        variant="h5"
                        component="h3"
                        gutterBottom
                        sx={{
                          fontWeight: 600,
                          color: course.color,
                          mb: 2
                        }}
                      >
                        {course.title}
                      </Typography>

                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{ mb: 3, lineHeight: 1.6 }}
                      >
                        {course.description}
                      </Typography> */}

                      {/* <Stack direction="row" spacing={1} sx={{ flexWrap: 'wrap', gap: 1 }}>
                        {course.features.map((feature, index) => (
                          <Chip
                            key={index}
                            label={feature}
                            size="small"
                            variant="outlined"
                            sx={{
                              borderColor: course.color,
                              color: course.color,
                              fontSize: '0.75rem'
                            }}
                          />
                        ))}
                      </Stack> */}
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 8 }}>
            <Typography variant="h4" gutterBottom sx={{ color: '#1976d2', fontWeight: 600 }}>
              Ready to Start Your Journey?
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Contact us for more information about our courses and admission process
            </Typography>
          </Box>
        </Container>
        <Box sx={{ textAlign: "center", mt: 4, mb: 2 }}>
          <hr style={{ width: "80%", margin: "16px auto", border: "1px solid #ddd" }} />
          <Typography sx={{ fontWeight: 600, color: "text.secondary" }}>
            © 2025 - Bharata Vaidyal
          </Typography>
        </Box>
      </Box>

    </>
  );
};

export default Dashbord;