import { Metadata } from 'next';
import React from 'react';
import { SharedLayout } from '@/components/SharedLayout';

export const metadata: Metadata = {
    title: 'Favourites',
};
export default function FavouritesLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <SharedLayout />
            {children}
        </>
    );
}