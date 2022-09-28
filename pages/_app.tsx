import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, useMantineColorScheme } from '@mantine/core';
import AppShellDemo from "../components/user/AppShell";
import { Router, useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginRegister from "../components/auth/LoginRegister";
import Scrollbars from "react-custom-scrollbars";
import { RemoveScrollBar } from "react-remove-scroll-bar";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;
    const [darkMode, setDarkMode] = useState(false);
    //verify if the user is logged in
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    const [elevatedAccess, setElevatedAccess] = useState(false);
    useEffect(() => {
        if (localStorage.getItem('cams_key') === null) {
            Router.events.on('routeChangeStart', (url) => {
                window.location.href = '/login';
            })
        } else {
            setIsLoading(false);
        }
    }, [router, isLoading]);

    return (
        <>
            <Head>
                <title>Page title</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            </Head>

            <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                    colorScheme: darkMode ? 'dark' : 'light',
                    headings: {
                        // properties for all headings
                        fontWeight: 400,
                        fontFamily: 'Roboto',

                        // properties for individual headings, all of them are optional
                        sizes: {
                            h1: { fontWeight: 100, fontSize: 32, lineHeight: 1.4 },
                            h2: { fontSize: 28, lineHeight: 1.5 },
                            // ...up to h6
                            h6: { fontWeight: 900 },
                        },
                    },
                }}
            >

                {!elevatedAccess ?
                    <Component currentTheme={darkMode} setDarkMode={setDarkMode} {...pageProps} /> : isLoading ?
                        <LoginRegister Auth={setIsLoading} currentTheme={darkMode}
                            setDarkMode={setDarkMode} {...setIsLoading} />
                        : <AppShellDemo currentTheme={darkMode}
                            setDarkMode={setDarkMode}><Component {...pageProps} /></AppShellDemo>}
            </MantineProvider>
        </>

    );
}
