import { createBrowserRouter } from "react-router-dom";
import DashScreen from "../Pages/DashScreen";

export const mainRoute = createBrowserRouter([{
    path: "/",
    element: <DashScreen />,
    children: [{
        index: true,
        element: <></>
    }]
}]);