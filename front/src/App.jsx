import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./layouts/header/index"
import { StoreProvider } from "./store"
import { Login, Logout, Home, SignUp, Profile } from "./pages"
const App = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/logout" element={<Logout />}></Route>
                    <Route path="/signup" element={<SignUp />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default App
