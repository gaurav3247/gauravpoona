import { useState, createContext } from 'react';

const ActiveContext = createContext();

export function ActiveProvider({children}) {
    const [activeSidebar, setActiveSidebar] = useState(1);

    return (
        <ActiveContext.Provider value={{activeSidebar, setActiveSidebar}}>
            {children}
        </ActiveContext.Provider>
    );
}

export default ActiveContext;