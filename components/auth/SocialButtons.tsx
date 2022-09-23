import {Anchor, Group} from '@mantine/core';

import GoogleLogin from "react-google-login";

export default function SocialButtons({setRegister,register}: {setRegister: any,register: any}) {

    const setRegisterView = () => {
        setRegister(!register)
    }
    return (
        <Group position="center" sx={{ margin:30, display:"flex",flexDirection:"column", justifyContent:"center"}}>
            <GoogleLogin
                clientId="481529237761-un5n2rmpoaiplakdgu0ulaqb28sav8f1.apps.googleusercontent.com"
                buttonText="Login with Google"
                disabled={false}
            />
            <Anchor<'a'>
                href="#"
                onClick={setRegisterView}
                sx={(theme) => ({
                    paddingTop: 2,
                    color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
                    fontWeight: 500,
                    fontSize: theme.fontSizes.xs,
                })}
                m={30}
            >
                {!register?"Login":"Register"}
            </Anchor>
        </Group>
    );
}
