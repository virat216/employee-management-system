import { Navigate } from "react-router-dom";

import { useAuth } from "./useAuth";

interface PublicRouteProps {

    children: React.ReactNode;

}

function PublicRoute({

    children,

}: PublicRouteProps) {

    const {

        isAuthenticated,

    } = useAuth();

    if (isAuthenticated) {

        return <Navigate to="/dashboard" replace />;

    }

    return <>{children}</>;

}

export default PublicRoute;