import styled from "styled-components"
import { Logout } from "./Logout"
import { useStore } from "../store"
import { useEffect, useState } from "react"

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10rem;
    & {
        margin-bottom: 10rem;
    }
`

export const Profile = () => {
    const { state } = useStore()
    const dates = Math.floor(new Date() / 1000)
    const [now, setNow] = useState(dates)
    const { expire } = state.user
    const check = (v) => {
        const expire = v - dates

        const diffInSeconds = expire

        const hours = Math.floor(diffInSeconds / 3600)
        const minutes = Math.floor((diffInSeconds % 3600) / 60)
        const seconds = diffInSeconds % 60

        const timeout = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
        return timeout
    }
    useEffect(() => {
        setInterval(() => {
            const dates = Math.floor(new Date() / 1000)
            if (expire === dates) {
            }
            setNow(dates)
        }, 1000)
    }, [])
    // Logout
    return (
        <>
            {expire - now === 0 ? (
                <Logout />
            ) : (
                <>
                    <Div>Profile</Div>
                    <Div>쿠키 만료까지 남은시간 </Div>
                    <Div> {check(expire)}</Div>
                </>
            )}
        </>
    )
}
