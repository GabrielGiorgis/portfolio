import { Route, Routes } from "react-router-dom";
import { Landing } from "../components/screens/Landing";

function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Landing />} />
        </Routes>
    )
}

export default AppRouter;