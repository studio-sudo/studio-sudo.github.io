import { Outlet, useLocation } from "react-router-dom";
import { useScrollToTop } from "./utils";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Wrapper = () => {
    useScrollToTop();
    const location = useLocation();

    return (<>
        <Header isIndex={location.pathname === '/'}/>
        <Outlet/>
        <Footer />
    </>);
}