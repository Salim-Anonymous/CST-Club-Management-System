import {ActionIcon, Burger, Group, Header, MediaQuery, useMantineTheme} from "@mantine/core";
import Image from "next/image";
import {DarkThemeToggle} from "../darkModeToggle";
import {IconMoonStars, IconSun} from "@tabler/icons";


export default function HeaderGlobal({darkMode,active,opened,setOpened,setDarkMode}: { darkMode:any,active:any,opened: boolean, setOpened: any, setDarkMode: any }) {

    const theme = useMantineTheme();
    const toggleColorScheme = () => {
        setDarkMode(!darkMode);
    }

    return (<Header height={70}>
        <div style={{display:"flex",justifyContent:"space-around"}}>
            <div style={{position:"relative",right:25}}>
                <div style={{display:"flex",justifyContent:"space-evenly"}}>
                    <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                        <Burger
                            opened={opened}
                            onClick={() => setOpened((o: any) => !o)}
                            size="md"
                            color={theme.colors.gray[6]}
                            m="xl"
                        />
                    </MediaQuery>
                    <Image src={"/logo/logo-no-background.svg"}
                           style={{padding:0, margin:0}} height={50} width={50} alt="logo" />
                    <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
                        <h6>CLUB ACTIVITIES MANAGEMENT SYSTEM</h6>
                    </MediaQuery>
                </div>
            </div>

            <div>
                <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                    <h5 style={{position:"relative",right:40,top:10}}>{active===0?"News Feed":"Clubs You May Like"}</h5>
                </MediaQuery>
            </div>
            <div style={{display:"flex",alignItems:"center"}}>
                <MediaQuery smallerThan="sm" styles={{display: 'none'}}>
                    <div>
                        <DarkThemeToggle darkMode={darkMode} setDarkTheme={setDarkMode}/>
                    </div>
                </MediaQuery>
                <MediaQuery largerThan="sm" styles={{display: 'none'}}>
                    <Group position="center" my="xl">
                        <ActionIcon
                            onClick={() => toggleColorScheme()}
                            size="lg"
                            sx={(theme) => ({
                                backgroundColor:
                                    darkMode ? theme.colors.dark[6] : theme.colors.gray[0],
                                color: darkMode ? theme.colors.yellow[4] : theme.colors.blue[6],
                            })}
                        >
                            {darkMode ? <IconSun size={18} /> : <IconMoonStars size={18} />}
                        </ActionIcon>
                    </Group>
                </MediaQuery>
            </div>
        </div>
    </Header>)
}
