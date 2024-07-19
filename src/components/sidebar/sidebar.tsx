import { useState, useContext } from 'react';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
// import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { FaRegCopy } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { IoMdSettings } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button, Divider, Typography, ListItemText } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

import './sidebar.css'
import ActiveContext from '../../contexts/SidebarActiveContext';
import ThemeContext from '../../contexts/ThemeContext';
import TabsContext from '../../contexts/TabsContext';
import { listItemTextStyles } from '../../utils';
import { useIsMobile } from '../../utils';
import { FaFilePdf } from 'react-icons/fa6';

type SidebarProps = {
    isExplorerVisible: boolean;
    setExplorerVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Sidebar = ({ isExplorerVisible, setExplorerVisible }: SidebarProps) => {
    const { theme, setTheme } = useContext(ThemeContext);
    const { addTab } = useContext(TabsContext);
    const { activeSidebar, setActiveSidebar } = useContext(ActiveContext)

    const isMobile = useIsMobile();

    const [contactAnchorEl, setContactAnchorEl] = useState<null | HTMLElement>(null);
    const contactOpen = Boolean(contactAnchorEl);
    
    const [explorerAnchorEl, setExplorerAnchorEl] = useState<null | HTMLElement>(null);
    const explorerMenuOpen = Boolean(explorerAnchorEl);

    const [settingsAnchorEl, setSettingsAnchorEl] = useState<null | HTMLElement>(null);
    const settingsOpen = Boolean(settingsAnchorEl);

    const handleExplorer = (event: React.MouseEvent<HTMLElement>) => {
        setExplorerAnchorEl(event.currentTarget);
    };

    const handleContact = (event: React.MouseEvent<HTMLElement>) => {
      setContactAnchorEl(event.currentTarget);
    };

    const handleSettings = (event: React.MouseEvent<HTMLElement>) => {
      setSettingsAnchorEl(event.currentTarget);
    };

    const handleExplorerClose = () => {
        setExplorerAnchorEl(null);
        setActiveSidebar(isExplorerVisible ? 1 : 0)
    };

    const handleContactClose = () => {
      setContactAnchorEl(null);
      setActiveSidebar(isExplorerVisible ? 1 : 0)
    };

    const handleSettingsClose = () => {
      setSettingsAnchorEl(null);
      setActiveSidebar(isExplorerVisible ? 1 : 0)
    };

    function handleClick(e: React.MouseEvent<HTMLElement>, id: number) {
        setActiveSidebar(id)
        if (id == 1) {
            isMobile ? handleExplorer(e) : setExplorerVisible(!isExplorerVisible)
        }
        else if (id == 2) {
            handleContact(e)
        }
        else if (id == 4) {
            handleSettings(e)
        }
    }

    return (
        <div className={(theme == 'dark') ? "sidebar" : 'sidebar-light'}>
            <div className="icons-tray">
                <IconButton onClick={(e) => handleClick(e, 1)} title='Explorer'>
                    <FaRegCopy className={(activeSidebar == 1) ? 'icon active' : 'icon'} style={{padding: '0.2rem', fontSize: '28px'}} />
                </IconButton>
                <Menu
                    id="explorer-positioned-menu"
                    aria-labelledby="explorer-positioned-button"
                    anchorEl={explorerAnchorEl}
                    open={explorerMenuOpen}
                    onClose={handleExplorerClose}
                    anchorOrigin={{
                        vertical: isMobile ? 'bottom' : 'center',
                        horizontal: isMobile ? 'center' : 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: isMobile ? 'center' : 'left',
                    }}
                >
                    <MenuItem style={{padding: '0 0 0 0.5rem'}} onClick={() => addTab('landing.tsx')}>
                        <FaReact style={{fontSize: '14px', color: 'var(--accent-color)'}}/>
                        <ListItemText primary="landing.tsx" primaryTypographyProps={{...listItemTextStyles, fontSize: 16, paddingLeft: '0.5rem'}} />
                    </MenuItem>
                    <MenuItem style={{padding: '0 0 0 0.5rem'}} onClick={() => addTab('about.tsx')}>
                        <FaReact style={{fontSize: '14px', color: 'var(--accent-color)'}}/>
                        <ListItemText primary="about.tsx" primaryTypographyProps={{...listItemTextStyles, fontSize: 16, paddingLeft: '0.5rem'}} />
                    </MenuItem>
                    <MenuItem style={{padding: '0 0.5rem 0 0.5rem'}} onClick={() => addTab('projects.tsx')}>
                        <FaReact style={{fontSize: '14px', color: 'var(--accent-color)'}}/>
                        <ListItemText primary="projects.tsx" primaryTypographyProps={{...listItemTextStyles, fontSize: 16, paddingLeft: '0.5rem'}} />
                    </MenuItem>
                    <MenuItem style={{padding: '0 0 0 0.5rem'}} onClick={() => addTab('resume.pdf')}>
                        <FaFilePdf style={{fontSize: '14px', color: '#c91818'}}/>
                        <ListItemText primary="resume.pdf" primaryTypographyProps={{...listItemTextStyles, fontSize: 16, paddingLeft: '0.5rem'}} />
                    </MenuItem>
                </Menu>
                <IconButton onClick={(e) => handleClick(e, 2)} title='Connect with me!'>
                    <IoMdContact  className={(activeSidebar == 2) ? 'icon active' : 'icon'} style={{padding: '0.2rem', fontSize: '28px'}} />
                </IconButton>
                <Menu
                    id="contact-positioned-menu"
                    aria-labelledby="contact-positioned-button"
                    anchorEl={contactAnchorEl}
                    open={contactOpen}
                    onClose={handleContactClose}
                    anchorOrigin={{
                        vertical: isMobile ? 'bottom' : 'center',
                        horizontal: isMobile ? 'center' : 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: isMobile ? 'center' : 'left',
                    }}
                >
                    <MenuItem style={{padding: '0 1rem 0 0.5rem'}}>
                        <Button title='Email'
                            startIcon={<EmailIcon style={{fontSize: '28px'}} />}
                            href='mailto:gauravpoona3247@gmail.com'
                            target='_blank' />
                        <Typography style={{...listItemTextStyles, fontSize: 16, color: 'var(--main-text-color-light)'}}>Email</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem style={{padding: '0 1rem 0 0.5rem'}}>
                        <Button title='LinkedIn'
                            startIcon={<LinkedInIcon style={{fontSize: '28px'}} />}
                            href='https://www.linkedin.com/in/gaurav-poona/'
                            target='_blank' />
                        <Typography style={{...listItemTextStyles, fontSize: 16, color: 'var(--main-text-color-light)'}}>LinkedIn</Typography>
                    </MenuItem>
                    <Divider />
                    <MenuItem style={{padding: '0 1rem 0 0.5rem'}}>
                        <Button title='GitHub'
                            startIcon={<GitHubIcon style={{fontSize: '32px', color:"#1c1c1c"}} />}
                            href='https://github.com/gaurav3247'
                            target='_blank' />
                        <Typography style={{...listItemTextStyles, fontSize: 16, color: 'var(--main-text-color-light)'}}>GitHub</Typography>
                    </MenuItem>
                </Menu>
                {/* <IconButton onClick={(e) => handleClick(e, 3)} title='Search'>
                    <SearchIcon className={(activeSidebar == 3) ? 'icon active' : 'icon'} style={{fontSize: '32px', }} />
                </IconButton> // Implement search feature*/} 
                <IconButton onClick={(e) => handleClick(e, 4)} title='Settings'>
                    <IoMdSettings className={(activeSidebar == 4) ? 'icon active' : 'icon'} style={{padding: '0.2rem', fontSize: '28px'}} />
                </IconButton>
                <Menu
                    id="settings-positioned-menu"
                    aria-labelledby="settings-positioned-button"
                    anchorEl={settingsAnchorEl}
                    open={settingsOpen}
                    onClose={handleSettingsClose}
                    anchorOrigin={{
                        vertical: isMobile ? 'bottom' : 'center',
                        horizontal: isMobile ? 'center' : 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: isMobile ? 'center' : 'left',
                    }}
                >
                    <MenuItem style={{padding: '0 0 0 0.5rem'}}>
                        <FormControlLabel control={<Switch checked={theme == 'dark'} onChange={() => {
                            setTheme(theme == 'dark' ? 'light' : 'dark')
                        }}/>} label="Dark Mode" />
                    </MenuItem>
                    <Divider />
                    <p style={{ padding: '0rem 0rem 0rem 0.5rem', margin: 0 }}> More themes <br />coming soon! </p>
                </Menu>
            </div>
        </div>
    )
}

export default Sidebar