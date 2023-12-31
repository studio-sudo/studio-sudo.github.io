import './blog-page.scss'
import './blog-index.scss'
import type { BlogPostsInfo } from './post-meta';
import { FeaturedPosts } from './featured-posts';
import { usePageContext } from '../../renderer/usePageContext';

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts");

export function Page() {
    const pageContext = usePageContext();
    const data = blogPosts.find(post => post.slug === pageContext.routeParams!.slug)!;
    return <div className='blogContainer mx-md-5'>
        <article className='leftContainer'>
            <h1 className='articleTitle'>{data.title}</h1>
            <p>{data.description}</p>
            <section dangerouslySetInnerHTML={{ __html: data.body }}></section>
        </article>
        <FeaturedPosts root='/blog/'/>
    </div>
}
