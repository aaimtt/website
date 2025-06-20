'use client'

import { cn } from '@/utils/cn'
import { HTMLAttributes } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkBreaks from 'remark-breaks'

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  children: string
}

export const Typography = ({ className, children: markdownContent }: TypographyProps) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkBreaks]}
      components={{
        h1: ({ node, children, ...props }) => (
          <h1 className={cn('text-2xl text-foreground font-semibold mb-4', className)} {...props}>
            {children}
          </h1>
        ),
        h2: ({ node, children, ...props }) => {
          return (
            <h2 className={cn('text-xl text-foreground font-semibold mb-4', className)} {...props}>
              {children}
            </h2>
          )
        },
        h4: ({ node, children, ...props }) => {
          return (
            <h4 className={cn('text-lg text-foreground font-semibold mb-4', className)} {...props}>
              {children}
            </h4>
          )
        },
        p: ({ node, children, ...props }) => (
          <p className={cn('text-base text-foreground mb-8', className)} {...props}>
            {children}
          </p>
        ),
        a: ({ node, children, href, ...props }) => {
          return (
            <a
              href={href!}
              className={cn('text-base text-violet-400 underline', className)}
              {...props}
            >
              {children}
            </a>
          )
        },
        hr: ({ node, ...props }) => <hr className="mb-8" {...props} />,
      }}
    >
      {markdownContent}
    </ReactMarkdown>
  )
}
