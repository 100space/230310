import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Logo2 = styled.h1`
    width: 14rem;
    margin-left: calc(50% - 7rem);
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Logo = () => {
    const navigate = useNavigate()

    const handleClick = () => {
        navigate("/")
    }
    return (
        <>
            <Logo2 onClick={handleClick}>LOGO</Logo2>
        </>
    )
}
