import { FC, Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import { Role } from "@/shared/types";

const HostRegistration = lazy(() => import("./HostRegister"));
const Login = lazy(() => import("./Login"))
const HostDashboard = lazy(() => import("./HostDashboard"))
const PageNotFound = lazy(() => import("./PageNotFound"))
const Protection = lazy(() => import("../components/ProtectedRoute"))

const Router: FC = () => {
    return (
        <Routes>
            <Route path="/host-register" element={<Suspense fallback={<Loading />}><HostRegistration /></Suspense>} />
            <Route path="/host-login" element={<Suspense fallback={<Loading />}><Login role={Role.host} /></Suspense>} />
            <Route path="/host-dashboard" element={<Suspense fallback={<Loading />}><Protection><HostDashboard /></Protection></Suspense>} />
            <Route path="/*" element={<Suspense fallback={<Loading />}><PageNotFound /></Suspense>} />
        </Routes>
    )
}

export default Router