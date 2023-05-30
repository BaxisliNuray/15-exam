import Add from "../pages/Add";
import DetailPage from "../pages/DetailPage";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot";
import Notfound from "../pages/Notfound";


export const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/add',
                element: <Add />
            },
            {
                path: '/title/:id',
                element: <DetailPage />
            },
            {
                path: "*",
                element: <Notfound />
            }
        ]
    }
]