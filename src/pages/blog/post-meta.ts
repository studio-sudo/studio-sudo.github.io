import { getMarkdownName } from "../../utils";
import { readFileSync } from 'fs';
import fglob from 'fast-glob';
import fm from 'front-matter';

type PostAttributes = {
    title: string,
    description: string,
    createdBy: string,
    createdOn: string
}

export type BlogPostsInfo = {
    slug: string;
    title: string;
    description: string;
    createdBy: string;
    createdOn: string;
}[];

export default async () => {
    const entries = fglob.globSync('./posts/*.md', {
        cwd: __dirname,
        absolute: true
    });
    const files = entries.map(e => ([e, readFileSync(e, { encoding: 'utf-8' })] as [string, string]));
    const postImports = files.map((f) => ([f[0], fm(f[1]).attributes] as [string, PostAttributes]))
    const posts: BlogPostsInfo = postImports
        .map(([path, data]) => ({
            slug: getMarkdownName(path),
            title: data.title,
            description: data.description,
            createdBy: data.createdBy,
            createdOn: data.createdOn
        }));
    return {
      data: posts,
    }
  }