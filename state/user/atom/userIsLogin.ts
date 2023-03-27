import Router, { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import login from '@/pages/login'

interface userIsLoginProps {
    children: ReactNode
}

export default function userIsLogin({ children }: userIsLoginProps) {
    const [token , setToken ] = useState<boolean>(false)

    useEffect(() => {
        const Token = localStorage.getItem('Token')? true : false
        if(Token === false ) {
            Router.push('/login')
        } else {
            setToken(Token)
        }
    }, [children])
  
    return (
        <>
        {token === false && <login/>}
        {token && children}
        </>
    )
}