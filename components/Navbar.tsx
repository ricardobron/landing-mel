'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';
import { Container } from './Container';
import { Button } from './Button';
import { site } from '@/content/site';

const navLinks = [
  { href: '#como-funciona', label: 'Como funciona' },
  { href: '#contacto', label: 'Contacto' },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((open) => !open);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-brand-bg/95 px-3 backdrop-blur md:px-10">
      <Container className="flex h-16 items-center justify-between text-brand-text">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            width={28}
            height={28}
            alt="logo"
            className="h-7 w-7"
          />
          <span className="font-semibold">{site.brand.name}</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-brand-text/80 md:flex">
          {navLinks.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-primary">
              {label}
            </Link>
          ))}
          <Button href="#demo">{site.brand.hero.ctaPrimary}</Button>
        </nav>
        <button
          type="button"
          aria-label={
            isMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'
          }
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          onClick={toggleMenu}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border text-brand-text transition hover:bg-brand-bg/80 md:hidden"
        >
          {isMenuOpen ? (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 stroke-current"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
            >
              <path d="M6 6L18 18" />
              <path d="M18 6L6 18" />
            </svg>
          ) : (
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-5 w-5 stroke-current"
              strokeWidth={1.5}
              fill="none"
              strokeLinecap="round"
            >
              <path d="M4 7H20" />
              <path d="M4 12H20" />
              <path d="M4 17H20" />
            </svg>
          )}
        </button>
      </Container>
      <nav
        id="mobile-menu"
        className={`overflow-hidden border-t border-border bg-brand-bg/95 transition-[max-height,opacity] duration-200 ease-out md:hidden ${
          isMenuOpen
            ? 'max-h-screen pointer-events-auto opacity-100'
            : 'max-h-0 pointer-events-none opacity-0'
        }`}
      >
        <Container className="flex flex-col gap-4 py-4 text-sm text-brand-text/80">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="hover:text-primary"
              onClick={closeMenu}
            >
              {label}
            </Link>
          ))}
          <div className="w-full" onClick={closeMenu}>
            <Button href="#demo" className="w-full">
              {site.brand.hero.ctaPrimary}
            </Button>
          </div>
        </Container>
      </nav>
    </header>
  );
}
