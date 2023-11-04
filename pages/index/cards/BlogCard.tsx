import './BlogCard.scss';
import { BlogPostsInfo } from '../../blog/post-meta';
import { Button } from '../../../renderer/Button';
import { Link } from '../../../renderer/Link';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("../../blog/post-meta.ts")

export function BlogCard() {
    const posts = [...blogPosts]
        .sort((a, b) => a.createdOn.valueOf() - b.createdOn.valueOf())
        .slice(0, 3);

    return (
        <div id="blog" className="stripe blog">
            <div className='row g-0'>
                <h2 className='centered'>Nasz Blog</h2>
                <div className="lead-text centered">Nasze najnowsze artykuły</div>
                <div className='content-text centered'>
                    Ciekawe artykuły opisujące techniczne aspekty tworzenia stron internetowych i aplikacji komputerowych
                </div>
            </div>
            <div className='blog-index row g-0 px-5'>
                {posts.map(post => (
                    <div className='col-lg-4 col-12' key={post.slug}>
                        <article className='blog-article-card of-color'>
                            <div className='creator'>{post.createdBy}</div>
                            <div className='date'>{post.createdOn.toLocaleDateString()}</div>
                            <Link href={`/blog/${post.slug}`} className='title'><div>{post.title}</div></Link>
                        </article>
                    </div>
                ))}
            </div>
            <div className='row g-0'>
                <div className='col-12 px-4 pt-4'>
                    <Button onClick={() => window.location.pathname = '/blog'} label="Czytaj więcej" />
                </div>
            </div>
        </div>
    )
}