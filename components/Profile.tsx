'use client'

import { MetadataProfile } from '@/app/[slug]/utils'
import { Typography } from '@/ui/Typography'

export function Profile({ subtitle, title }: MetadataProfile) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col">
        <Typography variant="large" as="h2">
          {title}
        </Typography>
        <Typography className="text-muted-foreground">{subtitle}</Typography>
      </div>
    </div>
  )
}
