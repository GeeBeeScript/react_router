import { Routes, Route } from "react-router-dom"
import MainHeader from "../components/MainHeader"

const Main = () => {
    return (
        <section>
            <h1>This is the main page</h1>
            <Routes>
                <Route path='/welcome/new-user' element={ <MainHeader /> } />
            </Routes>
        </section>
    )
}

export default Main