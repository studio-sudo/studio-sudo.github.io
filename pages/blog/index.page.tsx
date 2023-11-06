import './blog-index.scss'
import type { BlogPostsInfo } from './post-meta';
import { FeaturedPosts } from './featured-posts';
import { Link } from '../../renderer/Link';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts")

export function Page() {
  return (
    <div className='blogContainer mx-md-5'>
      <section className='leftContainer'>
        {blogPosts.map(post => (
          <article className='articleItem' key={post.slug}>
            <h2 className='articleTitle'><Link href={'/blog/' + post.slug}>{post.title}</Link></h2>
            <p>{post.description}</p>
            <Link className='readMoreLink' href={'/blog/' + post.slug}>Czytaj dalej »</Link>
          </article>
        ))}
      </section>
      <FeaturedPosts root='/blog/' />
    </div>
  )
}

export const documentProps = {
  // This title and description will override the defaults
  title: 'Blog - Sudo Studio',
  description: 'Ciekawe artykuły opisujące techniczne aspekty tworzenia stron internetowych i aplikacji komputerowych.'
}