import styled from "styled-components"
import { useInput } from "../../hooks/useInput"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useStore } from "../../store"

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 10rem;
    align-items: center;
    & * {
        border: solid 1px #999;
    }
`
const Box = styled.input`
    width: 30rem;
    height: 4rem;
    font-size: 1.6rem;
    padding: 0.7rem 1.4rem;
    margin-bottom: 2rem;
`
const Button = styled.button`
    width: 30rem;
    height: 4rem;
    margin-top: 3rem;
    font-size: 1.6rem;
    background: #b49292;
`

export const Input = () => {
    const userId = useInput("")
    const userPw = useInput("")
    const navigate = useNavigate()
    const { state, dispatch } = useStore()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const userid = userId.value
        const userpw = userPw.value
        const result = await axios.post("http://127.0.0.1:3005/login", { userid, userpw })
        const { data } = result
        if (data.status === 200) {
            dispatch({ type: "LOGIN", payload: !state.isLogin })
            navigate("/")
        } else if (data.status >= 400) {
            console.log(data.message)
        }
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Box type="text" {...userId} placeholder="아이디를 입력해주세요" id="userid" name="userid" />
            <Box type="password" {...userPw} placeholder="패스워드를 입력해주세요" id="userpw" name="userpw" />
            <Button type="submit"> 로그인 </Button>
        </Form>
    )
}
