import {
  siBootstrap,
  siCss,
  siCursor,
  siDart,
  siDotnet,
  siFigma,
  siFirebase,
  siFlutter,
  siGit,
  siGithub,
  siGithubactions,
  siHtml5,
  siJavascript,
  siLaravel,
  siMysql,
  siNodedotjs,
  siOpenjdk,
  siPhp,
  siPostman,
  siReact,
  siSupabase,
  siTailwindcss,
  siTypescript,
  siVercel,
} from 'simple-icons'
import { Database, Hash, Palette, SquareCode, Webhook } from 'lucide-react'

/**
 * Technology icons keyed by short id. Brand marks come from simple-icons;
 * technologies without an official mark fall back to a lucide glyph.
 */
const brandIcons = {
  javascript: siJavascript,
  typescript: siTypescript,
  php: siPhp,
  java: siOpenjdk,
  dart: siDart,
  html5: siHtml5,
  css: siCss,
  nodejs: siNodedotjs,
  laravel: siLaravel,
  firebase: siFirebase,
  mysql: siMysql,
  supabase: siSupabase,
  react: siReact,
  flutter: siFlutter,
  dotnet: siDotnet,
  tailwindcss: siTailwindcss,
  bootstrap: siBootstrap,
  git: siGit,
  github: siGithub,
  githubactions: siGithubactions,
  cursor: siCursor,
  postman: siPostman,
  vercel: siVercel,
  figma: siFigma,
}

const fallbackIcons = {
  csharp: { icon: Hash, title: 'C#' },
  sql: { icon: Database, title: 'SQL' },
  webhook: { icon: Webhook, title: 'Webhooks' },
  vscode: { icon: SquareCode, title: 'VS Code' },
  canva: { icon: Palette, title: 'Canva' },
}

/**
 * Monochrome technology icon that reveals its brand color when a parent
 * element with the `group` class is hovered.
 */
export function TechIcon({ name, className = 'h-4 w-4' }) {
  const brand = brandIcons[name]

  if (brand) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        fill="currentColor"
        className={`${className} text-neutral-500 transition-colors group-hover:text-[var(--brand)]`}
        style={{ '--brand': `#${brand.hex}` }}
      >
        <title>{brand.title}</title>
        <path d={brand.path} />
      </svg>
    )
  }

  const fallback = fallbackIcons[name]
  if (!fallback) return null

  const Icon = fallback.icon
  return (
    <Icon
      role="img"
      aria-label={fallback.title}
      className={`${className} text-neutral-500 transition-colors group-hover:text-neutral-950`}
    />
  )
}
