import { useState } from 'react'
import { SiteContent } from '@/lib/types'
import contentData from '@/data/site-content.json'

// In a real app, this would fetch from an API or use a context
// For now, it returns the static JSON content
// The Admin Panel will update this JSON via GitHub API
export function useSiteContent() {
  const [content, setContent] = useState<SiteContent>(contentData as SiteContent)

  // If we had a way to fetch live content (e.g. from a raw GitHub URL), we could do it here
  // useEffect(() => { ... }, [])

  return { content, setContent }
}
