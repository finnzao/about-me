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
