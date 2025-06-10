import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import z from 'zod'

const MarkdownMetadataSchema = z.object({
  overrides: z
    .array(
      z.object({
        layout: z.enum(['timeline']),
        title: z.string(),
        items: z.array(
          z.object({
            date: z.date(),
            title: z.string(),
            company: z.string(),
            description: z.string(),
          }),
        ),
      }),
    )
    .optional(),
})

export type MarkdownMetadata = z.infer<typeof MarkdownMetadataSchema>

export function getMarkdownData(fileName: string) {
  const filePath = path.join(process.cwd(), 'content', `${fileName}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContent)

  return { content, metadata: MarkdownMetadataSchema.parse(data) }
}

export function getMarkdownFiles() {
  return fs.readdirSync(path.join(process.cwd(), 'content'))
}
