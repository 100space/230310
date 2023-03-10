import styled from "styled-components"
import { Input } from "./input.styled"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
`
const Div = styled.div`
    width: 100%;
    height: ${(props) => props.hight + `rem`};
    display: flex;
    justify-content: center;
    align-items: center;
    &:nth-child(1) {
        font-size: 4rem;
    }
`

export const InputBox = () => {
    return (
        <Container>
            <Div hight="10">LOGIN</Div>
            <Div hight="30">
                <Input />
            </Div>
        </Container>
    )
}
