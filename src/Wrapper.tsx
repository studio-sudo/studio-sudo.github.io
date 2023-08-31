import { Outlet } from "react-router-dom";
import { useScrollToTop } from "./utils";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const Wrapper = () => {
    useScrollToTop();
    return (<>
        <Header isIndex={true}/>
        <Outlet/>
        <Footer />
    </>);
}