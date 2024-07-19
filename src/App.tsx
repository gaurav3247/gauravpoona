import { useState } from "react"
import { Box, Slide } from "@mui/material"

import Navbar from "./components/navbar/navbar"
import Sidebar from "./components/sidebar/sidebar"
import Explorer from "./components/sidebar/components/explorer"
import Display from "./components/display/display"
import { ActiveProvider } from "./contexts/SidebarActiveContext"
import { TabsProvider } from "./contexts/TabsContext"
import { ThemeProvider } from "./contexts/ThemeContext"
import { useIsMobile } from "./utils"


function App() {
  const isMobile = useIsMobile();
  const [isExplorerVisible, setExplorerVisible] = useState(isMobile ? false : true);
  
  return (
    <>
      <ThemeProvider>
      <TabsProvider>
      <ActiveProvider>
        <Box
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            height: '100vh',
            width: '100vw',
          }}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                height: 'auto',
                borderRight: isMobile ? 'none' : '1px solid #e0e0e0'
              }}>
              <Sidebar isExplorerVisible={isExplorerVisible} setExplorerVisible={setExplorerVisible}/>
              {isExplorerVisible && (
                <Slide direction='right' in={isExplorerVisible}>
                    <Explorer />
                </Slide>
              )}
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                flex: 1,
                overflowX: 'hidden',
            }}>
                <Navbar />
                <Display />
            </Box>
        </Box>
      </ActiveProvider>
      </TabsProvider>
      </ThemeProvider>
    </>
  )
}

export default App
