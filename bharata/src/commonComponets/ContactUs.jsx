import React, { useState } from 'react'
import {
	Box,
	Button,
	Container,
	Grid,
	Stack,
	TextField,
	Typography,
	Alert,
	Card,
	CardContent,
	Chip,
	Avatar,
	Divider,
	Paper
} from '@mui/material'
import EmailIcon from '@mui/icons-material/Email'
import PhoneIcon from '@mui/icons-material/Phone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import SendIcon from '@mui/icons-material/Send'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import BusinessIcon from '@mui/icons-material/Business'
import SupportAgentIcon from '@mui/icons-material/SupportAgent'
import { Style } from './Style'

const ContactUs = () => {
	const [values, setValues] = useState({ name: '', email: '', phone: '', message: '' })
	const [sent, setSent] = useState(false)

	const handleChange = (e) => {
		const { name, value } = e.target
		setValues((v) => ({ ...v, [name]: value }))
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setSent(true)
		// Reset form after 3 seconds
		setTimeout(() => {
			setSent(false)
			setValues({ name: '', email: '', phone: '', message: '' })
		}, 3000)
	}

	const contactInfo = [
		{
			icon: <EmailIcon />,
			title: 'Email Us',
			details: ['info@bharatavaidyal.com', 'support@bharatavaidyal.com'],
			color: '#2196f3'
		},
		{
			icon: <PhoneIcon />,
			title: 'Call Us',
			details: ['(+91) 98765 43210', '(+91) 87654 32109'],
			color: '#4caf50'
		},
		{
			icon: <LocationOnIcon />,
			title: 'Visit Us',
			details: ['123 Education Street', 'Knowledge City, State 12345'],
			color: '#ff9800'
		},
		{
			icon: <AccessTimeIcon />,
			title: 'Business Hours',
			details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
			color: '#9c27b0'
		}
	]

	const features = [
		{ icon: <CheckCircleIcon />, text: '24/7 Student Support' },
		{ icon: <BusinessIcon />, text: 'Industry Partnerships' },
		{ icon: <SupportAgentIcon />, text: 'Expert Career Guidance' }
	]

	return (
		<Box sx={{ backgroundColor: "white" }}>
			{/* Hero Section */}
			<Box sx={{
				...Style.heroSectionHome,
				py: { xs: 10, md: 8 }
			}}>
				<Container maxWidth="lg">
					<Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
						<Chip
							label="💬 Get In Touch"
							sx={{
								fontSize: "16px",
								mb: 3,
								background: 'rgba(255,255,255,0.15)',
								color: 'white',
								backdropFilter: 'blur(10px)',
								border: '1px solid rgba(255,255,255,0.3)'
							}}
						/>
						<Typography
							variant="h2"
							sx={{
								...Style.CommonHeadingForContact, color: 'white',
								mb: 2,
								textShadow: '0 2px 4px rgba(0,0,0,0.25)'
							}}
						>
							Contact Us
						</Typography>
						<Typography
							variant="h5"
							sx={{
								color: 'rgba(255,255,255,0.9)',
								lineHeight: 1.6,
								mb: 4
							}}
						>
							Ready to start your career journey? We're here to help you every step of the way.
						</Typography>
					</Box>
				</Container>
			</Box>

			<Container maxWidth="xl" sx={{ py: { xs: 4, md: 6 } }}>
				<Grid container spacing={3} sx={{ ...Style.GridLayout4colums }}>
					{contactInfo.map((info, index) => (
						<Grid item xs={12} sm={6} md={3} key={`contact-card-${index}`}>
							<Card sx={{
								p: 2,
								borderRadius: 4,
								background: Style.colors.surface,
								border: `1px solid rgba(0,0,0,0.06)`,
								position: 'relative',
								overflow: 'hidden',
								cursor: 'pointer',
								'&::after': {
									content: '""',
									position: 'absolute',
									top: 0,
									left: 0,
									right: 0,
									height: '4px',
									background: `linear-gradient(90deg, ${info.color} 0%, ${info.color}aa 100%)`
								},
								'&:hover': { boxShadow: '0 16px 32px rgba(0,0,0,0.1)', transform: 'translateY(-4px)', transition: 'all .3s ease' }
							}}>
								<CardContent sx={{ p: 3 }}>
									<Stack direction="row" spacing={2} alignItems="flex-start">
										<Avatar sx={{ width: 48, height: 48, background: `linear-gradient(135deg, ${info.color} 0%, ${info.color}cc 100%)`, color: '#fff' }}>
											{info.icon}
										</Avatar>
										<Box>
											<Typography variant="subtitle1" sx={{ fontWeight: 700, mb: .5 }}>{info.title}</Typography>
											{info.details.map((detail, i) => (
												<Typography key={i} sx={{ color: Style.colors.text.secondary, fontSize: '.95rem' }}>{detail}</Typography>
											))}
										</Box>
									</Stack>
								</CardContent>
							</Card>
						</Grid>
					))}
				</Grid>
			</Container>

			<Box sx={{ display: 'flex', justifyContent: 'center', py: { xs: 3, md: 8 }, px: { xs: 3, md: 8 } }}>
				<Container maxWidth="lg">
					<Paper elevation={5} sx={{
						// ...Style.ModernCard,
						width: "100%",
						// height: '100%',
					}}>
						<CardContent sx={{ p: 4 }}>
							<Typography variant="h4" sx={{ fontWeight: 800, mb: 2, color: Style.colors.text.primary, textAlign: "center" }}>
								Send us a Message
							</Typography>
							<Typography sx={{ color: Style.colors.text.secondary, mb: 4 }}>
								Have questions about our courses or services? We'd love to hear from you. Send us a message and we'll respond within 24 hours.
							</Typography>

							<Box component="form" onSubmit={handleSubmit}>
								<Stack spacing={3}>
									<Grid container spacing={3} sx={{ ...Style.GridLayout }}>
										<Grid item xs={12} sm={6}>
											<TextField
												label="Full Name"
												name="name"
												value={values.name}
												onChange={handleChange}
												fullWidth
												required
												sx={{
													'& .MuiOutlinedInput-root': {
														borderRadius: 2,
														'&:hover fieldset': {
															borderColor: Style.colors.primary
														}
													}
												}}
											/>
										</Grid>
										<Grid item xs={12} sm={6}>
											<TextField
												label="Phone Number"
												name="phone"
												value={values.phone}
												onChange={handleChange}
												fullWidth
												sx={{
													'& .MuiOutlinedInput-root': {
														borderRadius: 2,
														'&:hover fieldset': {
															borderColor: Style.colors.primary
														}
													}
												}}
											/>
										</Grid>
									</Grid>

									<TextField
										label="Email Address"
										name="email"
										type="email"
										value={values.email}
										onChange={handleChange}
										fullWidth
										required
										sx={{
											'& .MuiOutlinedInput-root': {
												borderRadius: 2,
												'&:hover fieldset': {
													borderColor: Style.colors.primary
												}
											}
										}}
									/>

									<TextField
										label="Your Message"
										name="message"
										value={values.message}
										onChange={handleChange}
										fullWidth
										multiline
										rows={5}
										required
										placeholder="Tell us about your career goals, questions about our courses, or how we can help you..."
										sx={{
											'& .MuiOutlinedInput-root': {
												borderRadius: 2,
												'&:hover fieldset': {
													borderColor: Style.colors.primary
												}
											}
										}}
									/>

									<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
										<Button
											type="submit"
											sx={{
												...Style.ModernButton,
												py: 2,
												flex: 1,
											}}
											startIcon={<SendIcon />}
										>
											Send Message
										</Button>
										<Button
											variant="outlined"
											href="mailto:info@bharatavaidyal.com"
											sx={{
												...Style.ModernButton,
												py: 2,
												flex: 1
											}}
										>
											Email Us
										</Button>
									</Stack>

									
								</Stack>
							</Box>
						</CardContent>
					</Paper>
				{sent && (
  <Box
    sx={{
      position: 'fixed',  
      top: 16,          
      left: '50%',
      transform: 'translateX(-50%)', 
      zIndex: 9999,      
      width: { xs: '90%', sm: 'auto' } 
    }}
  >
    <Alert
      severity="success"
      sx={{
        borderRadius: 2,
        '& .MuiAlert-message': { fontWeight: 500 }
      }}
      icon={<CheckCircleIcon />}
    >
      Thank you! Your message has been received. We'll get back to you within 24 hours.
    </Alert>
  </Box>
)}

				</Container>
			</Box>
			<Box >
				<Container maxWidth="lg">
					<Grid container spacing={6} sx={{ ...Style.GridLayout }}>
						<Grid item xs={12} md={5}>
							<Card sx={{
								...Style.homepaperCount,
								color: "grey",
								height: "250px",
								boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
							}}>
								<CardContent sx={{ p: 4 }}>
									<Typography variant="h6" sx={{ fontWeight: 700, mb: 3, }}>
										Why Choose Us?
									</Typography>
									<Stack spacing={2}>
										{features.map((feature, index) => (
											<Stack key={index} direction="row" spacing={2} alignItems="center">
												<Avatar sx={{
													width: 36,
													height: 36,
													// background: 'rgba(255,255,255,0.2)',
													// color: 'white'
												}}>
													{feature.icon}
												</Avatar>
												<Typography >
													{feature.text}
												</Typography>
											</Stack>
										))}
									</Stack>
								</CardContent>
							</Card>
						</Grid>
						<Grid item xs={12}>
							<Card sx={{
								...Style.homepaperCount,
								height: "250px",
								boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
								color: "grey"
							}}>
								<CardContent sx={{ p: 4 }}>
									<Stack spacing={3} alignItems="center" justifyContent="space-between">
										<Typography variant="h6" sx={{ fontWeight: 700, }}>
											Need quick help? Our team is just a message away.
										</Typography>
										<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
											<Button href="tel:+919876543210" sx={{ ...Style.ModernButton }} startIcon={<PhoneIcon />}>Call Now</Button>
											<Button href="mailto:info@bharatavaidyal.com" sx={{ ...Style.ModernButton }} startIcon={<EmailIcon />}>Email Support</Button>
										</Stack>
									</Stack>
								</CardContent>
							</Card>
						</Grid>

					</Grid>
				</Container>
			</Box>

			<Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
				<Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} alignItems="center" justifyContent="center">
					<Chip label="Trusted by 10k+ learners" />
					<Chip label="ISO Certified" />
					<Chip label="Expert Mentors" />
				</Stack>
			</Container>
			<Box>
				<Container maxWidth="lg">
					<Box sx={{ textAlign: 'center', mb: 6 }}>
						<Typography sx={Style.CommonHeading}>
							Frequently Asked Questions
						</Typography>
					</Box>

					<Grid container spacing={4} sx={{ ...Style.GridLayout3colums, mb: { xs: 4, md: 15 } }}>
						{[
							{
								question: 'How quickly do you respond to inquiries?',
								answer: 'We typically respond to all inquiries within 24 hours during business days.'
							},
							{
								question: 'Do you offer free career counseling?',
								answer: 'Yes, we provide complimentary career counseling sessions to help you choose the right path.'
							},
							{
								question: 'Can I visit your training center?',
								answer: 'Absolutely! We encourage prospective students to visit our state-of-the-art facilities.'
							}
						].map((faq, index) => (
							<Grid item xs={12} md={4} key={index}>
								<Card sx={{ ...Style.ModernCard, height: '100%', cursor: "pointer" }}>
									<CardContent sx={{ p: 4 }}>
										<Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: Style.colors.text.primary }}>
											{faq.question}
										</Typography>
										<Typography sx={{ color: Style.colors.text.secondary, lineHeight: 1.6 }}>
											{faq.answer}
										</Typography>
									</CardContent>
								</Card>
							</Grid>
						))}
					</Grid>
				</Container>
			</Box>
			{/* <Box sx={{ background: Style.colors.gradients.secondary, color: '#fff', py: { xs: 6, md: 8 }, mt: 6 }}>
				<Container maxWidth="lg">
					<Stack direction={{ xs: 'column', md: 'row' }} spacing={3} alignItems="center" justifyContent="space-between">
						<Box>
							<Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>Ready to talk?</Typography>
							<Typography sx={{ opacity: 0.9 }}>Get personalized guidance from our expert team today.</Typography>
						</Box>
						<Button sx={{ ...Style.ModernButton, background: '#fff', color: '#333' }} href="mailto:info@bharatavaidyal.com" startIcon={<SupportAgentIcon />}>Contact Support</Button>
					</Stack>
				</Container>
			</Box> */}
		</Box>
	)
}

export default ContactUs