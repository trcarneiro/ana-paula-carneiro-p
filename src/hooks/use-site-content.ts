import { useKV } from "@github/spark/hooks"
import { SiteContent } from "@/lib/types"
import contentData from "@/data/site-content.json"

export function useSiteContent() {
  // Use the JSON data as the default value for useKV
  // We cast contentData to SiteContent to ensure type compatibility
  const defaultContent = contentData as unknown as SiteContent
  
  const [kvContent, setKvContent] = useKV<SiteContent>("site-content", defaultContent)
  
  // Ensure we always have valid content by falling back to defaultContent
  // if kvContent is undefined, null, or missing critical sections.
  // This is crucial for static builds (GitHub Pages) where useKV might return undefined initially.
  const content = (kvContent && kvContent.hero && kvContent.about) ? kvContent : defaultContent

  return [content, setKvContent] as const
}
