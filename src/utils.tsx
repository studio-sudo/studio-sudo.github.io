import React, { Suspense, useEffect } from "react";
import { RouteObject, useLocation } from "react-router-dom"

export const getMarkdownName = (path: string): string => {
    return path.split('\\').pop()!.split('/').pop()!.split('.').shift()!;
}

export const getMarkdownPage = (path: string, loader: () => Promise<unknown>, Wrapper?: React.FC<{ name: string, children: React.ReactNode; }>): RouteObject => {
    const Component = React.lazy(() => loader().then(x => ({ default: (x as { ReactComponent: React.FC }).ReactComponent})));
    const slug = getMarkdownName(path);
    const Suspended = <Suspense fallback={<div>Ładowanie...</div>}>
        <Component/>
    </Suspense>;

    if (Wrapper) {
        return {
            path: slug,
            element: <Wrapper name={slug}>
                {Suspended}
            </Wrapper>
        }
    } else {
        return ({
            path: slug,
            element: Suspended
        });
    }
}

export const useScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
}