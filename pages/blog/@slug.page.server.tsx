import './blog-page.scss'
import type { BlogPostsInfo } from './post-meta';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts");

export async function prerender() {
    const blogPageURLs = blogPosts.map(post => '/blog/' + post.slug)
    return blogPageURLs
}