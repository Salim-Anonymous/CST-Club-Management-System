import AutocompleteEmailInput from "./AutocompleteEmailInput";
import ForgotPasswordInput from "./ForgotPasswordInput";
import {Button} from "@mantine/core";

export default function Login({login}: { login: any }) {
    return <div>
        <h1 style={{margin: 30}}>Login</h1>
        <form>
            <AutocompleteEmailInput/>
            <ForgotPasswordInput m={30}/>
            <br/>
            <Button m={30} mt={5} onClick={login} variant="gradient"
                    gradient={{from: 'teal', to: 'blue', deg: 45}} radius="sm" size="xs" uppercase>
                Login
            </Button>
        </form>
    </div>;
}
