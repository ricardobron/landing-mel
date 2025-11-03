import type { ReactNode } from 'react';

import { ImageSlot, type ImageSlotProps } from '@/components/ImageSlot';
import { cn } from '@/lib/utils';

type SectionImageProps = ImageSlotProps & {
  placement?: 'left' | 'right';
  wrapperClassName?: string;
  contentClassName?: string;
};

type SectionProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  image?: SectionImageProps;
  className?: string;
  children: ReactNode;
};

export function Section({
  id,
  title,
  subtitle,
  image,
  className,
  children,
}: SectionProps) {
  const subtitleNode =
    typeof subtitle === 'string' ? (
      <p
        className="mt-6 text-lg max-w-2xl text-brand-text/80 pr-4 "
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    ) : subtitle ? (
      <div className="mt-6 text-lg max-w-2xl text-brand-text/80 ">
        {subtitle}
      </div>
    ) : null;

  const imageProps: SectionImageProps = {
    ...image,
    placement: image?.placement,
  };

  return (
    <section id={id} className="py-4 md:pb-8 md:pt-16">
      <div className={cn('container container-centered max-w-6xl', className)}>
        {imageProps && imageProps?.placement === 'left' && (
          <ImageSlot {...imageProps} />
        )}
        <div
          className={cn(
            'py-8 px-4 text-center md:text-left',
            imageProps.placement === 'left' ? 'md:pr-8' : '',
            imageProps.placement === 'right' ? 'md:pl-8' : ''
          )}
        >
          {title && (
            <h2 className="text-3xl md:text-5xl tracking-tight font-serif text-primary">
              {title}
            </h2>
          )}
          {subtitleNode}
          {children}
        </div>
        {imageProps && imageProps.placement === 'right' && (
          <ImageSlot {...imageProps} />
        )}
      </div>
    </section>
  );
}
