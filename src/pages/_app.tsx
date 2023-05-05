import "@/styles/globals.css";
import { _supabaseClient } from "@/utils/supabase";
import type { AppProps } from "next/app";
import { useState } from "react";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

export default function App({ Component, pageProps }: AppProps) {
  const [supabaseClient] = useState(() => _supabaseClient);

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Component {...pageProps} />
    </SessionContextProvider>
  );
}
