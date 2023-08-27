import React, { Suspense } from "react";
import { RouteObject } from "react-router-dom"

export const getMarkdownName = (path: string): string => {
    return path.split('\\').pop()!.split('/').pop()!.split('.').shift()!;
}

export const getMarkdownPage = (path: string, loader: () => Promise<unknown>, Wrapper?: React.FC<{ name: string, children: React.ReactNode; }>): RouteObject => {
    const Component = React.lazy(() => loader().then(x => ({ default: (x as { ReactComponent: React.FC }).ReactComponent})));
    path = getMarkdownName(path);
    const Suspended = <Suspense fallback={<div>Loading...</div>}>
        <Component/>
    </Suspense>;

    if (Wrapper) {
        return {
            path,
            element: <Wrapper name={path}>
                {Suspended}
            </Wrapper>
        }
    } else {
        return ({
            path,
            element: Suspended
        });
    }
}