'use client';

import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Image from "next/image"
import CopyLink from "@/ui/CopyLink"
import GameboyView from "@/ui/GameboyView"

import { useMDXComponent } from "next-contentlayer/hooks"

const Mdx = ({ code } : {code: string}) => {
  const Component = useMDXComponent(code);

  return (
    <Component components={{
      p: ({ className, children }) => (
        <p className={className+" font-copy leading-relaxed text-lg mb-4"}>{children}</p>
      ),
      h2: ({ className, children }) => (
        <h2 className={className+" font-copy text-3xl mb-4 py-2"}>{children}</h2>
      ),
      h3: ({ className, children }) => (
        <h3 className={className+" font-copy text-lg font-bold mb-2 py-2"}>{children}</h3>
      ),
      ol: ({ className, children }) =>(
        <ol className={className+" font-copy leading-relaxed text-lg ml-6 mb-2 list-decimal list-outside"}>{children}</ol>
      ),
      ul: ({ className, children }) =>(
        <ul className={className+" font-copy leading-relaxed text-lg mb-2 list-disc ml-4 list-outside"}>{children}</ul>
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
      GameboyView: GameboyView,
      HalfImageWrapper: ({ children }) => (
        <div className="w-1/2 md:w-full">{children}</div>
      )
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

