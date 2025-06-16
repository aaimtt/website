'use client'

import { MetadataTimeline } from '@/app/[slug]/utils'
import { Typography } from '@/ui/Typography'

export function Timeline({ items, title }: MetadataTimeline) {
  return (
    <>
      <Typography variant="large">{title}</Typography>
      <ul>
        {items.map((item, index) => (
          <li key={index} className="pt-8 first:pt-4 flex flex-row">
            <div className="w-36">
              <Typography className="text-muted-foreground/50">{item.date}</Typography>
            </div>
            <div>
              <Typography>{item.title}</Typography>
              <Typography className="text-muted-foreground">{item.description}</Typography>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
