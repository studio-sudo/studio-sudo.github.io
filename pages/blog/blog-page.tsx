import { ReactNode } from 'react';
import './blog-page.scss'
import type { BlogPostsInfo } from './post-meta';
import { FeaturedPosts } from './featured-posts';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts");

export function BlogPage({ name, children }: { name: string; children: ReactNode }) {
    const data = blogPosts.find(post => post.slug === name)!;
    return <div className='blogContainer'>
        <article className='leftContainer'>
            <h1 className='articleTitle'>{data.title}</h1>
            <p>{data.description}</p>
            {children}
        </article>
        <FeaturedPosts root='../'/>
    </div>

}