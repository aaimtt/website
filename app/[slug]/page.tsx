import { Typography } from '@/ui/Typography'

import { getMarkdownContent, getMarkdownFiles } from './utils'

export async function generateStaticParams() {
  return getMarkdownFiles().map((file) => {
    const slug = file.replace(/\.md$/, '')
    return { slug }
  })
}

interface PageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function Page(props: PageProps) {
  const params = await props.params
  const content = getMarkdownContent(params.slug)

  return <Typography>{content}</Typography>
}
