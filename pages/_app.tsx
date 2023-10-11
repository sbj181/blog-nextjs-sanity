// pages/_app.tsx
import 'tailwindcss/tailwind.css'
import '../styles/global.scss';

import { AppProps } from 'next/app'
import { lazy } from 'react'

import { DarkModeProvider } from '../context/DarkModeContext';

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps;

  return (
    <>
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <DarkModeProvider>
          <Component {...pageProps} />
        </DarkModeProvider>
      )}
    </>
  );
}
