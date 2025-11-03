import { cn } from '@/lib/utils';
import Image from 'next/image';

export type ImageSlotMode = 'ratio' | 'fill';

export type ImageSlotProps = {
  src?: string;
  alt?: string;
  ratio?: string;
  note?: string;
  className?: string;
  containerClassName?: string;
  mode?: ImageSlotMode;
};

export function ImageSlot({
  src,
  alt,
  ratio = '16/9',
  note,
  className,
  containerClassName,
  mode = 'ratio',
}: ImageSlotProps) {
  if (mode === 'fill') {
    return (
      <div
        className={cn(
          'relative w-full min-h-60 overflow-hidden border-gray-300 bg-gray-50 shadow-soft md:min-h-0 md:h-full',
          containerClassName
        )}
      >
        {src ? (
          <Image fill src={src} alt={alt ?? ''} className="object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-gray-400 text-sm">
            Imagem a inserir
          </div>
        )}
        {note && (
          <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/80 px-3 py-1 text-xs text-gray-600">
            {note ?? 'Substituir o ficheiro em /public/images/*.jpg'}
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={cn(
        'relative w-full overflow-hidden border-gray-300 bg-gray-50 shadow-soft',
        containerClassName
      )}
    >
      <div
        className={cn('aspect-(--ratio)', className)}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        style={{ ['--ratio' as any]: ratio }}
      >
        {src ? (
          <Image fill src={src} alt={alt ?? ''} className="object-cover" />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-gray-400 text-sm">
            Imagem a inserir
          </div>
        )}
      </div>
      {note && (
        <div className="absolute bottom-2 left-2 right-2 rounded-xl bg-white/80 px-3 py-1 text-xs text-gray-600">
          {note ?? 'Substituir o ficheiro em /public/images/*.jpg'}
        </div>
      )}
    </div>
  );
}
