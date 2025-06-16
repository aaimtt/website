import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import z from 'zod'

const MetadataProfileSchema = z.object({
  component: z.literal('profile'),
  title: z.string(),
  subtitle: z.string(),
  imageSrc: z.string(),
  websiteUrl: z.string(),
})

export type MetadataProfile = z.infer<typeof MetadataProfileSchema>

const MetadataParagraphSchema = z.object({
  component: z.literal('paragraph'),
  title: z.string(),
  description: z.string(),
})

export type MetadataParagraph = z.infer<typeof MetadataParagraphSchema>

const MetadataTimelineSchema = z.object({
  component: z.literal('timeline'),
  title: z.string(),
  items: z.array(
    z.object({
      date: z.string(),
      title: z.string(),
      description: z.string(),
    }),
  ),
})

export type MetadataTimeline = z.infer<typeof MetadataTimelineSchema>

const MarkdownMetadataSchema = z.object({
  overrides: z
    .array(
      z.discriminatedUnion('component', [
        MetadataProfileSchema,
        MetadataParagraphSchema,
        MetadataTimelineSchema,
      ]),
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
