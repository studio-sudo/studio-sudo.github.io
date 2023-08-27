import { ReactNode } from 'react';
import './blog-page.scss'

export function BlogPage({children}: { name: string; children: ReactNode }) {
    return <div>
        This is a page from a blog:
        {children}
    </div>
}