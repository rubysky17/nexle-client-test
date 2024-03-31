
import {
    createBrowserRouter,
} from "react-router-dom";

import { Dashboard, SignInPage, SignUpPage } from "../pages";
import { ProtectedRoute } from "./ProtectedRoute";
import { PublicRoute } from "./PublicRoute";

import AuthTemplate from "../templates/Auth";
import AdminTemplate from "templates/Admin";

export const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <div>
                <h1>Following page</h1>
                <p>/sign-up: Signup page</p>
                <p>/sign-in: Login page</p>
                <p>/dashboard: Dashboard page</p>
            </div>
        ),
    },
    {
        element: <AuthTemplate />,
        children: [
            {
                path: "/sign-in",
                element: <PublicRoute element={
                    <SignInPage />
                } />,
            },
            {
                path: "/sign-up",
                element: <PublicRoute element={
                    <SignUpPage />
                } />,
            },
        ]
    },
    {
        element: <AdminTemplate />,
        children: [
            {
                path: "/dashboard",
                element: <ProtectedRoute element={
                    <Dashboard />
                } />,
            },
        ]
    },

]);