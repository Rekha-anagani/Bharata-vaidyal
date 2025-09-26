import React from 'react'
import { Box, Container, Typography, Grid, Card, CardContent, List, ListItem, ListItemText, Chip, Stack, Divider, CardMedia, ImageList, ImageListItem, Paper } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import SchoolIcon from '@mui/icons-material/School'
import HandshakeIcon from '@mui/icons-material/Handshake'
import Mou from '../imageGallarey/Mouimage.jpg';
import Media from '../imageGallarey/MediaCoverageimage.png';
import Innohub from '../imageGallarey/InnohubPatens.png';
import InnhubAuthorisations from '../imageGallarey/InnohubAuthrization.png';
import TrainingCenter from '../imageGallarey/traingingCenter.png';
import OurCorses from '../imageGallarey/ourCorsesandTraings.png';
import OurBranch from '../imageGallarey/OuerBraches.png';
import { Style } from './Style'
const SectionTitle = ({ icon, title, subtitle }) => (
  <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
    <Box sx={{ color: '#f7c948' }}>{icon}</Box>
    <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1' }}>{title}</Typography>
    {subtitle && <Typography variant="body2" sx={{ ml: 1, color: '#546e7a' }}>{subtitle}</Typography>}
  </Stack>
)

const AboutUs = () => {
  return (
    <Box >

      {/* <Card elevation={0} sx={{ borderRadius: 0 }}>
          <CardMedia component="img" height="280" alt="INNOHUB" sx={{ objectFit: 'contain', background: '#f7f9fc', py: 3 }} />
        </Card> */}

      <Container maxWidth="lg" >
        <Box sx={{ py: 4 }}>
          <Container maxWidth="lg">
            <Typography variant="h3" fontWeight={700} sx={{...Style.CommonHeadingForAbout,mb:3}}>About Us</Typography>
            <Typography variant="subtitle1" sx={{ mt: 1, opacity: 0.95 }}>INNOHUB — Chintavari Innovations Private Limited</Typography>
          </Container>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <Card elevation={2} sx={{ borderRadius: 2 }}>
              <CardContent>
                <SectionTitle icon={<RocketLaunchIcon color="primary" />} title="Who We Are" />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  Dr. Naveen Kumar Reddy Chinta is a medical practitioner, innovator, and entrepreneur. INNOHUB is our trademark of Chintavari Innovations Private Limited, incorporated on 13 Nov 2018 by founders Dr. Chinta Naveen Kumar Reddy and Velagalalakshmisudha.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Our vision is to encourage everyone to generate innovative ideas in the fields of science and medicine, including robotics, sensors, agriculture, and across industries. We keep pace with the latest technologies in IT and Computer Science. Our team has vast experience in medicine, education, marketing, e‑learning, and IT.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  We inspire young people to be science and technology leaders and innovators by engaging them in Robotics, Sensors, and Drones, among others.
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={2} sx={{ mt: 4, borderRadius: 2 }}>
              <CardContent>
                <SectionTitle icon={<BuildCircleIcon color="secondary" />} title="Mission" />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  To provide training to kids, school and college students through student‑centric experiential learning using robotic software and hardware tools — shaping a strong backbone for Indian automation needs.
                </Typography>
              </CardContent>
            </Card>

            <Card elevation={2} sx={{ mt: 4, borderRadius: 2 }}>
              <CardContent>
                <SectionTitle icon={<EmojiEventsIcon sx={{ color: '#ff9800' }} />} title="Achievements" />
                <List dense sx={{ mt: 1 }}>
                  <ListItem><ListItemText primary="Approved patent: System to alert approach of an emergency vehicle" /></ListItem>
                  <ListItem><ListItemText primary="First prize for Anti‑theft locking system for vehicles — YES Summit, Pune (Dec 2019)" /></ListItem>
                  <ListItem><ListItemText primary="Best Science Seva Award — Hyderabad (Feb 2020)" /></ListItem>
                  <ListItem><ListItemText primary="COVID‑19 solutions with two patents" /></ListItem>
                  <ListItem><ListItemText primary="Designed: automatic detection of body temperature and shortness of breath in public areas" /></ListItem>
                  <ListItem><ListItemText primary="Designed: social‑distancing automatic hand sanitizer" /></ListItem>
                  <ListItem><ListItemText primary="Designed: wrist‑watch alert for handshake/face‑touch to avoid COVID‑19" /></ListItem>
                  <ListItem><ListItemText primary="Designed: ID‑card to alert social distance compliance" /></ListItem>
                </List>
              </CardContent>
            </Card>

            <Card elevation={2} sx={{ mt: 4, borderRadius: 2 }}>
              <CardContent>
                <SectionTitle icon={<SchoolIcon color="success" />} title="Academics & Programs" />
                <List dense sx={{ mt: 1 }}>
                  <ListItem><ListItemText primary="Conducting paramedical courses with university affiliation" /></ListItem>
                  <ListItem><ListItemText primary="P.G. diploma courses for medical and engineering students" /></ListItem>
                </List>
              </CardContent>
            </Card>

            <Card elevation={2} sx={{ mt: 4, borderRadius: 2 }}>
              <CardContent>
                <SectionTitle icon={<HandshakeIcon color="info" />} title="Placement Cell" />
                <Typography variant="body1" sx={{ mt: 1 }}>
                  We provide placements to all trained students from our training centres and conduct placement camps in villages, towns, and cities to help the public.
                </Typography>
              </CardContent>
            </Card>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1', mb: 2 }}>MOU with Engineering Colleges</Typography>
              <Card elevation={1} sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <CardMedia component="img" image={Mou} sx={{ objectFit: 'contain', maxHeight: 420 }} />
              </Card>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1', mb: 2 }}>Media Coverage and Awards</Typography>
              <Card elevation={1} sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <CardMedia component="img" image={Media} alt="Media Coverage and Awards" sx={{ objectFit: 'contain', maxHeight: 520 }} />
              </Card>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1', mb: 2 }}>INNOHUB Patents</Typography>
              <Card elevation={1} sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <CardMedia component="img" image={Innohub} alt="INNOHUB Patents" sx={{ objectFit: 'contain', maxHeight: 520 }} />
              </Card>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1', mb: 2 }}>INNOHUB Authorisations</Typography>
              <Card elevation={1} sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <CardMedia component="img" image={InnhubAuthorisations} alt="INNOHUB Authorisations" sx={{ objectFit: 'contain', maxHeight: 420 }} />
              </Card>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1', mb: 2 }}>Industrial Training Centre</Typography>
              <Card elevation={1} sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <CardMedia component="img" image={TrainingCenter} alt="Industrial Training Centre" sx={{ objectFit: 'contain', maxHeight: 520 }} />
              </Card>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1', mb: 2 }}>Our Courses and Products</Typography>
              <Card elevation={1} sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <CardMedia component="img" image={OurCorses} alt="Our Courses and Products" sx={{ objectFit: 'contain', maxHeight: 520 }} />
              </Card>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography variant="h5" fontWeight={700} sx={{ color: '#0d47a1', mb: 2 }}>Our Branches</Typography>
              <Card elevation={1} sx={{ borderRadius: 2, backgroundColor: '#e3f2fd' }}>
                <CardMedia component="img" image={OurBranch} alt="Our Branches" sx={{ objectFit: 'contain', maxHeight: 420 }} />
              </Card>
            </Box>

            {/* <Box sx={{ mt: 6 }}>
              <Typography variant="h6" fontWeight={700} sx={{ mb: 2 }}>Gallery</Typography>
              <ImageList cols={3} gap={12} sx={{ m: 0 }}>
                {["/logo192.png", "/logo512.png", "/favicon.ico"].map((src) => (
                  <ImageListItem key={src}>
                    <img src={src} alt={src} loading="lazy" style={{ borderRadius: 8, boxShadow: '0 4px 16px rgba(0,0,0,0.12)' }} />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box> */}
          </Grid>

          <Grid item xs={12} md={4}>
            <Card elevation={1} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#0d47a1' }}>Focus Domains</Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2, flexWrap: 'wrap' }}>
                  <Chip label="Robotics" sx={{ borderColor: '#f7c948', color: '#0d47a1' }} variant="outlined" />
                  <Chip label="Sensors" sx={{ borderColor: '#f7c948', color: '#0d47a1' }} variant="outlined" />
                  <Chip label="Agriculture" sx={{ borderColor: '#f7c948', color: '#0d47a1' }} variant="outlined" />
                  <Chip label="IT" sx={{ borderColor: '#f7c948', color: '#0d47a1' }} variant="outlined" />
                  <Chip label="Computer Science" sx={{ borderColor: '#f7c948', color: '#0d47a1' }} variant="outlined" />
                  <Chip label="Education" sx={{ borderColor: '#f7c948', color: '#0d47a1' }} variant="outlined" />
                  <Chip label="E‑Learning" sx={{ borderColor: '#f7c948', color: '#0d47a1' }} variant="outlined" />
                </Stack>
              </CardContent>
            </Card>

            <Card elevation={1} sx={{ mt: 4, borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#0d47a1' }}>Our Companies</Typography>
                <List dense sx={{ mt: 1 }}>
                  <ListItem><ListItemText primary="Surya International Tradings — Handicrafts, electrical, electronic, pharma, agricultural products" /></ListItem>
                  <ListItem><ListItemText primary="Vac Shield Pharmaceuticals Pvt. Ltd — Vaccine distribution (retail & wholesale)" /></ListItem>
                  <ListItem><ListItemText primary="CNR Foundation — Educational and micro‑business support for economically weaker sections" /></ListItem>
                  <ListItem><ListItemText primary="Dr. Naveen Hospitals — Mobile medical camps, e‑health training for medical and non‑medical individuals; corporate, schools, colleges, govt." /></ListItem>
                </List>
              </CardContent>
            </Card>

            <Card elevation={1} sx={{ mt: 4, borderRadius: 2, backgroundColor: '#fffde7' }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#0d47a1' }}>Trademark</Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>INNOHUB — the registered trademark of Chintavari Innovations Private Limited.</Typography>
              </CardContent>
            </Card>

            <Divider sx={{ my: 4 }} />
            {/* <Card elevation={1} sx={{ borderRadius: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={700} sx={{ color: '#0d47a1' }}>Founders</Typography>
                <List dense sx={{ mt: 1 }}>
                  <ListItem><ListItemText primary="Dr. Chinta Naveen Kumar Reddy" /></ListItem>
                  <ListItem><ListItemText primary="Velagalalakshmisudha" /></ListItem>
                 
                </List>
              </CardContent>
            </Card> */}

            <CardContent sx={{ ...Style.GridLayout }}>
              {/* Founders Section */}
              <Paper elevation={3} sx={{
                p: 2, mb: 2, "&:hover": {
                  backgroundColor: "#f5f5f5", // hover bg
                  boxShadow: 6,
                  cursor: "pointer"
                },
              }}>
                <Typography variant="h6" fontWeight={700} sx={{ color: "#0d47a1" }}>
                  Founders
                </Typography>
                <List dense sx={{ mt: 1 }}>
                  <ListItem>
                    <ListItemText primary="Dr. Chinta Naveen Kumar Reddy" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Velagalalakshmisudha" />
                  </ListItem>
                </List>
              </Paper>

              {/* Directors Section */}
              <Paper elevation={3} sx={{
                p: 2, mb: 2, "&:hover": {
                  backgroundColor: "#f5f5f5", // hover bg
                  boxShadow: 6,
                  cursor: "pointer"

                },
              }}>          <Typography variant="h6" fontWeight={700} sx={{ color: "#0d47a1" }}>
                  Directors
                </Typography>
                <List dense sx={{ mt: 1 }}>
                  <ListItem>
                    <ListItemText primary="Mrs. Lakshmi Sudha — Director" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Dr. Gowthami Sandhya M.D — Director" />
                  </ListItem>
                  <ListItem>
                    <ListItemText primary="Dr. Naveen Kumar Reddy Chinta MBBS, CTAT, MBA, CTCCM — Managing Director" />
                  </ListItem>
                </List>
              </Paper>
            </CardContent>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default AboutUs
