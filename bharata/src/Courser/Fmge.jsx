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
    Divider,
    Stack
} from '@mui/material';
import {
    PlayArrow,
    School,
    Schedule,
    People,
    Star,
    CheckCircle,
    VideoLibrary,
    Assignment,
    TrendingUp,
    Language
} from '@mui/icons-material';
import { Style } from '../commonComponets/Style';
import buttonimage from '../fmge & neet pg/gang.jpg';

import FMGEVIDEO from '../fmge & neet pg/Fmge-2.mp4';
import DemoVideo from '../fmge & neet pg/demo.mp4';
import TeamImage from '../fmge & neet pg/TeamImage.jpg';

const Fmge = () => {
    const features = [
        {
            icon: <School />,
            title: "Expert Faculty",
            description: "Learn from experienced medical professionals and educators"
        },
        {
            icon: <VideoLibrary />,
            title: "Video Lectures",
            description: "High-quality recorded lectures for flexible learning"
        },
        {
            icon: <Assignment />,
            title: "Mock Tests",
            description: "Regular practice tests to assess your preparation"
        },
        {
            icon: <TrendingUp />,
            title: "Success Rate",
            description: "Consistent high pass rates with our proven methodology"
        }
    ];

    const courseHighlights = [
        "Comprehensive coverage of all subjects as per NBE guidelines",
        "Regular doubt clearing sessions with subject experts",
        "Previous year question papers with detailed solutions",
        "Performance analytics and personalized study plans",
        "Mobile app for learning on-the-go",
        "24/7 student support and mentorship",
        "High-yield notes for quick revision",
        "Daily MCQ practice with instant feedback",
        "Live interactive classes with top faculty",
        "Recorded sessions for anytime access",
        "Topic-wise test series for self-assessment",
        "One-on-one mentorship for weak areas",
        "Revision marathon before exam",
        "Access to digital library and e-books",
        "Community forum for peer-to-peer learning",
        "Strategy sessions on exam preparation"
    ];

    const subjects = [
        "Anatomy", "Physiology", "Biochemistry", "Pathology", "Pharmacology",
        "Microbiology", "Forensic Medicine", "Community Medicine", "Medicine",
        "Surgery", "Obstetrics & Gynecology", "Pediatrics", "Psychiatry",
        "Dermatology", "Ophthalmology", "ENT", "Orthopedics"
    ];

    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    //   background: 'linear-gradient(135deg, #1976d2 0%, #1565c0 100%)',
                    // backgroundColor: '#f8fafc',
                    color: 'black',
                    py: 8,
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom sx={{...Style.CommonHeadingForFmg }}>
                                FMGE Preparation
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 3, opacity: 0.9 }}>
                                Foreign Medical Graduate Examination
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.6 }}>
                                Comprehensive preparation for FMGE with expert guidance, quality study materials,
                                and proven success strategies. Join thousands of successful candidates who cleared
                                FMGE with our structured approach.
                            </Typography>
                            <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                                <Chip
                                    icon={<CheckCircle />}
                                    label="NBE Approved"
                                    color="secondary"
                                    variant="outlined"
                                    sx={{ color: 'black', borderColor: 'black' }}
                                />
                                <Chip
                                    icon={<People />}
                                    label="5000+ Students"
                                    color="secondary"
                                    variant="outlined"
                                    sx={{ color: 'black', borderColor: 'black' }}
                                />
                                <Chip
                                    icon={<Star />}
                                    label="95% Pass Rate"
                                    color="secondary"
                                    variant="outlined"
                                    sx={{ color: 'black', borderColor: 'black' }}
                                />
                            </Stack>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    backgroundColor: 'white',
                                    color: '#1976d2',
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
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom sx={{ ...Style.CommonHeading ,mb:8}}>
                    Why Choose Our FMGE Course?
                </Typography>
                <Container spacing={3} sx={{ ...Style.GridLayout }}>
                    {features.map((feature, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card sx={{
                              ...Style.CommonCard4
                            }}>
                                <Avatar
                                    sx={{
                                        width: 64,
                                        height: 64,
                                        mx: 'auto',
                                        mb: 2,
                                        backgroundColor: '#1976d2',
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
                </Container>
            </Box>
            <Box sx={{ backgroundColor: 'white', py: 8 }}>
                <Container maxWidth="lg">
                    <Grid container spacing={6} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <Typography gutterBottom sx={{ ...Style.CommonHeading, textAlign: "start" }}>
                                Comprehensive Course Coverage
                            </Typography>
                            <Typography variant="body1" sx={{ mb: 4, fontSize: '1.1rem', lineHeight: 1.7 }}>
                                Our FMGE course covers all 16 subjects as prescribed by the National Board of Examinations.
                                Each subject is taught by domain experts with years of experience in medical education.
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600, mb: 2 }}>
                                    Course Highlights:
                                </Typography>
                                <Box sx={{ ...Style.GridLayout }}>
                                    <List >
                                        {courseHighlights.map((highlight, index) => (
                                            <ListItem key={index} sx={{ px: 0 }}>
                                                <ListItemIcon>
                                                    <CheckCircle color="primary" />
                                                </ListItemIcon>
                                                <ListItemText primary={highlight} />
                                            </ListItem>
                                        ))}
                                    </List>
                                    <Box
                                        component="img"
                                        src={TeamImage}
                                        alt="Team"
                                        sx={{ width: "100%", height: "auto" }}
                                    />
                                </Box>
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
                                            color="primary"
                                            size="small"
                                        />
                                    ))}
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Video Section */}
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Typography gutterBottom sx={{ ...Style.CommonHeading ,mb:5}}>
                    Our Lectures
                </Typography>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Card sx={{ overflow: 'hidden', boxShadow: '0 8px 32px rgba(0,0,0,0.1)' }}>
                            <Box sx={{ position: 'relative' }}>
                                <CardMedia
                                    component="video"
                                    height="250"
                                    src={FMGEVIDEO}
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
                                    Anatomy - Cardiovascular System
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Comprehensive coverage of cardiovascular anatomy with clinical correlations
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
                                    src={DemoVideo}
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
                                    Physiology - Respiratory System
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Detailed explanation of respiratory physiology and pathophysiology
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>

            {/* Call to Action */}
            <Box
                sx={{
                    // background: 'linear-gradient(135deg, #1565c0 0%, #1976d2 100%)',
                    // color: 'white',
                    py: 8
                }}
            >
                <Container maxWidth="md" sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" component="h2" gutterBottom sx={{ ...Style.CommonHeading,mb:5 ,fontSize:"2.5rem"}}>
                        Ready to Start Your FMGE Journey?
                    </Typography>
                    <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
                        Join thousands of successful medical graduates who cleared FMGE with our comprehensive program
                    </Typography>
                    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 4 }}>
                        <Button
                            variant="contained"
                            size="large"
                            sx={{
                                backgroundColor: 'white',
                                color: '#1976d2',
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
                                // borderColor: 'white',
                                // color: '#1976d2',
                                px: 4,
                                py: 1.5,
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                // '&:hover': {
                                //     borderColor: 'white',
                                //     backgroundColor: 'rgba(255,255,255,0.1)'
                                // }
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

export default Fmge;