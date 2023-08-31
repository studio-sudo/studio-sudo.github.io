import { Link } from 'react-router-dom';
import './blog-index.scss'
import type { BlogPostsInfo } from './post-meta';
import { FeaturedPosts } from './featured-posts';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts")

function BlogIndex() {
  return (
    <div className='blogContainer'>
      <section className='leftContainer'>
        {blogPosts.map(post => (
          <article className='articleItem' key={post.slug}>
            <h2 className='articleTitle'><Link to={post.slug}>{post.title}</Link></h2>
            <p>{post.description}</p>
            <Link className='readMoreLink' to={post.slug}>Czytaj dalej »</Link>
          </article>
        ))}
      </section>
      <FeaturedPosts root='./'/>
    </div>
  )
}

export default BlogIndex
