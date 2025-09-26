import React from "react";
import { Box, Container, Grid, Typography, List, ListItemButton, ListItemText, Divider, Stack, IconButton } from "@mui/material";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from '../logo.jpg';
import { Style } from "./Style";

const Footer = () => {
  const linkStyle = {
    color: "#ffffff",
    textDecoration: "none",
    width: "100%",
    display: "block",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.3)",
      borderRadius: 1,
    },
  };

  return (
    <Box component="footer" sx={{ background: Style.colors.gradients.primary, color: "#ffffff", mt: 6, pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} sx={{...Style.GridLayout4colums}}>

          {/* Company Info */}
          <Grid item xs={12} md={3}>
            <img src={Logo} alt="Logo" style={{ width: "100px" }} />
            <Typography variant="h6" gutterBottom sx={{ mt: 1 }}>
              Bharata Vaidyal
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Excellence in Medical and<br />
              Engineering education and services.
            </Typography>
            <Stack direction="row" spacing={2}>
              <IconButton component="a" href="https://facebook.com" target="_blank" sx={{ color: "#ffffff" }}><FaFacebookF /></IconButton>
              <IconButton component="a" href="https://instagram.com" target="_blank" sx={{ color: "#ffffff" }}><FaInstagram /></IconButton>
              <IconButton component="a" href="https://youtube.com" target="_blank" sx={{ color: "#ffffff" }}><FaYoutube /></IconButton>
            </Stack>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom>Quick Links</Typography>
            <List dense>
              <ListItemButton component={Link} to="/about" sx={linkStyle}><ListItemText primary="About Us"   primaryTypographyProps={{ fontSize: '18px' }} /></ListItemButton>
              <ListItemButton component={Link} to="/home" sx={linkStyle}><ListItemText primary="Home"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
              <ListItemButton component={Link} to="/contactUs" sx={linkStyle}><ListItemText primary="Contact Us"   primaryTypographyProps={{ fontSize: '18px'  }} /></ListItemButton>
            </List>
          </Grid>

          {/* Courses */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom>Courses</Typography>
            <List dense>
              <ListItemButton component={Link} to="/FMGE" sx={linkStyle}><ListItemText primary="FMGE"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
              <ListItemButton component={Link} to="/neet" sx={linkStyle}><ListItemText primary="NEET PG"   primaryTypographyProps={{ fontSize: '18px'  }} /></ListItemButton>
              <ListItemButton component={Link} to="/CPR" sx={linkStyle}><ListItemText primary="CPR & Medical Skills"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
              <ListItemButton component={Link} to="/Drone" sx={linkStyle}><ListItemText primary="Drone"   primaryTypographyProps={{ fontSize: '18px'  }} /></ListItemButton>
              <ListItemButton component={Link} to="/Robotic" sx={linkStyle}><ListItemText primary="Robotics"   primaryTypographyProps={{ fontSize: '18px'  }} /></ListItemButton>
              <ListItemButton component={Link} to="/Ai" sx={linkStyle}><ListItemText primary="AI"   primaryTypographyProps={{ fontSize: '18px'  }} /></ListItemButton>
              <ListItemButton component={Link} to="/Electronics" sx={linkStyle}><ListItemText primary="Electronics"   primaryTypographyProps={{ fontSize: '18px'  }} /></ListItemButton>
              <ListItemButton component={Link} to="/bscnursing" sx={linkStyle}><ListItemText primary="BSC Nursing & Allied Health"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
              <ListItemButton component={Link} to="/corporate" sx={linkStyle}><ListItemText primary="Corporate Training"   primaryTypographyProps={{ fontSize: '18px'  }} /></ListItemButton>
          
            </List>
          </Grid>

          {/* Services */}
          <Grid item xs={12} md={3}>
            <Typography variant="h5" gutterBottom>Services</Typography>
            <List dense>
              <ListItemButton component={Link} to="/jobplacements" sx={linkStyle}><ListItemText primary="Providing Jobs"    primaryTypographyProps={{ fontSize: '18px'  }} 
/></ListItemButton>
              <ListItemButton component={Link} to="/bscnursing" sx={linkStyle}><ListItemText primary="Nursing Postings & Internship"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
              <ListItemButton component={Link} to="/admissions" sx={linkStyle}><ListItemText primary="Medical & Engineering Admissions"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
                <ListItemButton component={Link} to="/jobplacements" sx={linkStyle}><ListItemText primary="Job Placements"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
              <ListItemButton component={Link} to="/medical" sx={linkStyle}><ListItemText primary="Medical Admissions"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>
                         <ListItemButton component={Link} to="/internship" sx={linkStyle}><ListItemText primary="Internship"  primaryTypographyProps={{ fontSize: '18px'  }}  /></ListItemButton>

            </List>
          </Grid>

        </Grid>

        <Divider sx={{ my: 3, borderColor: "rgba(255,255,255,0.2)" }} />

        <Typography variant="body2" align="center">
          © {new Date().getFullYear()} Bharata Vaidyal. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
