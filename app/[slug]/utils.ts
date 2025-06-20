import fs from 'fs'
import path from 'path'

export function getMarkdownContent(fileName: string) {
  const filePath = path.join(process.cwd(), 'content', `${fileName}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')

  return fileContent
}

export function getMarkdownFiles() {
  return fs.readdirSync(path.join(process.cwd(), 'content'))
}
