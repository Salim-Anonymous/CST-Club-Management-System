import {useState} from 'react';
import {Navbar, Tooltip, UnstyledButton, createStyles, Stack} from '@mantine/core';
import {
    TablerIcon,
    IconSwitchHorizontal, IconNews, IconActivity,
} from '@tabler/icons';
import {useRouter} from "next/router";


const useStyles = createStyles((theme) => ({
    link: {
        width: 50,
        height: 50,
        borderRadius: theme.radius.md,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.colorScheme === 'dark' ?
            theme.colors.dark[0] : theme.colors.gray[7],

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ?
                theme.colors.dark[5] : theme.colors.gray[0],
        },
    },

    active: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant(
                {variant: 'light', color: theme.primaryColor}
            ).background,
            color: theme.fn.variant(
                {variant: 'light', color: theme.primaryColor}
            ).color,
        },
    },
}));

interface NavbarLinkProps {
    icon: TablerIcon;
    label: string;
    active?: boolean;

    onClick?(): void;
}

function NavbarLink({icon: Icon, label, active, onClick}: NavbarLinkProps) {
    const {classes, cx} = useStyles();
    return (
        <Tooltip label={label} position="right" transitionDuration={0}>
            <UnstyledButton
                onClick={onClick}
                className={cx(classes.link, {[classes.active]: active})}>
                <Icon stroke={1.5}/>
            </UnstyledButton>
        </Tooltip>
    );
}

const mockdata = [
    {icon: IconNews, label: 'News Feeds'},
    {icon: IconActivity, label: 'Clubs You May Like'},
];

export function SidebarGlobal(
    {opened, setOpened, active, setActive}: { opened: boolean, setOpened: any, active:number, setActive: any })
{

    const links = mockdata.map(
        (link, index) => (
            <NavbarLink
                {...link}
                key={link.label}
                active={index === active}
                onClick={() => {
                    setActive(index)
                    setOpened(false)
                }}
            />
        ));

    return (
        <Navbar p="md"
                hiddenBreakpoint="sm"
                hidden={!opened}
                width={{sm: 70, lg: 90}}>
            <Navbar.Section grow mt={50}>
                <Stack justify="center" spacing={0}>
                    {links}
                </Stack>
            </Navbar.Section>
            <Navbar.Section>
                <Stack justify="center" spacing={0}>
                    <NavbarLink
                        icon={IconSwitchHorizontal}
                        label="Change account"/>
                </Stack>
            </Navbar.Section>
        </Navbar>
    );
}
