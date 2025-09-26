import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
  Divider,
  Stack,
  Container,
  useMediaQuery,
  useTheme,
  Chip,
  Avatar
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import siteLogo from "../logo.jpg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Style } from './Style';

import { useNavigate } from "react-router-dom";
const Header = () => {
  const [menuAnchors, setMenuAnchors] = useState({ courses: null, services: null });
  const [expandedKeys, setExpandedKeys] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();

  const openMenu = (key, event) => {
    setMenuAnchors((prev) => ({ ...prev, [key]: event.currentTarget }));
  };

  const closeMenu = (key) => {
    setMenuAnchors((prev) => ({ ...prev, [key]: null }));
  };

  const toggleExpand = (key) => {
    setExpandedKeys((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isExpanded = (key) => Boolean(expandedKeys[key]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navigationItems = [
    { label: 'Home', path: '/home' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact Us', path: '/contactUs' }
  ];

  return (
    <AppBar 
      position="sticky" 
      elevation={0}
      sx={{ 
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)',
        color: Style.colors.text.primary,
        transition: 'all 0.3s ease'
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ px: { xs: 2, md: 0 } }}>
          {/* Logo Section */}
          <Stack 
            direction="row" 
            alignItems="center" 
            spacing={2} 
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/home')}
          >
            <Avatar 
              src={siteLogo} 
              alt="Bharata Vaidyal" 
              sx={{ 
                width: 48, 
                height: 48, 
                borderRadius: 2,
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }} 
            />
            <Box>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 700,
                  background: Style.colors.gradients.primary,
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontSize: { xs: '1.1rem', md: '1.25rem' }
                }}
              >
                InnoHub
              </Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: Style.colors.text.secondary,
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}
              >
                Education Excellence
              </Typography>
            </Box>
          </Stack>

          {/* Desktop Navigation */}
          {!isMobile && (
            <Stack direction="row" spacing={1} alignItems="center">
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => navigate(item.path)}
                  sx={{
                    color: Style.colors.text.primary,
                    fontWeight: 600,
                    textTransform: 'none',
                    px: 2,
                    py: 1,
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      background: Style.colors.gradients.primary,
                      color: 'white',
                      transform: 'translateY(-2px)',
                      boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}

              {/* Courses Menu */}
              <Button
                onClick={(e) => openMenu("courses", e)}
                endIcon={menuAnchors.courses ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                sx={{
                  color: Style.colors.text.primary,
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: Style.colors.gradients.primary,
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                  }
                }}
              >
                Courses
              </Button>

              {/* Services Menu */}
              <Button
                onClick={(e) => openMenu("services", e)}
                endIcon={menuAnchors.services ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                sx={{
                  color: Style.colors.text.primary,
                  fontWeight: 600,
                  textTransform: 'none',
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: Style.colors.gradients.primary,
                    color: 'white',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.3)'
                  }
                }}
              >
                Services
              </Button>

              <Chip 
                label="Enroll Now" 
                onClick={() => navigate('/contactUs')}
                sx={{
                  background: Style.colors.gradients.primary,
                  color: 'white',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 12px rgba(102, 126, 234, 0.4)'
                  }
                }}
              />
            </Stack>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <IconButton
              onClick={toggleMobileMenu}
              sx={{
                color: Style.colors.text.primary,
                background: 'rgba(102, 126, 234, 0.1)',
                '&:hover': {
                  background: 'rgba(102, 126, 234, 0.2)'
                }
              }}
            >
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          )}
        </Toolbar>

        {/* Mobile Menu */}
        {isMobile && mobileMenuOpen && (
          <Box sx={{ 
            background: 'white', 
            borderTop: '1px solid rgba(0,0,0,0.08)',
            py: 2
          }}>
            <Stack spacing={1} sx={{ px: 2 }}>
              {navigationItems.map((item) => (
                <Button
                  key={item.label}
                  onClick={() => {
                    navigate(item.path);
                    setMobileMenuOpen(false);
                  }}
                  sx={{
                    color: Style.colors.text.primary,
                    fontWeight: 600,
                    textTransform: 'none',
                    justifyContent: 'flex-start',
                    px: 2,
                    py: 1.5,
                    borderRadius: 2,
                    '&:hover': {
                      background: Style.colors.gradients.primary,
                      color: 'white'
                    }
                  }}
                >
                  {item.label}
                </Button>
              ))}
              <Button
                sx={{
                  ...Style.ModernButton,
                  justifyContent: 'center',
                  mt: 2
                }}
                onClick={() => {
                  navigate('/contactUs');
                  setMobileMenuOpen(false);
                }}
              >
                Get Started
              </Button>
            </Stack>
          </Box>
        )}
      </Container>

      {/* Courses Dropdown Menu */}
      <Menu
        anchorEl={menuAnchors.courses}
        open={Boolean(menuAnchors.courses)}
        onClose={() => closeMenu("courses")}
        MenuListProps={{ 
          sx: { 
            width: 400, 
            p: 2,
            background: Style.colors.gradients.card,
            borderRadius: 3,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid rgba(0,0,0,0.05)'
          } 
        }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 3
          }
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: Style.colors.text.primary }}>
          Our Courses
        </Typography>
        <List disablePadding>
          <ListItem
            secondaryAction={
              <IconButton 
                edge="end" 
                onClick={() => toggleExpand("courses.medical")}
                sx={{ color: Style.colors.primary }}
              >
                {isExpanded("courses.medical") ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
              </IconButton>
            }
          >
            <ListItemButton onClick={() => toggleExpand("courses.medical")}>
              <ArrowRightIcon sx={{ fontSize: 20, color: Style.colors.primary, mr: 1 }} />
              <ListItemText 
                primary="Medical" 
                primaryTypographyProps={{ 
                  fontSize: 16, 
                  fontWeight: 600,
                  color: Style.colors.text.primary
                }} 
              />
            </ListItemButton>
          </ListItem>
          
          {isExpanded("courses.medical") && (
            <Box sx={{ pl: 4, mb: 1 }}>
              <ListItemButton 
                onClick={() => {
                  closeMenu("courses");
                  navigate("/fmge");
                }}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 8, color: Style.colors.primary, mr: 2 }} />
                <ListItemText 
                  primary="FMGE" 
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </ListItemButton>
              <ListItemButton 
                onClick={() => {
                  closeMenu("courses");
                  navigate("/neet");
                }}
                sx={{ borderRadius: 2, mb: 0.5 }}
              >
                <FiberManualRecordIcon sx={{ fontSize: 8, color: Style.colors.primary, mr: 2 }} />
                <ListItemText 
                  primary="NEET PG" 
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </ListItemButton>
              <ListItemButton sx={{ borderRadius: 2 }}>
                <FiberManualRecordIcon sx={{ fontSize: 8, color: Style.colors.primary, mr: 2 }} />
                <ListItemText 
                onClick={() => {
                  closeMenu("courses");
                  navigate("/CPR");
                }
                }
                  primary="CPR & Medical Skills" 
                  primaryTypographyProps={{ fontSize: 14 }}
                />
              </ListItemButton>
            </Box>
          )}

          <Divider sx={{ my: 2 }} />

          <ListItem
            secondaryAction={
              <IconButton 
                edge="end" 
                onClick={() => toggleExpand("courses.engineering")}
                sx={{ color: Style.colors.primary }}
              >
                {isExpanded("courses.engineering") ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}
              </IconButton>
            }
          >
            <ListItemButton onClick={() => toggleExpand("courses.engineering")}>
              <ArrowRightIcon sx={{ fontSize: 20, color: Style.colors.primary, mr: 1 }} />
              <ListItemText 
                primary="Engineering" 
                primaryTypographyProps={{ 
                  fontSize: 16, 
                  fontWeight: 600,
                  color: Style.colors.text.primary
                }} 
              />
            </ListItemButton>
          </ListItem>
          
          {isExpanded("courses.engineering") && (
            <Box sx={{ pl: 4 }}>
              {['Drone', 'Robotics', 'AI', 'Electronics'].map((course) => (
                <ListItemButton 
                  key={course}
                  sx={{ borderRadius: 2, mb: 0.5 }}
                >
                  <FiberManualRecordIcon sx={{ fontSize: 8, color: Style.colors.primary, mr: 2 }} />
                 <ListItemText
  onClick={() => {
    navigate(
      course === "Drone"
        ? "/Drone"
        : course === "Robotics"
        ? "/Robotic"
        : course === "AI"
        ? "/AI"
        : course === "Electronics"
        ? "/Electronics"
        : "/"
    );
  }}
  primary={course}
  primaryTypographyProps={{ fontSize: 14 }}
/>

                </ListItemButton>
              ))}
            </Box>
          )}
        </List>
      </Menu>

      {/* Services Dropdown Menu */}
      <Menu
        anchorEl={menuAnchors.services}
        open={Boolean(menuAnchors.services)}
        onClose={() => closeMenu("services")}
        MenuListProps={{ 
          sx: { 
            width: 450, 
            p: 2,
            background: Style.colors.gradients.card,
            borderRadius: 3,
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: '1px solid rgba(0,0,0,0.05)'
          } 
        }}
        PaperProps={{
          sx: {
            mt: 1,
            borderRadius: 3
          }
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, mb: 2, color: Style.colors.text.primary }}>
          Our Services
        </Typography>
        <List disablePadding>
          {[
            'Job Placements & Career Guidance',
            'BSC Nursing & Allied Health Sciences',
            'Medical & Engineering Admissions (India & Abroad)',
            'Corporate Training Programs',
            'Internship Opportunities'
          ].map((service, index) => (
            <ListItemButton 
              key={index}
              onClick={() => {
                closeMenu("services");
                navigate("Job Placements & Career Guidance" === service ? "/jobplacements" :
                         "BSC Nursing & Allied Health Sciences" === service ? "/bscnursing" :
                         "Medical & Engineering Admissions (India & Abroad)" === service ? "/medical" :
                         "Corporate Training Programs" === service ? "/corporate" :
                         "Internship Opportunities" === service ? "/internship" : "/");
              }}
              sx={{ 
                borderRadius: 2, 
                mb: 0.5,
                '&:hover': {
                  background: Style.colors.gradients.primary,
                  color: 'white'
                }
              }}
            >
              <FiberManualRecordIcon sx={{ fontSize: 8, color: Style.colors.primary, mr: 2 }} />
              <ListItemText 
                primary={service} 
                primaryTypographyProps={{ fontSize: 14 }}
              />
            </ListItemButton>
          ))}
        </List>
      </Menu>
    </AppBar>
  );
};

export default Header;