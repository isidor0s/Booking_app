import '@/styles/globals.css';
import { _supabaseClient } from '@/utils/supabase';
import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Inter } from 'next/font/google';
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { QueryClient, QueryClientProvider } from 'react-query';

const inter = Inter({
    weight: ['400', '500', '600', '700', '800'],
    display: 'swap',
    variable: '--primaryFont',
    subsets: ['latin'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
    const [supabaseClient] = useState(() => _supabaseClient);

    return (
        <main className={inter.className}>
            <SessionContextProvider supabaseClient={supabaseClient} initialSession={pageProps.initialSession}>
                <QueryClientProvider client={queryClient}>
                    <Component {...pageProps} />
                </QueryClientProvider>
            </SessionContextProvider>
        </main>
    );
}
