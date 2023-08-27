/// <reference types="vite/client" />

interface globalThis {
    gsap: import('gsap');
}

declare module '*.md' {
    const attributes: Record<string, unknown>; 
  
    import React from 'react'
    const ReactComponent: React.FC;
    
    export { attributes, ReactComponent };
}