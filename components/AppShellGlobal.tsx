import {useState} from 'react';
import Sidebar from "./Sidebar";
import { Scrollbars } from 'react-custom-scrollbars';
import {
    AppShell,
    Header,
    Footer,
    Aside,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';
import styles from "../styles/Home.module.css";
import Image from "next/image";
import {DarkThemeToggle} from "./darkModeToggle";
import {SidebarGlobal} from './SidebarGlobal';
import {NewsFeed} from "./NewsFeed";
import ClubRecommendation from "./Clubs";
import HeaderGlobal from "./HeaderGlobal"



export default function AppShellGlobal(props: { currentTheme: any, setDarkMode: any }) {
    const { currentTheme, setDarkMode } = props;
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    const [active, setActive] = useState(0);
    return (
        <AppShell
            styles={(theme) => ({
                main: {
                    backgroundColor: currentTheme ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            })}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <SidebarGlobal active={active} setActive={setActive}  opened={opened} setOpened={setOpened}/>
            }
            // may use in future builds
            // aside={
            //     <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
            //         <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>
            //             <Text>Conversations</Text>
            //         </Aside>
            //     </MediaQuery>
            // }

            header={
                <HeaderGlobal active={active} opened={opened} setOpened={setOpened} darkMode={currentTheme} setDarkMode={setDarkMode}/>
            }
        >
            {active===0?<NewsFeed/>:<ClubRecommendation/>}
        </AppShell>
    );
}
