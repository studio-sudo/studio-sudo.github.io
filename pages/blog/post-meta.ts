import { getMarkdownName } from "../../renderer/utils";
import { readFileSync } from 'fs';
import fglob from 'fast-glob';
import fm from 'front-matter';
import markdown from 'markdown-it';

type PostAttributes = {
    title: string,
    description: string,
    createdBy: string,
    createdOn: Date,
    isRecommended: boolean
}

export type BlogPostsInfo = {
    slug: string;
    title: string;
    description: string;
    createdBy: string;
    createdOn: Date;
    isRecommended: boolean;
    body: string;
}[];

export default async () => {
    const entries = fglob.globSync('./posts/*.md', {
        cwd: __dirname,
        absolute: true
    });
    const files = entries.map(e => ([e, readFileSync(e, { encoding: 'utf-8' })] as [string, string]));
    const postImports = files.map((f) => {
        const fmData = fm(f[1]);
        return ([f[0], fmData.attributes, fmData.body] as [string, PostAttributes, string])
    });

    const markdownParser = new markdown();

    const posts: BlogPostsInfo = postImports
        .map(([path, data, body]) => ({
            slug: getMarkdownName(path),
            title: data.title,
            description: data.description,
            createdBy: data.createdBy,
            createdOn: data.createdOn,
            isRecommended: data.isRecommended,
            body: markdownParser.render(body) 
        }));
    return {
      data: posts,
    }
  }