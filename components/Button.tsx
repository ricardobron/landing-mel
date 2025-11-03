/* eslint-disable @typescript-eslint/no-explicit-any */

import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Button({
  href,
  children,
  variant = 'primary',
  className,
}: {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'ghost';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-medium transition hover:opacity-90';
  const styles =
    variant === 'primary'
      ? 'bg-primary text-brand-bg'
      : 'ring-1 ring-primary/60 text-primary bg-transparent';

  const Comp: any = href ? Link : 'button';
  return (
    <Comp href={href as any} className={cn(base, styles, className)}>
      {children}
    </Comp>
  );
}
