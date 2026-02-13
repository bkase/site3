import { notFound } from "next/navigation"
import { allPosts } from "contentlayer2/generated"
import Image from "next/image"
import MdxRenderer from "@/ui/MdxRenderer"
import type { Metadata } from "next"

function formatDate(input: string | Date) {
  const date = new Date(input)
  return date.toLocaleDateString(undefined, {
    month: "long",
    day: "numeric",
    year: "numeric",
  })
}

interface PostPageProps {
  params: Promise<{
    slug: string[]
  }>
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params
  const slugStr = slug?.join("/") || ""
  const post = allPosts.find((post) => post.slugAsParams === slugStr)

  if (!post) {
    return {}
  }

  const title = `${post.title} - bkase`;

  return {
    title,
    description: post.summary,
    openGraph: {
      title,
      url: "https://bkase.io/posts/" + slugStr,
      images: post.image ? ["https://bkase.io" + post.image] : [],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: post.summary,
      images: post.image ? ["https://bkase.io/" + post.image] : [],
    },
  }
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params
  const slugStr = slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slugStr)

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
          <MdxRenderer code={post.body.code} />
        </div>
    </article>
  );
}
