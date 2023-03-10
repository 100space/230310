import { Navigation } from "./navigation"
import { HeaderWrapper, Logo, Nav } from "./styled"
import { useStore } from "../../store"

export const Header = () => {
    const { state, dispatch } = useStore()
    const isLoign = state.isLogin
    const category = [
        { path: "/", name: "Home" },
        { path: "/login", name: "Login", isLogin: false },
        { path: "/signup", name: "Signup", isLogin: false },
        { path: "/logout", name: "Logout", isLogin: true },
        { path: "/profile", name: "Profile", isLogin: true },
        { path: "/comment", name: "Comment", isLogin: true },
        {
            path: "/board/list",
            name: "Board",
            subCate: [
                { path: "/board/list", name: "게시판" },
                { path: "/board/write", name: "글작성", isLogin: true },
            ],
        },
    ]
    return (
        <>
            <HeaderWrapper>
                <Logo>Logo</Logo>
                <Nav>
                    <Navigation category={category} isLogin={isLoign}></Navigation>
                </Nav>
            </HeaderWrapper>
        </>
    )
}
