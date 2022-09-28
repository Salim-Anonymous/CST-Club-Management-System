import {useState} from 'react';
import Sidebar from "./Sidebar";
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
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import {DarkThemeToggle} from "../darkModeToggle";



export default function AppShellDemo(props: { children: React.ReactNode, currentTheme: any, setDarkMode: any }) {
    const app = props.children;
    const { currentTheme, setDarkMode } = props;
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);
    return (
        <AppShell
            styles={{
                main: {
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            navbar={
                <Sidebar currentTheme={currentTheme} setDarkMode={setDarkMode} opened={opened}/>
            }
            // may use in future builds
            aside={
                <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
                    <Aside p="md" hiddenBreakpoint="sm" width={{sm: 200, lg: 300}}>
                        <Text>Conversations</Text>
                    </Aside>
                </MediaQuery>
            }
            // footer={
            //     <Footer height={60} p="md">
            //         <a
            //             href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            //             target="_blank"
            //             rel="noopener noreferrer"
            //         >
            //             created by
            //             <span className={styles.logo}>
            //             <Image src="/logo/logo-no-background.svg" alt="group Logo" width={72} height={16}/>
            //           </span>
            //         </a>
            //     </Footer>
            // }
            header={
                <Header height={70}>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:"flex"}}>
                            <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                                <Burger
                                    opened={opened}
                                    onClick={() => setOpened((o) => !o)}
                                    size="sm"
                                    color={theme.colors.gray[6]}
                                    mr="xl"
                                />
                            </MediaQuery>
                            <Image src="/logo/logo-no-background.svg" style={{padding:0, margin:0}} height={50} width={50} alt="logo" />
                            <h6>CLUB ACTIVITIES MANAGEMENT SYSTEM</h6>
                        </div>
                        <div style={{display:"flex",alignItems:"center"}}>
                            <DarkThemeToggle darkMode={currentTheme} setDarkTheme={setDarkMode}/>
                        </div>
                    </div>
                </Header>
            }
        >
            {app}
        </AppShell>
    );
}
