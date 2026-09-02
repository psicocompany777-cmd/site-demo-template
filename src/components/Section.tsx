export function SectionTitle({ eyebrow, children, light = false }: { eyebrow: string; children: React.ReactNode; light?: boolean }) {
  return <div className={`sectionTitle ${light ? 'light' : ''}`}><span>{eyebrow}</span><h2>{children}</h2></div>;
}
