// import { useContext, useRef } from "react";
import { useContext } from "react";
// import { Box, Popover, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { pdfjs } from 'react-pdf'
import ThemeContext from "../../contexts/ThemeContext";
import TabsContext from "../../contexts/TabsContext";
// import HTMLPreview from "./components/popover";
import Breadcrumb from "./components/breadcrumb";
import Landing from "./components/landing";
import About from "./components/about";
import Projects from "./components/projects";
import resume from './Gaurav-Poona SWE.pdf';

import { useIsMobile } from "../../utils";


const Display = () => {
    const { theme } = useContext(ThemeContext);
    const { tabs, activeTab } = useContext(TabsContext);
    // const boxRef = useRef(null);
    const isMobile = useIsMobile();

    pdfjs.GlobalWorkerOptions.workerSrc = new URL(
      'pdfjs-dist/build/pdf.worker.min.js',
      import.meta.url,
    ).toString();

    const currPage = tabs[activeTab];

    const breadcrumbsList = [
        'personal_website',
        currPage
    ]

    return (
        <>
            <Box
                sx={{
                    padding: '0rem 0.5rem 0rem 0rem',
                    backgroundColor: (theme == 'dark') ? 'var(--main-bg-color)' : 'var(--main-bg-color-light)',
                    color: (theme == 'dark') ? 'var(--main-text-color)' : 'var(--main-text-color-light)',
            }}>
                <Breadcrumb path={breadcrumbsList} />
            </Box>
            <Box className={(theme == 'dark') ? 'display' : 'display-light'}
                sx={{
                    flex: 1,
                    overflowY: 'auto',
                    padding: isMobile ? '0 1.5rem' : '0 3.5rem',
                    backgroundColor: (theme == 'dark') ? 'var(--main-bg-color)' : 'var(--main-bg-color-light)',
                    color: (theme == 'dark') ? 'var(--main-text-color)' : 'var(--main-text-color-light)',
                    // overflowX: 'hidden'
                }}>
                {currPage === 'landing.tsx' && <Landing />}
                {currPage === 'resume.pdf' && 
                    <Box sx={{
                        marginTop: '2rem',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '120%',
                        width: '100%',
                    }}>
                        <iframe src={resume} style={{ width: '80%', height: '100%' }} />
                    </Box>}
                {currPage === 'about.tsx' && <About />}
                {currPage === 'projects.tsx' && <Projects />}
            </Box>
        </>
    )

    
}

export default Display;