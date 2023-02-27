<<<<<<< HEAD
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../views/Home";
import Port from "../views/Port"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/port",
        element: <Port />
    }
])
export default class Route extends Component {

    render() {
        return (
            <router />
        )
    }
}
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "../views/Home";
import Port from "../views/Port"
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/port",
        element: <Port />
    }
])
export default class Route extends Component {

    render() {
        return (
            <router />
        )
    }
}
>>>>>>> d526fa272ed52c5957150f6feb0afff7f2520ff3
