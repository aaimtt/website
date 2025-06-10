'use client'

import { MarkdownMetadata } from '@/app/[slug]/utils'

export function Timeline({
  items,
  layout,
  title,
}: NonNullable<MarkdownMetadata['overrides']>[number]) {
  if (layout !== 'timeline') {
    throw new Error('Invalid layout for Timeline component')
  }

  return (
    <>
      <p>{title}</p>
      <ul className="timeline">
        {items.map((item, index) => (
          <li key={index} className="timeline-item">
            <div className="timeline-date">{item.date.toLocaleDateString()}</div>
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p>{item.company}</p>
              <p>{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
