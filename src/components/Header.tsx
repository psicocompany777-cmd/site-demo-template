'use client';
import { useState } from 'react';
import { business, whatsappUrl } from '@/config/business';

const links = [['Início', '#inicio'], ['Especialidade', '#especialidade'], ['Tratamentos', '#tratamentos'], ['Sobre', '#sobre'], ['Localização', '#localizacao']];
export function Header() {
  const [open, setOpen] = useState(false); const booking = whatsappUrl();
  return <header className="header"><a className="brand" href="#inicio" aria-label="Ir ao início"><b>BRE</b><span>{business.businessName}<small>ESTÉTICA AVANÇADA</small></span></a>
    <button className="menuButton" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="main-nav"><span/><span/>Menu</button>
    <nav id="main-nav" className={open ? 'nav open' : 'nav'} aria-label="Navegação principal">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<BookingLink href={booking} label="Agendar avaliação" className="button compact" /></nav>
  </header>;
}
export function BookingLink({ href = whatsappUrl(), label, className = 'button' }: { href?: string | null; label: string; className?: string }) {
  return href ? <a className={className} href={href} target="_blank" rel="noreferrer">{label}<span aria-hidden>↗</span></a> : <a className={className} href="#localizacao" title="WhatsApp em configuração">{label}<span aria-hidden>→</span></a>;
}
