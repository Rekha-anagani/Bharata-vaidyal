import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Chip,
  Avatar,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import {
  School,
  People,
  Star,
  CheckCircle,
  VideoLibrary,
  Assignment,
  TrendingUp,
  Timer,
  EmojiEvents,
  Bookmark
} from '@mui/icons-material';
import { Style } from '../commonComponets/Style';
import buttonimage from '../fmge & neet pg/gang.jpg';
import SampleVideo from '../fmge & neet pg/neetpgvideosample.mp4';
import demo from '../fmge & neet pg/demovideoNeet.mp4'

const Neetpg = () => {
  const features = [
    {
      icon: <School />,
      title: "Expert Faculty",
      description: "Learn from top medical professors and NEET PG specialists"
    },
    {
      icon: <VideoLibrary />,
      title: "Live Classes",
      description: "Interactive live sessions with real-time doubt clearing"
    },
    {
      icon: <Assignment />,
      title: "Test Series",
      description: "Comprehensive test series with detailed performance analysis"
    },
    {
      icon: <TrendingUp />,
      title: "High Success Rate",
      description: "Proven track record with 90%+ selection rate in top colleges"
    }
  ];

  const courseHighlights = [
    "Comprehensive coverage of all 19 subjects as per NBE syllabus",
    "Live interactive classes with experienced faculty",
    "Extensive question bank with 50,000+ questions",
    "Detailed performance analytics and rank prediction",
    "Dedicated doubt clearing sessions",
    "Mobile app with offline content access",
    "Mock tests simulating actual NEET PG pattern",
    "Personal mentorship and career guidance"
  ];

  const subjects = [
    "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
    "Microbiology", "Forensic Medicine", "Community Medicine", "Medicine",
    "Surgery", "Obstetrics & Gynecology", "Pediatrics", "Psychiatry",
    "Dermatology", "Ophthalmology", "ENT", "Orthopedics", "Radiology", "Anesthesiology"
  ];

  const examPattern = [
    { subject: "Anatomy", questions: 15, marks: 60 },
    { subject: "Physiology", questions: 15, marks: 60 },
    { subject: "Biochemistry", questions: 15, marks: 60 },
    { subject: "Pathology", questions: 25, marks: 100 },
    { subject: "Pharmacology", questions: 20, marks: 80 },
    { subject: "Microbiology", questions: 20, marks: 80 },
    { subject: "Forensic Medicine", questions: 10, marks: 40 },
    { subject: "Community Medicine", questions: 25, marks: 100 },
    { subject: "Medicine", questions: 35, marks: 140 },
    { subject: "Surgery", questions: 35, marks: 140 },
    { subject: "Obstetrics & Gynecology", questions: 30, marks: 120 },
    { subject: "Pediatrics", questions: 20, marks: 80 },
    { subject: "Psychiatry", questions: 10, marks: 40 },
    { subject: "Dermatology", questions: 10, marks: 40 },
    { subject: "Ophthalmology", questions: 10, marks: 40 },
    { subject: "ENT", questions: 10, marks: 40 },
    { subject: "Orthopedics", questions: 10, marks: 40 },
    { subject: "Radiology", questions: 10, marks: 40 },
    { subject: "Anesthesiology", questions: 10, marks: 40 }
  ];

  return (
    <Box>
      {/* Hero Section */}
         {/* <Box sx={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}> */}

      <Box
        sx={{
          // background: 'linear-gradient(135deg, #2e7d32 0%, #388e3c 100%)',
          color: 'black',
          py: 8,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography sx={{...Style.CommonHeadingForFmg,mb:5}}>
                NEET PG Preparation
              </Typography>
              <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                National Eligibility cum Entrance Test for Post Graduate
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
                Comprehensive preparation for NEET PG with expert guidance, live classes, 
                and proven success strategies. Join thousands of successful candidates who secured 
                admission in top medical colleges with our structured approach.
              </Typography>
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                <Chip 
                  icon={<CheckCircle />} 
                  label="NBE Approved" 
                  color="secondary" 
                  variant="outlined"
                  sx={{color:"black", borderColor: 'green' }}
                />
                <Chip 
                  icon={<People />} 
                  label="8000+ Students" 
                  color="secondary" 
                  variant="outlined"
                  sx={{color:"black", borderColor:'green'  }}
                />
                <Chip 
                  icon={<Star />} 
                  label="90% Success Rate" 
                  color="secondary" 
                  variant="outlined"
                  sx={{color:"black", borderColor:'green'  }}
                />
              </Stack>
              <Button
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: 'white',
                  color: '#2e7d32',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#f5f5f5'
                  }
                }}
              >
                Enroll Now
              </Button>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src={buttonimage}
                alt="NEET PG Course"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: 2,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Course Features */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography sx={{...Style.CommonHeading}}>
          Why Choose Our NEET PG Course?
        </Typography>
        <Grid container spacing={4} sx={{...Style.GridLayout}}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Card
                sx={{
                ...Style. CommonCard4
                }}
              >
                <Avatar
                  sx={{
                    width: 64,
                    height: 64,
                    mx: 'auto',
                    mb: 2,
                    backgroundColor: '#2e7d32',
                    color: 'white'
                  }}
                >
                  {feature.icon}
                </Avatar>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Exam Pattern */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography sx={{...Style.CommonHeading}}>
            NEET PG Exam Pattern
          </Typography>
          <Grid container spacing={6} sx={{...Style.GridLayout}}>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: 2,
                  backgroundColor: '#f8fafc'
                }}
              >
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3, color: '#2e7d32' }}>
                  Exam Details:
                </Typography>
                <List>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Timer color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Duration" 
                      secondary="3 hours 30 minutes" 
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Assignment color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Total Questions" 
                      secondary="200 questions" 
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <EmojiEvents color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Total Marks" 
                      secondary="800 marks" 
                    />
                  </ListItem>
                  <ListItem sx={{ px: 0 }}>
                    <ListItemIcon>
                      <Bookmark color="primary" />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Marking Scheme" 
                      secondary="+4 for correct, -1 for incorrect" 
                    />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <TableContainer component={Paper} elevation={3}>
                <Table size="small">
                  <TableHead>
                    <TableRow sx={{ backgroundColor: '#2e7d32' }}>
                      <TableCell sx={{ color: 'white', fontWeight: 600 }}>Subject</TableCell>
                      <TableCell align="center" sx={{ color: 'white', fontWeight: 600 }}>Questions</TableCell>
                      <TableCell align="center" sx={{ color: 'white', fontWeight: 600 }}>Marks</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {examPattern.map((row, index) => (
                      <TableRow key={index} hover>
                        <TableCell>{row.subject}</TableCell>
                        <TableCell align="center">{row.questions}</TableCell>
                        <TableCell align="center">{row.marks}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
          <Typography sx={{...Style.CommonHeading,textAlign:"start"}}>
              Comprehensive Course Coverage
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
              Our NEET PG course covers all 19 subjects as prescribed by the National Board of Examinations. 
              Each subject is taught by domain experts with years of experience in medical education and NEET PG preparation.
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                Course Highlights:
              </Typography>
              <List>
                {courseHighlights.map((highlight, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon>
                      <CheckCircle color="primary" />
                    </ListItemIcon>
                    <ListItemText primary={highlight} />
                  </ListItem>
                ))}
              </List>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 2,
                backgroundColor: '#f8fafc'
              }}
            >
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 3 }}>
                Subjects Covered:
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {subjects.map((subject, index) => (
                  <Chip
                    key={index}
                    label={subject}
                    variant="outlined"
                    color="success"
                    size="small"
                  />
                ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Video Section */}
      <Box sx={{ backgroundColor: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <Typography sx={{...Style.CommonHeading}}>
           Our Lectures
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card sx={{ overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="video"
                    height="250"
                    src={SampleVideo}
                    controls
                    sx={{ backgroundColor: '#000' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="caption">Sample Lecture</Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Pathology - Neoplasia
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Comprehensive coverage of neoplastic diseases with clinical correlations and imaging
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card sx={{ overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                <Box sx={{ position: 'relative' }}>
                  <CardMedia
                    component="video"
                    height="250"
                    src={demo}
                    controls
                    sx={{ backgroundColor: '#000' }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: 'rgba(0,0,0,0.7)',
                      color: 'white',
                      px: 2,
                      py: 1,
                      borderRadius: 1
                    }}
                  >
                    <Typography variant="caption">Demo Video</Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Medicine - Cardiology
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Detailed explanation of cardiovascular diseases and their management
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Success Stories */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography sx={{...Style.CommonHeading}}>
          Success Stories
        </Typography>
        <Grid container spacing={4} sx={{...Style.GridLayout3colums}}>
          <Grid item xs={12} md={6}>
            <Card sx={{ p: 3, textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' ,cursor:"pointer"}}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, backgroundColor: '#2e7d32' }}>
                <People />
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2e7d32' }}>
                8000+
              </Typography>
              <Typography variant="h6" gutterBottom>
                Students Enrolled
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Successfully prepared students for NEET PG across India
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',cursor:"pointer" }}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, backgroundColor: '#2e7d32' }}>
                <EmojiEvents />
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2e7d32' }}>
                90%
              </Typography>
              <Typography variant="h6" gutterBottom>
                Success Rate
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Consistent high selection rate in top medical colleges
              </Typography>
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <Card sx={{ p: 3, textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' ,cursor:"pointer"}}>
              <Avatar sx={{ width: 80, height: 80, mx: 'auto', mb: 2, backgroundColor: '#2e7d32' }}>
                <Star />
              </Avatar>
              <Typography variant="h5" gutterBottom sx={{ fontWeight: 600, color: '#2e7d32' }}>
                4.8/5
              </Typography>
              <Typography variant="h6" gutterBottom>
                Student Rating
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Excellent feedback from our students and alumni
              </Typography>
            </Card>
          </Grid>
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          // background: 'linear-gradient(135deg, #388e3c 0%, #2e7d32 100%)',
          color: 'black',
          py: 8
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: 'center' }}>
          <Typography sx={{...Style.CommonHeading}}>
            Ready to Secure Your PG Seat?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
            Join thousands of successful medical graduates who secured admission in top colleges with our comprehensive program
          </Typography>
          <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#2e7d32',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: '#f5f5f5'
                }
              }}
            >
              Enroll Now
            </Button>
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: 'white',
                color: '#2e7d32',
                px: 4,
                py: 1.5,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              Download Brochure
            </Button>
          </Stack>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            For more information, contact us at info@bharatavaidyal.com or call +91-XXXXXXXXXX
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Neetpg;
