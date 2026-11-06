export type IconName = 'external' | 'mail' | 'plus' | 'minus' | 'close' | 'left' | 'right' | 'up' | 'menu' | 'download'
export function Icon({ name }: { name: IconName }) {
  const paths: Record<IconName, string> = {
    external: 'M7 17 17 7M7 7h10v10', mail: 'M4 5h16v14H4zM4 6l8 7 8-7',
    plus: 'M5 12h14M12 5v14', minus: 'M5 12h14', close: 'm6 6 12 12M6 18 18 6',
    left: 'm15 6-6 6 6 6', right: 'm9 6 6 6-6 6', up: 'M12 19V5m-7 7 7-7 7 7',
    menu: 'M4 6h16M4 12h16M4 18h16', download: 'M12 3v12m-5-5 5 5 5-5M5 16v5h14v-5',
  }
  return <svg className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d={paths[name]} /></svg>
}
