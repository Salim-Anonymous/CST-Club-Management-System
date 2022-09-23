import { PasswordInput, Text, Group, PasswordInputProps, Anchor } from '@mantine/core';

export default function ForgotPasswordInput({ className, style, ...others }: PasswordInputProps) {
    return (
        <div className={className} style={style}>
            <PasswordInput placeholder="Your password" id="your-password" {...others} />
            <Group position="apart" m={30}>
                <Anchor<'a'>
                    href="#"
                    onClick={(event) => event.preventDefault()}
                    sx={(theme) => ({
                        paddingTop: 2,
                        color: theme.colors[theme.primaryColor][theme.colorScheme === 'dark' ? 4 : 6],
                        fontWeight: 500,
                        fontSize: theme.fontSizes.xs,
                    })}
                >
                    Forgot your password?
                </Anchor>
            </Group>
        </div>
    );
}
