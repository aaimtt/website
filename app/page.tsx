import { Typography } from '@/ui/Typography'

import { getMarkdownContent } from './[slug]/utils'

export default async function Page() {
  const content = getMarkdownContent('home')

  return <Typography>{content}</Typography>
}
