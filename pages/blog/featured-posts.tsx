import { Link } from "../../renderer/Link";
import { BlogPostsInfo } from "./post-meta";

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts");

export const FeaturedPosts = ({ root }: { root: string }) => {
    return (
        <aside className='rightContainer'>
            <div className='welcomeText'>
                <h2>
                    Blog
                </h2>
                <p>
                    Ciekawe artykuły opisujące techniczne aspekty tworzenia stron internetowych i aplikacji komputerowych.
                </p>
            </div>
            <div className='featuredPosts'>
                {blogPosts
                    .filter(post => post.isRecommended)
                    .map(post => (
                    <article className='articleItem' key={post.slug}>
                        <Link href={`${root}${post.slug}`}><h3 className='articleTitle'>{post.title}</h3></Link>
                    </article>
                    ))}
            </div>
        </aside>
    );
}