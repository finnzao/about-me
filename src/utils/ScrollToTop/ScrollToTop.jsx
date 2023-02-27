<<<<<<< HEAD
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
function SmoothScroll({ children }) {
    const location = useLocation();
    const navType = useNavigationType();
    useEffect(() => {
        if (navType !== "POP") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [location]);
    return <>{children}</>;
}
=======
import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";
function SmoothScroll({ children }) {
    const location = useLocation();
    const navType = useNavigationType();
    useEffect(() => {
        if (navType !== "POP") {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }, [location]);
    return <>{children}</>;
}
>>>>>>> d526fa272ed52c5957150f6feb0afff7f2520ff3
export default SmoothScroll;