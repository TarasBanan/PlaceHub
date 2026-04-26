'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { authSchema } from '@/lib/schemas/auth';
import { Modal } from '@/components/ui/Modal';
import { Button } from '@/components/ui/Button';

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type AuthValues = z.infer<typeof authSchema>;

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthValues>({
    resolver: zodResolver(authSchema),
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = () => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Вход в PlaceHub">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input className="w-full rounded-sm border border-parchment px-3 py-2" placeholder="Email" {...register('email')} />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <input type="password" className="w-full rounded-sm border border-parchment px-3 py-2" placeholder="Пароль" {...register('password')} />
          {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        </div>
        <Button type="submit" className="w-full">Войти</Button>
      </form>
    </Modal>
  );
}
