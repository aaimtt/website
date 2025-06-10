import { Content } from '@/components/Content'

import { getMarkdownData, getMarkdownFiles } from './utils'

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
  const { content, metadata } = getMarkdownData(params.slug)

  return <Content content={content} metadata={metadata} />
}
