'use client';

import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Image from "next/image"
import CopyLink from "@/ui/CopyLink"
import GameboyView from "@/ui/GameboyView"
import Footnote from "@/ui/Footnote"
import Katex from "@/ui/Katex"

import { useMDXComponent } from "next-contentlayer/hooks"

const Mdx = ({ code } : {code: string}) => {
  const Component = useMDXComponent(code);

  return (
    <Component components={{
      p: ({ className, children }) => (
        <p className={className+" font-copy leading-relaxed md:leading-loose text-lg md:text-xl mb-4 md:mb-8"}>{children}</p>
      ),
      h2: ({ className, children }) => (
        <h2 className={className+" font-copy text-3xl md:text-4xl mb-4 md:mb-8 py-2"}>{children}</h2>
      ),
      h3: ({ className, children }) => (
        <h3 className={className+" font-copy text-lg md:text-2xl font-bold mb-4 md:mb-6 py-2"}>{children}</h3>
      ),
      ol: ({ className, children }) =>(
        <ol className={className+" font-copy leading-relaxed md:leading-loose text-lg md:text-xl ml-6 mb-4 md:mb-8 list-decimal list-outside"}>{children}</ol>
      ),
      ul: ({ className, children }) =>(
        <ul className={className+" font-copy leading-relaxed md:leading-loose text-lg md:text-xl mb-4 md:mb-8 list-disc ml-4 list-outside"}>{children}</ul>
      ),
      li: ({ className, children }) =>(
        <li className={className+" px-1"}>{children}</li>
      ),
      a: ({ href, children }) => (
        <CopyLink href={href}>{children}</CopyLink>
      ),
      sup: ({ className, children }) => (
        <sup className={className+" inline-block"}>{children}</sup>
      ),
      code: ({ className, children }) => (
        <code className={className+" font-copy bg-lightgrey px-1.5 py-1 rounded-md"}>{children}</code>
      ),
      table: ({children}) => (
        <table className="font-copy mb-4 md:mb-6">{children}</table>
      ),
      th: ({children}) => (
        <th className="px-2 py-2 md:text-md lg:text-lg">{children}</th>
      ),
      td: ({children}) => (
        <td className="px-2 py-2 md:text-md lg:text-lg">{children}</td>
      ),
      blockquote: ({ children }) => (
        <blockquote className="flex before:content-['.'] before:inline-block before:w-4 before:mr-3 before:bg-lightgrey mb-4">{children}</blockquote>
      ),
      figure: ({children}) => (
        <figure className="mb-4 md:mb-6 lg:mb-8">{children}</figure>
      ),
      figcaption: ({ children }) => (
        <figcaption className="flex justify-center font-copy text-sm text-navy">{children}</figcaption>
      ),
      GameboyView: GameboyView,
      TwoImagesOuter: ({children}) => (
        <div className="flex justify-around">{children}</div>
      ),
      TwoImagesInner: ({ children }) => (
        <div className="inline-block w-5/12">{children}</div>
      ),
      HalfImageWrapper: ({ children }) => (
        <div className="w-1/2">{children}</div>
      ),
      CopyLink: CopyLink,
      Footnote: Footnote,
      Katex: Katex
    }} />
  )
}

function formatDate(input: string | Date) {
  const date = new Date(input)
  return date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}


interface PostPageProps {
  params: {
    slug: string[]
  }
}

export async function generateStaticParams(): Promise<
  PostPageProps["params"][]
> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default function PostPage({ params }: PostPageProps) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
        <div>
          <h1 className="mt-2 inline-block text-5xl uppercase font-h1 leading-tight">
            {post.title}
          </h1>
          {post.date && (
            <time dateTime={post.date} className="block ml-1 text-lg">
              Published on {formatDate(post.date)}
            </time>
          )}
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={720}
              height={720}
              className="my-6 rounded-md border"
              priority
            />
          )}
          <Mdx code={post.body.code} />
        </div>
    </article>
  );
}

