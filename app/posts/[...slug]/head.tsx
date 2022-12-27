import { allPosts } from "contentlayer/generated"

interface MdxHeadProps {
  params: {
    slug?: string[]
  }
}

export default function MdxHead({ params }: MdxHeadProps) {
  const slug = params?.slug?.join("/") || ""
  const mdxPost = allPosts.find((post) => post.slugAsParams === slug)

  if (!mdxPost) {
    return null;
  }

  const title = `${mdxPost.title} - bkase`;

  return (
    <>
      <title>{title}</title>
      <link rel="stylesheet" href="/ch-overrides.css" precedence="default" />

      <meta name="description" content={mdxPost.summary} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content={"https://bkase.io/posts" + slug} />
      <meta property="og:image" content={"https://bkase.io" + mdxPost.image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="bkase.io" />
      <meta property="twitter:url" content="https://bkase.io" />
      <meta name="twitter:title" content="bkase.dev" />
      <meta name="twitter:description" content={mdxPost.summary} />
      <meta name="twitter:image" content={"https://bkase.io/" + mdxPost.image} />
    </>
  )
}

