import {
    Routes,
    Route,
    Navigate,
    BrowserRouter,
    Outlet,
    useLocation,
} from "react-router-dom";
import { useAuth } from "./context/authContext";
import { useApp } from "./context/loadingContext";
import Login from "./layouts/auth/loginAuth";
import Register from "./layouts/auth/registerAuth";
import Home from "./layouts/home/home";
import "./assets/css/flowbite.css";
import LoadingScreen from "./components/ui/loadingScreen";

const PrivateRoute = () => {
    const { checkAuth } = useAuth();
    const location = useLocation();

    if (!checkAuth()) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return <Outlet />;
};

const ReactRoute = () => {
    const { isNavigating } = useApp();

    return (
        <BrowserRouter>
            {isNavigating && <LoadingScreen />}
            <Routes>
                {/* Public Routes */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Protected Routes */}
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<Navigate replace to="/home" />} />
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default ReactRoute;
