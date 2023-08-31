import { Link } from 'react-router-dom';
import './blog-index.scss'
import type { BlogPostsInfo } from './post-meta';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts")

function BlogIndex() {
  return (
    <div className='blogContainer'>
      <div className='leftContainer'>
        {blogPosts.map(post => (<div className='articleItem' key={post.slug}>
          <h2 className='articleTitle'><a href={post.slug}>{post.title}</a></h2>
          <p>{post.description}</p>
          <a className='readMoreLink' href={post.slug}>Czytaj dalej »</a>
        </div>))}
      </div>
      <div className='rightContainer'>
        <div className='welcomeText'>
          <h2>Welcome to Comunity</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='featuredPosts'>
          {blogPosts.map(post => (<div className='articleItem' key={post.slug}>
            <h2 className='articleTitle'><a href={post.slug}>{post.title}</a></h2>
          </div>))}
        </div>
      </div>
    </div>
  )
}

export default BlogIndex
