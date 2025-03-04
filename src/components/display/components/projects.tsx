import { Box, Card, Typography, CardContent, CardMedia, CardActions, IconButton } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { Fade } from "react-awesome-reveal";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './carouselStyles.css';
import { Carousel } from "react-responsive-carousel";

import { useIsMobile } from "../../../utils";

interface Project{
    title: string;
    description: string;
    techStack: string;
    github?: string;
    link?: string;
    images: string[];
}

interface ProjectCardProps{
    project: Project;
    direction: "down" | "left" | "right" | "up";
}


const ProjectCard: React.FC<ProjectCardProps> = ({ project, direction }) => {
    const isMobile = useIsMobile();

    return (
        <>
            <Fade direction={direction} triggerOnce>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem',
                        paddingTop: '1rem',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <code style={{color: 'var(--accent-color)', fontSize: '24px', fontWeight: 'bold'}}>{`<${project.title}>`}</code>
                    <Card
                    sx={{
                        width: '90%',
                        height: '100%',
                        ":hover": {
                            border: '1px solid var(--main-bg-color-light)',
                            opacity: '0.9',
                            boxShadow: '0 0 10px var(--main-bg-color-light)',
                        },
                        opacity: isMobile ? '1' : '0.8',
                        borderRadius: '1rem',
                        }}>
                        <Carousel showThumbs={true} showStatus={true} infiniteLoop={true} autoPlay={false} interval={5000}>
                            {project.images.map((image, index) => (
                                <CardMedia
                                    key={index}
                                    component="img"
                                    height="300px"
                                    width="100%"
                                    sx={{objectFit: project.title === 'Kick Live' || project.title === 'NeuralNet' ? 'contain' : 'fill'}}
                                    src={image}
                                    alt={project.title}
                                    />
                            ))}
                        </Carousel>
                        <CardContent sx={{ marginTop: '-4rem'}}>
                            <Typography variant="body1" color="text.secondary" textAlign={'center'} fontFamily={'var(--main-font)'}>
                                {project.description}
                            </Typography>
                            <Typography variant="body2" color="var(--accent-color)"
                                sx={{
                                    marginTop: '1rem',
                                    textAlign: 'center',
                                    fontFamily: 'var(--main-font)',
                                }}>
                                {`Built using ${project.techStack}`}
                            </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent: 'center', bottom: 0}}>
                            {project.github &&
                            <IconButton size="small" sx={{color:"#1c1c1c"}} href={project.github} target="_blank">
                                <GitHubIcon fontSize="large"/>
                            </IconButton>}
                            {project.link && 
                            <IconButton size="small" sx={{color:"#1c1c1c"}} href={project.link} target="_blank">
                                <LaunchIcon fontSize="large"/>
                            </IconButton>}
                        </CardActions>
                    </Card>
                    <code style={{color: 'var(--accent-color)', fontSize: '24px', fontWeight: 'bold'}}>{`<${project.title} />`}</code>
                </Box>
            </Fade>
        </>
    )
}

const Projects = () => {
    const projects: Project[] = [
        {
            title: 'Decidophobia',
            description: 'Decidophobia is an eCommerce website that aggregates and rates product information from numerous shopping websites. Aimed at simplifying decision-making for shoppers overwhelmed by choices, Decidophobia provides detailed reviews and ratings.',
            github: 'https://github.com/cfstar188/Decidophobia.com',
            images: ['decidophobia.webp', 'decidophobia_home.webp', 'decidophobia_search.webp', 'decidophobia_cart.webp', 'decidophobia_orderhistory.webp'],
            techStack: 'Next.js, Django, PostgreSQL, Docker'
        },
        {
            title: 'Easy Chef',
            description: 'Easy Chef is a web application for sharing and discovering recipes. You can explore a recipes created by other users and you can also share your own recipes with others. Easy Chef also simplifies grocery shopping by automatically managing your grocery list.',
            github: 'https://github.com/gaurav3247/easychef',
            images: ['easychef.svg', 'easychef_demo.gif'],
            techStack: 'React, Django, PostgreSQL',
            link: 'https://easychef-lte9.onrender.com/'
        },
        {
            title: 'Kick Live',
            description: 'Kick Live is a real-time football scores web app that provides match updates, stats, and league and player information for the top leagues around the world.',
            github: 'https://github.com/vp610/smarTrack',
            images: ['kicklive-white.webp'],
            techStack: 'Next.js, Flask, Redis, Nginx',
            link: 'https://kick-live-nqnl.onrender.com/'
        },
        {
            title: 'NeuralNet',
            description: 'Neural Net is a Python framework for building and training neural networks. Created to learn more about deep learning, it allows users to develop and train custom neural models and use optimizations like Adam and mini-batch descent.',
            github: 'https://github.com/gaurav3247/neural-net',
            images: ['neural-net.webp'],
            techStack: 'Numpy, Pandas, Matplotlib',
        },
        {
            title: 'NanoSh',
            description: 'NanoSh is a fast and lightweight Linux shell I created in C to dive deeper into system programming. It supports basic commands like ls, cd, pwd, and echo, along with features like piping and redirection.',
            images: ['gaurav-sh.webp'],
            techStack: 'C, Linux',
        },
        {
            title: 'Personal Portfolio',
            description: 'My personal portfolio website showcasing my projects, skills, and experience. It also provides a brief introduction to who I am and what I do.',
            github: 'https://github.com/gaurav3247/gauravpoona',
            images: ['personal-website.webp'],
            techStack: 'React, Next.js',
            link: 'https://gaurav3247.github.io/gauravpoona/'
        }
    ]

    return (
        <div>
            <h1><code style={{color: 'var(--accent-color)'}}>{`<projects />`}</code></h1>
            <Box
                sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', sm: '1fr', md: '1fr 1fr' },
                    columnGap: '0.5rem',
                    rowGap: '2rem',
                    padding: '1rem 0',
                }}>
                {projects.map((project: Project, index) => (
                    <ProjectCard project={project} direction={(index % 2 == 0) ? 'up' : 'up'} />
                ))}
            </Box>
        </div>
    )
}

export default Projects;
