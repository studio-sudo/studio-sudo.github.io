import { Link } from "react-router-dom";
import { BlogPostsInfo } from "./post-meta";

const blogPosts = import.meta.compileTime<BlogPostsInfo>("./post-meta.ts");

export const FeaturedPosts = ({ root }: { root: string }) => {
    return (
        <aside className='rightContainer'>
            <div className='welcomeText'>
                <h2>Welcome to Community</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className='featuredPosts'>
                {blogPosts
                    .filter(post => post.isRecommended)
                    .map(post => (
                    <article className='articleItem' key={post.slug}>
                        <Link to={`${root}${post.slug}`}><h3 className='articleTitle'>{post.title}</h3></Link>
                    </article>
                    ))}
            </div>
        </aside>
    );
}