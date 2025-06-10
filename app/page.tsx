import { Content } from '@/components/Content'

import { getMarkdownData } from './[slug]/utils'

export default async function Page() {
  const { content, metadata } = getMarkdownData('home')

  return <Content content={content} metadata={metadata} />
}
