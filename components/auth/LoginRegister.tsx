import ForgotPasswordInput from "./ForgotPasswordInput";
import AutocompleteEmailInput from "./AutocompleteEmailInput";
import SocialButtons from "./SocialButtons";
import {Anchor, Avatar, Button, Container, Paper} from "@mantine/core";
import {DarkThemeToggle} from "../darkModeToggle";
import {useState} from "react";
import Register from "./Register";
import Login from "./Login";

export default function LoginRegister(props: { Auth: any, setDarkMode: any, currentTheme: any }) {
    const {Auth} = props;
    const [register, setRegister] = useState(true);
    const login = () => {
        Auth(false)
    }
    //return a login form
    return (
        <Container size={400} px={5} mt={20} mb={20}>
            <Paper shadow="lg" radius="md" p="xl" withBorder>
                <Container
                    sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                    <DarkThemeToggle darkMode={props.currentTheme} setDarkTheme={props.setDarkMode}/>
                    <Avatar size={200} m={50} src="/logo/logo-no-background.svg"/>
                </Container>
                {register ? <Login login={login}/> : <Register/>}
                <hr/>
                <SocialButtons setRegister={setRegister} register={register}/>
            </Paper>
        </Container>);
}
