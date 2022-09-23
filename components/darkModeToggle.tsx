import {
    createStyles,
    UnstyledButton,
    Text,
    Center,
    useMantineColorScheme,
    Group,
    Switch, useMantineTheme,
} from '@mantine/core';
import { upperFirst } from '@mantine/hooks';
import {IconMoon, IconMoonStars, IconSun} from '@tabler/icons';
import {dark} from "@mantine/prism/lib/Prism/prism-theme";

const useStyles = createStyles((theme) => ({
    control: {
        backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[4],
        color: theme.colorScheme !== 'dark' ? "black" : "white",
        display: 'flex',
        alignItems: 'center',
        borderRadius: 10,
        height: 20,
        width: theme.colorScheme === 'dark' ? 20: 20,
    },

    iconWrapper: {
        height: 28,
        width: 28,
        borderRadius: 28,
        backgroundColor: theme.colorScheme === 'dark' ? theme.black : theme.colors.blue[4],
        color: theme.colorScheme === 'dark' ? theme.colors.yellow[4] : theme.colors.dark[4],
    },

    value: {
        lineHeight: 1,
    },
}));

export function DarkThemeToggle(props:{setDarkTheme:any, darkMode:boolean}) {
    const {classes} = useStyles();
    const {darkMode, setDarkTheme} = props;
    const theme = useMantineTheme();
    const Icon = !darkMode? IconSun : IconMoon;
    const toggleColorScheme = () => {
        setDarkTheme(!darkMode);
    }
    return (
        <Switch
            checked={darkMode}
            onChange={() => toggleColorScheme()}
            size="lg"
            onLabel={<IconSun color={theme.white} size={20} stroke={1.5} />}
            offLabel={<IconMoonStars color={theme.colors.gray[6]} size={20} stroke={1.5} />}
        />)
}
