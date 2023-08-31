import { ReactNode } from 'react';
import './blog-page.scss'
import type { BlogPostsInfo } from './post-meta';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts");

export function BlogPage({ name, children }: { name: string; children: ReactNode }) {
    const data = blogPosts.find(post => post.slug === name)!;
    return <div className='blogContainer'>
        <div className='leftContainer'>
            <h1 className='articleTitle'>{data.title}</h1>
            <p>{data.description}</p>
            {children}
        </div>
        <div className='rightContainer'>
            <div className='welcomeText'>
                <h2>Welcome to Comunity</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='featuredPosts'>
                {blogPosts.map(post => (<div className='articleItem' key={post.slug}>
                    <h2 className='articleTitle'><a href={`/blog/${post.slug}`}>{post.title}</a></h2>
                </div>))}
            </div>
        </div>
    </div>

}