// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState, useCallback } from 'react';
import {
    TopAppBar,
    TopAppBarRow,
    TopAppBarSection,
    TopAppBarTitle,
    TopAppBarNavigationIcon,
    TopAppBarFixedAdjust,
    TopAppBarActionItem
} from '@rmwc/top-app-bar';
import { Typography } from '@rmwc/typography';
import { Icon } from '@rmwc/icon';
import { TabBar, Tab, TabBarOnActivateEventT } from '@rmwc/tabs';
import { Menu, MenuSurface, MenuItem } from '@rmwc/menu';
import { useNavigate, useLocation } from 'react-router-dom';

const tabs = [
    { label: 'Home', value: '/' },
    { label: 'Updates', value: '/updates' },
    { label: 'Requirements', value: '/requirements' },
    { label: 'Data', value: '/data' },
    { label: 'About', value: '/about' },
];

export default function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [open, setOpen] = useState(false);
    const handleTabChange = useCallback((evt: TabBarOnActivateEventT) => {
    const tabValue = tabs[evt.detail.index].value;
    if (tabValue) {
        navigate(tabValue);
    }
}, [navigate]);


const handleMenuClick = useCallback(() => {
    setOpen((prevOpen) => !prevOpen);
}, []);



const handleMenuItemClick = useCallback((path: string) => {
    navigate(path);
    setOpen(false);
}, [navigate]);


const handleActionClick = useCallback(() => {
        // Handle action item click (e.g., open a settings menu)
        console.log("Action clicked!");
}, []);



const activeTabIndex =  tabs.findIndex(tab=>tab.value === location.pathname)



return (
    <>
        <TopAppBarFixedAdjust />
        <TopAppBar fixed style={{ backgroundColor: '#4285f4', color: 'white' }}>
        <TopAppBarRow>
            <TopAppBarSection alignStart>
            <TopAppBarNavigationIcon onClick={handleMenuClick}>
                <Icon icon="menu" />
                <Menu open={open} onClose={() => setOpen(false)} anchorCorner="bottomLeft">
                <MenuSurface>
                    {tabs.map(tab => (
                    <MenuItem key={tab.label} onClick={() => handleMenuItemClick(tab.value)}>
                        {tab.label}
                        </MenuItem>
                    ))}
                </MenuSurface>
                </Menu>
            </TopAppBarNavigationIcon>
            <TopAppBarTitle>
                <Typography use="headline6" style={{ color: 'white' }}>
                Dean Machines
                </Typography>
            </TopAppBarTitle>
            </TopAppBarSection>
            <TopAppBarSection alignEnd>
                <TopAppBarActionItem aria-label="Settings" onClick={handleActionClick}>
                <Icon icon="settings" />
                </TopAppBarActionItem>
            <TabBar
            activeTabIndex={activeTabIndex}
                onActivate={handleTabChange}
            >
                {tabs.map((tab) => (
                <Tab key={tab.label} data-value={tab.value}>
                    {tab.label}
                </Tab>
                ))}
            </TabBar>
            </TopAppBarSection>
        </TopAppBarRow>
        </TopAppBar>
    </>
    );
}