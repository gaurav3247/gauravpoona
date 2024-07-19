import { useContext } from 'react'
import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { IoImagesSharp } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";

import './navbar.css'
import ThemeContext from '../../contexts/ThemeContext';
import TabsContext from '../../contexts/TabsContext'

const Navbar = () => {
    const { theme } = useContext(ThemeContext);
    const { tabs, removeTab, activeTab, setActiveTab } = useContext(TabsContext);

    return (
        <nav className={(theme=='dark') ? "navbar" : "navbar-light"}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    backgroundColor: (theme=='dark') ? 'var(--secondary-bg-color)' : 'var(--secondary-bg-color-light)',
                    color: (theme == 'dark') ? 'var(--main-text-color)' : 'var(--main-text-color-light)',
                    paddingRight: '1rem'
                }}>
                {tabs.map((tab: string, index: number) => (
                    <Box key={index} className={(theme == 'dark') ? (activeTab == index) ? "tab active-tab" : 'tab' : (activeTab == index) ? "tab-light active-tab-light" : 'tab-light'} onClick={() => setActiveTab(index)}
                        sx={{
                            ":hover": {
                                backgroundColor: (theme == 'dark') ? 'var(--main-bg-color)' : 'var(--main-bg-color-light)',
                                cursor: 'pointer'
                            }
                        }}>
                        {
                            tab.includes('.pdf') ? 
                            <FaFilePdf style={{ color: '#c91818'}}/> :
                            (tab.includes('.png') || tab.includes('.jpg')) ? 
                            <IoImagesSharp style={{color: '#962fc6'}}/> :
                            <FaReact style={{color: 'var(--accent-color)'}}/>
                        }
                        <div className="tab-text" style={{fontWeight: 100, fontSize: '14px'}}>{tab}</div>
                        <IconButton size='small' onClick={(event) => {
                            event.stopPropagation();
                            removeTab(tab);
                        }}>
                            <CloseIcon style={{ color: (theme == 'dark') ? 'var(--icons-font-color)' : 'var(--icons-font-color-light)' }} fontSize='small'/>
                        </IconButton>
                    </Box>
                ))}
            </Box>
        </nav>
    )
}

export default Navbar