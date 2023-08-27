import { RouteObject } from "react-router-dom";
import BlogIndex from "./blog-index";
import { getMarkdownPage } from "../../utils";

export const getBlogPages = (): RouteObject => {
    const blogPages = Object.entries(import.meta.glob('./posts/*.md'))
        .map(([path, loader]) => getMarkdownPage(path, loader));
    return {
        path: "/blog",
        children: [
          {
            path: '',
            element: <BlogIndex/>
          },
          ...blogPages
        ],
      }
}