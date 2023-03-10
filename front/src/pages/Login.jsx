import { useStore } from "../store"
import { LoginWrap, LoginWindow, InputBox } from "../components/login"

export const Login = () => {
    const { state, dispatch } = useStore()
    return (
        <>
            <LoginWrap>
                <LoginWindow>
                    <InputBox />
                </LoginWindow>
            </LoginWrap>
        </>
    )
}
