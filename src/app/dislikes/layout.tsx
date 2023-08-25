import { Metadata } from 'next';
import React from 'react';
import { SharedLayout } from '@/components/SharedLayout';

export const metadata: Metadata = {
    title: 'Dislikes',
};
export default function DislikesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SharedLayout />
            {children}
        </>
    );
}