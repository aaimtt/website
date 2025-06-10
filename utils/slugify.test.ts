import { slugify } from './slugify'
import { describe, it, expect } from 'vitest'

describe('slugify', () => {
  it('converts text to lowercase', () => {
    expect(slugify('Hello World')).toBe('hello-world')
  })

  it('replaces spaces with hyphens', () => {
    expect(slugify('hello world test')).toBe('hello-world-test')
  })

  it('removes special characters', () => {
    expect(slugify('hello@world#test!')).toBe('hello-world-test')
  })

  it('replaces multiple consecutive non-alphanumeric characters with single hyphen', () => {
    expect(slugify('hello!!!world???test')).toBe('hello-world-test')
  })

  it('removes leading and trailing hyphens', () => {
    expect(slugify('!hello world!')).toBe('hello-world')
    expect(slugify('---hello world---')).toBe('hello-world')
  })

  it('truncates text to 50 characters', () => {
    const longText = 'this is a very long text that should be truncated at fifty characters'
    const result = slugify(longText)
    expect(result).toHaveLength(50)
    expect(result).toBe('this-is-a-very-long-text-that-should-be-truncated-')
  })

  it('handles empty string', () => {
    expect(slugify('')).toBe('')
  })

  it('handles string with only special characters', () => {
    expect(slugify('!@#$%^&*()')).toBe('')
  })

  it('preserves numbers', () => {
    expect(slugify('hello 123 world')).toBe('hello-123-world')
  })

  it('handles mixed case with numbers and special characters', () => {
    expect(slugify('Hello World 2024!')).toBe('hello-world-2024')
  })

  it('handles unicode characters by removing them', () => {
    expect(slugify('hello 世界 world')).toBe('hello-world')
  })

  it('handles multiple spaces', () => {
    expect(slugify('hello    world')).toBe('hello-world')
  })
})
