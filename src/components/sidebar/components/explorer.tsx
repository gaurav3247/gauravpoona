import { useState, useContext, forwardRef } from 'react';
import { Box, Collapse, List, ListItemText, ListItemButton } from "@mui/material";
import ExpandMore from '@mui/icons-material/ExpandMore';
// import { IoImagesSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

import ThemeContext from '../../../contexts/ThemeContext';
import TabsContext from '../../../contexts/TabsContext';
import { listItemTextStyles } from '../../../utils';

const Explorer = forwardRef((props, ref) => {
  const { theme } = useContext(ThemeContext);
  const { addTab } = useContext(TabsContext);
  const [openDropdown, setOpenDropdown] = useState(true);
  // const [openAbout, setOpenAbout] = useState(true);
  // const [openProjects, setOpenProjects] = useState(true);


  return (
    <Box
      ref={ref}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '10vw',
        minWidth: 'min-content',
        maxWidth: '40vw',
        height: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        backgroundColor: (theme == 'dark') ? 'var(--secondary-bg-color)' : 'var(--secondary-bg-color-light)',
        color: (theme == 'dark') ? 'var(--main-text-color)' : 'var(--main-text-color-light)',
        resize: 'horizontal',
      }}>
      <List sx={{display: 'flex', flexDirection: 'column'}}>
        <ListItemButton onClick={() => setOpenDropdown(!openDropdown)}>
          <ExpandMore sx={{rotate: openDropdown ? '' : '-90deg'}} fontSize='medium'/>
          <ListItemText primary="personal_website" primaryTypographyProps={listItemTextStyles} />
        </ListItemButton>
          <Collapse in={openDropdown} timeout="auto" unmountOnExit>
            <List sx={{paddingLeft: 1, width: 'min-content', borderLeft: '2px'}} disablePadding> 
              <ListItemButton sx={{ pl: 3, gap: '0.5rem' }} onClick={() => addTab('landing.tsx')}>
                <FaReact style={{fontSize: '14px', color: 'var(--accent-color)'}}/>
                <ListItemText primary="landing.tsx" primaryTypographyProps={listItemTextStyles} />
              </ListItemButton>
              {/* <ListItemButton onClick={() => setOpenAbout(!openAbout)} id='1'>
                <ExpandMore sx={{rotate: openAbout ? '' : '-90deg'}}/>
                <ListItemText primary="about" primaryTypographyProps={listItemTextStyles} />
              </ListItemButton> */}
              {/* <Collapse in={openAbout} timeout="auto" unmountOnExit> */}
                {/* <List component="div" disablePadding> */}
              <ListItemButton sx={{ pl: 3, gap: '0.5rem' }} onClick={() => addTab('about.tsx')}>
                <FaReact style={{fontSize: '14px', color: 'var(--accent-color)'}}/>
                <ListItemText primary="about.tsx" primaryTypographyProps={listItemTextStyles} />
              </ListItemButton>
                  {/* <ListItemButton sx={{ pl: 4, gap: '0.5rem' }} onClick={() => addTab('me.jpg')}>
                    <IoImagesSharp style={{fontSize: '14px', color: '#962fc6'}}/>
                    <ListItemText primary="me.jpg" primaryTypographyProps={listItemTextStyles} />
                  </ListItemButton> */}
                {/* </List> */}
              {/* </Collapse> */}
              {/* <ListItemButton onClick={() => setOpenProjects(!openProjects)} id='1'>
                <ExpandMore sx={{rotate: openProjects ? '' : '-90deg'}}/>
                <ListItemText primary="projects" primaryTypographyProps={listItemTextStyles} />
              </ListItemButton> */}
              {/* <Collapse in={openProjects} timeout="auto" unmountOnExit> */}
                {/* <List component="div" disablePadding> */}
              <ListItemButton sx={{ pl: 3, gap: '0.5rem' }} onClick={() => addTab('projects.tsx')}>
                <FaReact style={{fontSize: '14px', color: 'var(--accent-color)'}}/>
                <ListItemText primary="projects.tsx" primaryTypographyProps={listItemTextStyles} />
              </ListItemButton>
                {/* </List> */}
              {/* </Collapse> */}
              <ListItemButton sx={{ pl: 3, gap: '0.5rem' }} onClick={() => addTab('resume.pdf')}>
                <FaFilePdf style={{fontSize: '14px', color: '#c91818'}}/>
                <ListItemText primary="resume.pdf" primaryTypographyProps={listItemTextStyles} />
              </ListItemButton>
            </List>
          </Collapse>
      </List>
    </Box>
  );
})

export default Explorer;