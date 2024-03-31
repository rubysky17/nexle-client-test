import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const PublicRoute = (props: any) => {
    const { element } = props;
    const { isAuthenticated }: any = useAuth();

    /**
     * Can have more logic in that PublicRoute like: check token or redirect to other path with config logic
     * Simple only check isAuthenticated
     */
    if (isAuthenticated) {
        return <Navigate to="/dashboard" />;
    }

    return element
};