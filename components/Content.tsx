'use client'

import ReactMarkdown from 'react-markdown'

import { MarkdownMetadata } from '@/app/[slug]/utils'
import { slugify } from '@/utils/slugify'

import { Paragraph } from './Paragraph'
import { Profile } from './Profile'
import { Timeline } from './Timeline'

const Section = (section: NonNullable<MarkdownMetadata['overrides']>[number]) => {
  switch (section.component) {
    case 'timeline':
      return <Timeline {...section} />
    case 'paragraph':
      return <Paragraph {...section} />
    case 'profile':
      return <Profile {...section} />
    default:
      return section satisfies never
  }
}

export function Content({ content, metadata }: { content: string; metadata: MarkdownMetadata }) {
  if (!metadata.overrides) {
    return <ReactMarkdown>{content}</ReactMarkdown>
  }

  return metadata.overrides.map((section, index) => (
    <div key={slugify(`${section.title}${index}`)} className="pt-16 first:pt-0">
      <Section {...section} />
    </div>
  ))
}
