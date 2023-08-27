import { Link } from 'react-router-dom';
import './blog-index.scss'

type BlogPostsInfo = {
  slug: string;
  title: string;
  description: string;
}[];

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts")

function BlogIndex() {
  console.log(blogPosts);
  return (
    <>
      {blogPosts.map(post => (<Link key={post.slug} to={post.slug}>{post.title}</Link>))}
    </>
  )
}

export default BlogIndex
