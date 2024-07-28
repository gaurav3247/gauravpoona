import { useState } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import Grow from '@mui/material/Grow';
import { TypeAnimation } from 'react-type-animation';
import { FaRegCopy } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io";
import { IoLogoGithub } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import GitHubIcon from '@mui/icons-material/GitHub';

import { useIsMobile } from "../../../utils";


const HelpBox = ({ isMobile } : {
    isMobile: boolean;
}) => {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'center',
                    padding: '1rem',
                    border: '2px solid var(--main-border-color)',
                    textAlign: 'left',
                    gap: '1rem',
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}>
                    <Box sx={{ minWidth: '3rem', display: 'flex', justifyContent: 'start', margin: '0rem' }}>
                        <FaRegCopy style={{ fontSize: isMobile ? '2rem' : '1.5rem' }} />
                    </Box>
                    <Typography fontFamily={'Consolas, monospace'}>
                        <span style={{color: 'var(--accent-color)'}}>Explorer</span>: Navigate through the different pages of the website.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}>
                    <Box sx={{ minWidth: '3rem', display: 'flex', justifyContent: 'start', margin: '0rem' }}>
                        <IoLogoLinkedin style={{ fontSize: isMobile ? '2rem' : '1.5rem' }} />
                    </Box>
                    <Typography fontFamily={'Consolas, monospace'}>
                        <span style={{color: 'var(--accent-color)'}}>LinkedIn</span>: Connect with me on LinkedIn.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}>
                    <Box sx={{ minWidth: '3rem', display: 'flex', justifyContent: 'start', margin: '0rem' }}>
                        <MdEmail style={{ fontSize: isMobile ? '2rem' : '1.5rem' }} />
                    </Box>
                    <Typography fontFamily={'Consolas, monospace'}>
                        <span style={{color: 'var(--accent-color)'}}>Email</span>: Send me an email.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}>
                    <Box sx={{ minWidth: '3rem', display: 'flex', justifyContent: 'start', margin: '0rem' }}>
                        <IoLogoGithub style={{ fontSize: isMobile ? '2rem' : '1.5rem' }} />
                    </Box>
                    <Typography fontFamily={'Consolas, monospace'}>
                        <span style={{color: 'var(--accent-color)'}}>Github</span>: Checkout my Github.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.5rem',
                    }}>
                    <Box sx={{ minWidth: '3rem', display: 'flex', justifyContent: 'start', margin: '0rem' }}>
                        <IoMdSettings style={{ fontSize: isMobile ? '2rem' : '1.5rem' }} />
                    </Box>
                    <Typography fontFamily={'Consolas, monospace'}>
                        <span style={{color: 'var(--accent-color)'}}>Settings</span>: Change the theme and other settings (coming soon) of the website.
                    </Typography>
                </Box>
            </Box>
        </>
    );
}


const Landing = () => {
    const [firstAnimationComplete, setFirstAnimationComplete] = useState(false);
    const [secondAnimationComplete, setSecondAnimationComplete] = useState(false);

    const isMobile = useIsMobile();

    function animationComplete() {
        setSecondAnimationComplete(true);
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    padding: '2rem',
                }}
            >
                <Box>
                    <TypeAnimation
                        sequence={[
                            `Hey I'm`,
                            500, () => setFirstAnimationComplete(true),
                        ]}
                        style={{ fontSize: '2rem' }}
                        cursor={false}
                    />
                    {firstAnimationComplete &&
                        <>
                            <br/>
                            <TypeAnimation
                                sequence={[
                                    'Gaurav Poona.',
                                    0, () => animationComplete(),
                                ]}
                                style={{ fontSize: '4rem', color: 'var(--accent-color)' }}
                            />
                        </>
                    }
                </Box>
                <Divider 
                    style={{
                        width: '50%',
                        margin: '1rem 0',
                        backgroundColor: 'var(--accent-color)',
                }}/>
                <Grow in={secondAnimationComplete} timeout={800}>
                    <Box>
                        <p style={{fontSize: 16}}>
                            Welcome to my personal website! <br />
                            Use the <span style={{ color: 'var(--accent-color)' }}>sidebar</span> to navigate through the different sections and learn more about me.
                        </p>
                    </Box>
                </Grow>
                <Grow in={secondAnimationComplete} timeout={800}>
                    <Box
                        sx={{
                            marginTop: '2rem',
                            width: isMobile ? '120%' : '75%',
                        }}>
                        <h1 style={{textAlign: 'left'}}>
                            Help
                        </h1>
                        <HelpBox isMobile={isMobile}/>
                    </Box>
                </Grow>
            </Box>
        </>
    );
}

export default Landing;