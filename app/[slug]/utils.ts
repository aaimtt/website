import fs from 'fs'
import os from 'os'
import path from 'path'

function getContentPath() {
  const contentPath = process.env.CONTENT_PATH
  if (!contentPath) {
    throw new Error('Missing CONTENT_PATH environment variable')
  }
  return contentPath.startsWith('~') ? path.join(os.homedir(), contentPath.slice(1)) : contentPath
}

export function getMarkdownContent(fileName: string) {
  const filePath = path.join(getContentPath(), `${fileName}.md`)
  const fileContent = fs.readFileSync(filePath, 'utf8')
  return fileContent
}

export function getMarkdownFiles() {
  return fs.readdirSync(getContentPath())
}
