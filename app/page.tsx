import { Typography } from '@/ui/typography'

import { getMarkdownContent } from './[slug]/utils'

export default async function Page() {
  const content = getMarkdownContent('index')

  return <Typography>{content}</Typography>
}
