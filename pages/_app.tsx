import MainLayout from '@/components/layouts/MainLayout'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ReactElement, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <MainLayout>
      <Head>
        <meta name="description" content="StarBucks Clone Site" />
        <meta name="keywords" content="StarBucks, Clone, Site" />
        <meta name="author" content="SpaLand" />
        <title>StarBucks Clone Site</title>
      </Head>
        <Component {...pageProps} />
      </MainLayout>
    </RecoilRoot>
  )
}
