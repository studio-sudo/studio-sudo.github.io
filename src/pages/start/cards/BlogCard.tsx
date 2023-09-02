import './BlogCard.scss';
import { BlogPostsInfo } from '../../blog/post-meta';
import { Link } from 'react-router-dom';
import { Button } from '../../../components/Button';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("../../blog/post-meta.ts")

export function BlogCard() {

    const posts = [...blogPosts]
        .sort((a, b) => a.createdOn.valueOf() - b.createdOn.valueOf())
        .slice(0, 3);

    return (
        <div id="blog" className="stripe blog">
            <div className='row g-0'>
                <h2 className='centered'>Our Latest Blog</h2>
                <div className="lead-text centered">Latest News And Inspirational Stories</div>
                <div className='content-text centered'>Positive pleasure-oriented goals are much more powerful motivators than negative fear-based ones. Although each is successful separately</div>
            </div>
            <div className='blog-index row g-0 px-5'>
                {posts.map(post => (
                    <div className='col-lg-4 col-12'>
                        <article className='blog-article-card of-color'>
                            <div className='creator'>{post.createdBy}</div>
                            <div className='date'>{post.createdOn.toLocaleDateString()}</div>
                            <Link to={`/blog/${post.slug}`} className='title'><div>{post.title}</div></Link>
                        </article>
                    </div>
                ))}
            </div>
            <div className='row g-0'>
                <div className='col-12 px-4 pt-4'>
                    <Button label="Czytaj więcej" />
                </div>
            </div>
        </div>
    )
}