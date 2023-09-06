import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/error-page";
import Group from "./pages/Group-page";
import Login from "./pages/login-page";
import Profile from "./pages/profile-page";
import Signup from "./pages/signup-page";
import Dashboard from "./routes/Dashboard.jsx";
import Protected from "./utils/Protected";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Protected isSignedIn={true}>
                <Dashboard />
            </Protected>
        ),
        children: [
            {
                path: "/collaboration",
                element: <Group />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
        ],
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/signup",
        element: <Signup />,
        errorElement: <ErrorPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
