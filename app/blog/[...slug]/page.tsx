import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"

import { useMDXComponent } from "next-contentlayer/hooks"

import Image from "next/image"

const Mdx = ({ code } : {code: string}) => {
  const Component = useMDXComponent(code);

  return (
    <Component components={{
      MultiCodeBlock: ({ className, children }) => (
        <div className={className}> {children} </div>
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

export default async function PostPage({ params }: PostPageProps) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
        <div>
          {post.date && (
            <time dateTime={post.date} className="block text-sm text-slate-600">
              Published on {formatDate(post.date)}
            </time>
          )}
          <h1 className="mt-2 inline-block text-4xl font-extrabold leading-tight text-slate-900 lg:text-5xl">
            {post.title}
          </h1>
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              width={720}
              height={405}
              className="my-8 rounded-md border border-slate-200 bg-slate-200 transition-colors group-hover:border-slate-900"
              priority
            />
          )}
          <Mdx code={post.body.code} />
        </div>
    </article>
  );
}



