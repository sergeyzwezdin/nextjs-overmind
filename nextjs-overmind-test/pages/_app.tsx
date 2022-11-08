import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {overmind} from "@/state";
import { Provider as StateProvider } from 'overmind-react';

export default function App({ Component, pageProps }: AppProps) {
  return  <StateProvider value={overmind}>
    <Component {...pageProps} />
  </StateProvider>
}
