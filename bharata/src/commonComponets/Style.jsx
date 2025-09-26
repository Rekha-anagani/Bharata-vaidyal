export const Style = {
    // Modern Color Palette
    colors: {
        primary: '#1976d2',
        primaryDark: '#0d47a1',
        primaryLight: '#42a5f5',
        secondary: '#ff6f00',
        secondaryDark: '#e65100',
        accent: '#00bcd4',
        success: '#4caf50',
        warning: '#ff9800',
        error: '#f44336',
        background: '#fafafa',
        surface: '#ffffff',
        text: {
            primary: '#212121',
            secondary: '#757575',
            disabled: '#bdbdbd'
        },
        gradients: {
            primary: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            secondary: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            hero: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            card: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)'
        }
    },

    // Typography Scale
    typography: {
        hero: {
            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '3rem' },
            fontWeight: 800,
            lineHeight: 1.2,
            letterSpacing: '-0.02em'
        },
        h1: {
            fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            fontWeight: 700,
            lineHeight: 1.3
        },
        h2: {
            fontSize: { xs: '1.75rem', sm: '2rem', md: '2.25rem' },
            fontWeight: 600,
            lineHeight: 1.4
        },
        h3: {
            fontSize: { xs: '1.5rem', sm: '1.75rem', md: '2rem' },
            fontWeight: 600,
            lineHeight: 1.4
        },
        body: {
            fontSize: { xs: '1rem', sm: '1.125rem' },
            lineHeight: 1.6
        }
    },

    // Layout Components
    GridLayout: {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr" },
        gap: 4,
        justifyContent: "center",
    },
     GridLayout1: {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr ", md: "1fr" },
        gap: 4,
        justifyContent: "center",
    },
    GridLayout3colums: {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr", md: "1fr 1fr 1fr" },
        gap: 4,
        justifyContent: "center",
    },
    GridLayout4colums: {
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr 1fr" },
        gap: 3,
        justifyContent: "center",
    },

    // Modern Card Styles
    CommonCard4: {
        textAlign: 'center',
        p: 4,
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: 3,
        border: '1px solid rgba(0,0,0,0.05)',
        cursor: "pointer",
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            transform: 'scaleX(0)',
            transition: 'transform 0.3s ease'
        },
        '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            '&::before': {
                transform: 'scaleX(1)'
            }
        }
    },

    ModernCard: {
        background: 'linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)',
        borderRadius: 4,
        border: '1px solid rgba(0,0,0,0.05)',
        p: 3,
        position: 'relative',
        overflow: 'hidden',
        // height:"300px",
        cursor: 'pointer',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 16px 32px rgba(0,0,0,0.12)',
        }
    },

    // Button Styles
    ModernButton: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        borderRadius: 3,
        // px: 4,
        py: 1.5,
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: 'linear-gradient(135deg, #5a6fd8 0%, #6a4190 100%)',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)'
        }
    },

    SecondaryButton: {
        background: 'transparent',
        color: 'white',
        border: '2px solid white',
        borderRadius: 3,
        // px: 4,
        py: 1.5,
        fontWeight: 600,
        textTransform: 'none',
        fontSize: '1rem',
        transition: 'all 0.3s ease',
        '&:hover': {
            background: '#667eea',
            color: 'white',
            transform: 'translateY(-2px)',
            boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)'
        }
    },

    // Section Styles
    Section: {
        py: { xs: 6, md: 8 },
        position: 'relative'
    },

    SectionWithBackground: {
        py: { xs: 6, md: 10 },
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        position: 'relative',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            opacity: 0.3
        }
    },

    CommonHeading: {
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        fontWeight: 800,
        textAlign: "center",
        mb: 2,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2
        }
    },

    fadeInUp: {
        animation: 'fadeInUp 0.6s ease-out'
    },

    slideInLeft: {
        animation: 'slideInLeft 0.6s ease-out'
    },

    slideInRight: {
        animation: 'slideInRight 0.6s ease-out'
    },

    // Icon Container
    IconContainer: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mx: 'auto',
        mb: 2,
        '& svg': {
            fontSize: '2rem',
            color: 'white'
        }
    },
    heroSectionHome: {
        background: `linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)`,
        color: 'white',
        py: { xs: 10, md: 5 },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
            animation: 'float 20s ease-in-out infinite'
        }
    },
    homepaper: {
        background: 'white',//rgba(255,255,255,0.15)
        border: '1px solid rgba(255,255,255,0.2)',
        color: "rgba(255,255,255,0.15)",
        backdropFilter: 'blur(15px)',
        borderRadius: 4,
        p: 4,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            transform: 'translateY(-4px)'
        }
    },
    homepaperCount: {
        background: 'white',//rgba(255,255,255,0.15)
        border: '1px solid rgba(255,255,255,0.2)',
        color: "rgba(255,255,255,0.15)",
        backdropFilter: 'blur(15px)',
        borderRadius: 4,
        p: 4,
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        '&:hover': {
            boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
            transform: 'translateY(-4px)',
            background: `linear-gradient(135deg, rgba(102, 126, 234, 0.9) 0%, rgba(118, 75, 162, 0.9) 100%)`,
            color: 'white',
        }
    },
    // commonCardForContact: {
    //     p: 2,
    //     borderRadius: 4,
    //     background: '#ffffff',
    //     border: `1px solid rgba(0,0,0,0.06)`,
    //     position: 'relative',
    //     overflow: 'hidden',
    //     cursor: 'pointer',
    //     '&::after': {
    //         content: '""',
    //         position: 'absolute',
    //         top: 0,
    //         left: 0,
    //         right: 0,
    //         height: '4px',
    //     },
    //     '&:hover': { boxShadow: '0 16px 32px rgba(0,0,0,0.1)', transform: 'translateY(-4px)', transition: 'all .3s ease' }
    // }
    CommonHeadingForFmg: {
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        fontWeight: 800,
        textAlign: "start",
        mb: 2,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '20%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2
        }
    },
    CommonHeadingForAbout:{
 fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        fontWeight: 800,
        textAlign: "start",
        mb: 2,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '10%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2
        }
    },
    CommonHeadingForDrone:{
 fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        fontWeight: 800,
        textAlign: "start",
        mb: 2,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '30%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            borderRadius: 2
        }
    },
    
CommonHeadingForContact: {
        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
        fontWeight: 800,
        textAlign: "center",
        mb: 2,
        background: 'white',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        position: 'relative',
        '&::after': {
            content: '""',
            position: 'absolute',
            bottom: '-10px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80px',
            height: '4px',
            background: 'white',
            borderRadius: 2
        }
    },
}