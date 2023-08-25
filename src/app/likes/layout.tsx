import { Metadata } from 'next';
import React from 'react';
import { SharedLayout } from '@/components/SharedLayout';

export const metadata: Metadata = {
  title: 'Likes',
};
export default function LikesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SharedLayout />
        {children}
    </>
  );
}
