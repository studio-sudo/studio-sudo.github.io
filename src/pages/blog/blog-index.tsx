import { Link } from 'react-router-dom';
import './blog-index.scss'
import type { BlogPostsInfo } from './post-meta';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts")

function BlogIndex() {
  return (
    <div className='blogIndex'>
      {blogPosts.map(post => (<Link key={post.slug} to={post.slug}>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
      </Link>))}
    </div>
  )
}

export default BlogIndex
