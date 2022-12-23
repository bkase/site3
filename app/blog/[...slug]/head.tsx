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
    return null
  }

  const title = `${mdxPost.title} - bkase`

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={mdxPost.summary} />
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://bkase.io" />
      {/* TODO
      <meta property="og:image" content="https://tx.shadcn.com/og.jpg" />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tx.shadcn.com" />
      <meta property="twitter:image" content="https://tx.shadcn.com/og.jpg" />
      */}
    </>
  )
}

