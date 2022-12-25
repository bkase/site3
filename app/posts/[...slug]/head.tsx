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
    </>
  )
}

