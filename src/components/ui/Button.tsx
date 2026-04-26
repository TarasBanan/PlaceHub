import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ className, ...props }: Props) {
  return <button className={cn('rounded-sm bg-cream px-4 py-2 text-charcoal transition hover:opacity-90', className)} {...props} />;
}
