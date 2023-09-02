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

export const hashCode = (data: string, seed: number = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for (let i = 0, ch; i < data.length; i++) {
        ch = data.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
    
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}