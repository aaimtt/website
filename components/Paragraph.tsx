'use client'

import { MetadataParagraph } from '@/app/[slug]/utils'
import { Typography } from '@/ui/Typography'

export function Paragraph({ description, title }: MetadataParagraph) {
  return (
    <>
      <Typography variant="large">{title}</Typography>
      <Typography className="text-muted-foreground">{description}</Typography>
    </>
  )
}
