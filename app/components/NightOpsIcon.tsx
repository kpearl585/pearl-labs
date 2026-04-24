/* Pearl Labs Night Ops icon set — thin-line, 1.5 stroke */

type Name =
  | 'shield' | 'target' | 'scales' | 'globe' | 'code' | 'database'
  | 'lock' | 'flow' | 'doc' | 'layers' | 'seal' | 'clock'
  | 'deploy' | 'team' | 'package' | 'arrow-right' | 'check'
  | 'x' | 'veteran' | 'florida' | 'chart' | 'cloud' | 'server'

type Props = { name: Name; size?: number; stroke?: number; className?: string }

export default function NightOpsIcon({ name, size = 20, stroke = 1.5, className = '' }: Props) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: stroke,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
    'aria-hidden': true,
  }
  switch (name) {
    case 'shield':
      return <svg {...common}><path d="M12 3l8 3v6c0 5-3.5 8.5-8 9-4.5-0.5-8-4-8-9V6l8-3z" /><path d="M9 12l2 2 4-4" /></svg>
    case 'target':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1.5" fill="currentColor" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></svg>
    case 'scales':
      return <svg {...common}><path d="M12 3v18M4 21h16M6 7h12" /><path d="M6 7l-3 7a3 3 0 006 0L6 7zM18 7l-3 7a3 3 0 006 0L18 7z" /></svg>
    case 'globe':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><ellipse cx="12" cy="12" rx="4" ry="9" /><path d="M3 12h18" /></svg>
    case 'code':
      return <svg {...common}><path d="M8 6l-5 6 5 6M16 6l5 6-5 6M14 4l-4 16" /></svg>
    case 'database':
      return <svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg>
    case 'lock':
      return <svg {...common}><rect x="4" y="11" width="16" height="10" rx="1" /><path d="M8 11V7a4 4 0 018 0v4" /></svg>
    case 'flow':
      return <svg {...common}><circle cx="5" cy="6" r="2" /><circle cx="5" cy="18" r="2" /><circle cx="19" cy="12" r="2" /><path d="M7 6h5a3 3 0 013 3v0a3 3 0 003 3M7 18h5a3 3 0 003-3v0a3 3 0 013-3" /></svg>
    case 'doc':
      return <svg {...common}><path d="M6 3h9l4 4v14H6V3z" /><path d="M14 3v5h5M9 13h6M9 17h6" /></svg>
    case 'layers':
      return <svg {...common}><path d="M12 3l9 5-9 5-9-5 9-5z" /><path d="M3 12l9 5 9-5M3 17l9 5 9-5" /></svg>
    case 'seal':
      return <svg {...common}><path d="M12 2l2.5 2 3.5-0.5 1 3.4 3 1.6-1 3.4 1.5 3.2-3 1.6-0.5 3.4-3.5-0.5L12 22l-2.5-2-3.5 0.5-1-3.4-3-1.6 1-3.4-1.5-3.2 3-1.6 0.5-3.4 3.5 0.5z" /><path d="M8.5 12l2.5 2.5 5-5" /></svg>
    case 'clock':
      return <svg {...common}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></svg>
    case 'deploy':
      return <svg {...common}><path d="M5 15l4 4 10-14a5 5 0 00-5 0L5 15z" /><path d="M5 15l-2 5 5-2M12 8l4 4" /></svg>
    case 'team':
      return <svg {...common}><circle cx="9" cy="8" r="3" /><circle cx="17" cy="9" r="2.5" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M15 20c0-2.5 1.5-5 4-5.5" /></svg>
    case 'package':
      return <svg {...common}><path d="M12 3l9 5v8l-9 5-9-5V8l9-5z" /><path d="M3 8l9 5 9-5M12 13v9" /></svg>
    case 'arrow-right':
      return <svg {...common}><path d="M5 12h14M13 5l7 7-7 7" /></svg>
    case 'check':
      return <svg {...common}><path d="M4 12l6 6L20 6" /></svg>
    case 'x':
      return <svg {...common}><path d="M6 6l12 12M18 6L6 18" /></svg>
    case 'chart':
      return <svg {...common}><path d="M4 20V8M10 20V4M16 20v-8M22 20H2" /></svg>
    case 'cloud':
      return <svg {...common}><path d="M7 18a5 5 0 010-10 6 6 0 0111 2 4 4 0 01-1 8H7z" /></svg>
    case 'server':
      return <svg {...common}><rect x="3" y="4" width="18" height="7" rx="1" /><rect x="3" y="13" width="18" height="7" rx="1" /><circle cx="7" cy="7.5" r="0.5" fill="currentColor" /><circle cx="7" cy="16.5" r="0.5" fill="currentColor" /></svg>
    case 'veteran':
      return <svg {...common}><path d="M3 4h18v14H3z" /><path d="M3 7h18M3 10h18M3 13h18M3 16h18M3 4h8v7H3z" /></svg>
    case 'florida':
      return <svg {...common}><path d="M4 4h16v6c0 1-1 2-3 2h-3v4c0 3-2 5-5 5-2 0-3-1-3-2" /></svg>
    default:
      return null
  }
}
