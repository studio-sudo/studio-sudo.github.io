import { Outlet } from "react-router-dom";
import { useScrollToTop } from "./utils";

export const Wrapper = () => {
    useScrollToTop();
    return <Outlet/>;
}