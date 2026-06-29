import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-3xl font-semibold text-gray-900 tracking-tight mt-12 mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-xl font-semibold text-gray-900 mt-10 mb-3">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-base text-gray-500 leading-relaxed">{children}</p>
    ),
    ...components,
  }
}
