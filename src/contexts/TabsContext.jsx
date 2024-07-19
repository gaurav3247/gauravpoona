import { useState, createContext }from 'react';

const TabsContext = createContext();

export function TabsProvider({children}) {
    const [tabs, setTabs] = useState(['landing.tsx']);
    const [activeTab, setActiveTab] = useState(0);

    function addTab(tab) {
        if (!tabs.includes(tab)) {
            setTabs([...tabs, tab]);
            setActiveTab(tabs.length);
        }
        else {
            setActiveTab(tabs.indexOf(tab));
        }
    }

    function removeTab(tab) {
        const newTabs = tabs.filter(t => t !== tab);
        setTabs(newTabs);
        setActiveTab(newTabs.length-1);
    }

    return (
        <TabsContext.Provider value={{
                                        tabs,
                                        addTab,
                                        removeTab,
                                        activeTab,
                                        setActiveTab
                                    }}>
            {children}
        </TabsContext.Provider>
    );
}

export default TabsContext;