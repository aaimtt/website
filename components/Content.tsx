'use client'

import ReactMarkdown from 'react-markdown'

import { MarkdownMetadata } from '@/app/[slug]/utils'
import { Timeline } from '@/components/Timeline'
import { slugify } from '@/utils/slugify'

export function Content({ content, metadata }: { content: string; metadata: MarkdownMetadata }) {
  if (!metadata.overrides) {
    return <ReactMarkdown>{content}</ReactMarkdown>
  }

  return metadata.overrides.map((section) => {
    switch (section.layout) {
      case 'timeline':
        return <Timeline key={slugify(section.title)} {...section} />
      default:
        throw new Error(`Unsupported layout: ${section.layout}`)
    }
  })
}
