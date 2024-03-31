import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/AuthContext";

export const ProtectedRoute = (props: any) => {
    const { element } = props;
    const { isAuthenticated }: any = useAuth();

    if (!isAuthenticated) {
        return <Navigate to="/sign-in" />;
    }

    return element
};