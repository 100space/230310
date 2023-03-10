import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Header } from "./layouts/header/index"
import { StoreProvider } from "./store"
import { Login } from "./pages/Login"
const App = () => {
    return (
        <StoreProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<Header />} />
                </Routes>
                <Routes>
                    <Route path="/login" element={<Login />}></Route>
                </Routes>
            </BrowserRouter>
        </StoreProvider>
    )
}

export default App
