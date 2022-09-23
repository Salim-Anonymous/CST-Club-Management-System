import {Navbar, Text} from "@mantine/core";
import Link from "next/link";
import {DarkThemeToggle} from "./darkModeToggle";

export default function Sidebar(props: { opened: boolean, currentTheme: any, setDarkMode: any }) {

    const {opened, currentTheme, setDarkMode} = props;

    return <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{sm: 200, lg: 300}}>
        <Navbar.Section>
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <Text>Good Morning!</Text>
            </div>
        </Navbar.Section>
        <Navbar.Section grow mt="md">
            <Text>Application sidebar content</Text>
        </Navbar.Section>
        <Navbar.Section>
            <div>
                {/* add a link to the user's profile*/}
                <Link href="/profile">Profile</Link>
            </div>
        </Navbar.Section>
    </Navbar>;
}
