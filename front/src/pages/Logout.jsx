import { useStore } from "../store"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

export const Logout = () => {
    //상태바꾸기
    //url
    const logout = async () => {
        const cookie = document.cookie.split("=")[1]
        console.log(cookie)
        const result = await axios.delete("http://localhost:3005/check", { withCredentials: true, headers: { Authorization: `Bearer ${cookie}` } })
        console.log(result, "logout.jsx")
    }
    const navigate = useNavigate()
    const { dispatch } = useStore()

    useEffect(() => {
        logout()
        dispatch({ type: "LOGOUT" })
        navigate("/")
    }, [])
    return <></>
}
