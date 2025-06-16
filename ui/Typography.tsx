'use client'

import { cn } from '@/utils/cn'
import { ElementType, HTMLAttributes } from 'react'
import ReactMarkdown from 'react-markdown'

type Variant = 'base' | 'large' | 'small' | 'markdown'

const variantClasses: Record<Variant, string> = {
  base: 'text-base leading-relaxed',
  large: 'text-lg font-medium tracking-tight',
  markdown: '',
  small: 'text-sm',
}

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: Variant
  as?: ElementType
}

export const Typography = ({
  variant = 'base',
  as,
  className,
  children,
  ...props
}: TypographyProps) => {
  const Component = as || 'p'

  if (variant === 'markdown' && typeof children === 'string') {
    return <ReactMarkdown components={{}}>{children}</ReactMarkdown>
  }

  return (
    <Component className={cn(variantClasses[variant], className)} {...props}>
      {children}
    </Component>
  )
}
