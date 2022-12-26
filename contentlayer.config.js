import { defineDocumentType, makeSource } from "contentlayer/source-files"
import remarkMath from 'remark-math';
import remarkGfm from 'remark-gfm';
import rehypeKatex from 'rehype-katex';

import { remarkCodeHike } from "@code-hike/mdx"
import { createRequire } from "module"
const require_ = createRequire(import.meta.url)
import theme from "./theme.js"

import rehypeFootnote from './rehypeFootnote';


/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `posts/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    summary: {
      type: "string",
      require: true,
    },
    date: {
      type: "date",
      required: true,
    },
    published: {
      type: "boolean",
      default: true,
    },
    image: {
      type: "string",
      required: true,
    },
  },
  computedFields,
}));

export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [
      [ remarkCodeHike, { theme, lineNumbers: true } ],
      remarkMath,
      remarkGfm,
    ],
    rehypePlugins: [
      rehypeKatex,
      rehypeFootnote
    ]
  },
})

