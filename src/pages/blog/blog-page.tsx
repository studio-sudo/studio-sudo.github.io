import { ReactNode } from 'react';
import './blog-page.scss'
import type { BlogPostsInfo } from './post-meta';
import { Link } from 'react-router-dom';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts");

export function BlogPage({name, children}: { name: string; children: ReactNode }) {
    const data = blogPosts.find(post => post.slug === name)!;
    return <div className='blogPage'>
        <div className='blogPageHeader'>
            <Link to={'../'}>&lt; Powrót</Link>
            <h1>{data.title}</h1>
        </div>
        <p>{data.description}</p>
        {children}
    </div>
}