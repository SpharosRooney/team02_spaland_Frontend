import MainLayout from '@/components/layouts/MainLayout'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

export default function App({ Component, pageProps }: AppProps) {

  return (
      <RecoilRoot>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </RecoilRoot>
  )
}
