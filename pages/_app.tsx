import MainLayout from '@/components/layouts/MainLayout'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { RecoilRoot, atom } from 'recoil'
import Head from 'next/head'
import "public/assets/css/style.css";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export const selectedTable = atom({
  key: 'tabID',
  default: ''
})

export default function App({ Component, pageProps }: AppProps) {
  return (
        <RecoilRoot>
          <MainLayout>
            <Head>
              <title>StarBucks Clone Site</title>
            </Head>
            <Component {...pageProps} />
          </MainLayout>
        </RecoilRoot>
  )
}
