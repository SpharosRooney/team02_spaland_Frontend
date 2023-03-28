import Router, { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import login from '@/pages/login'

interface userIsLoginProps {
    children: ReactNode
}

export default function userIsLogin({ children }: userIsLoginProps) {
    const [token , setToken ] = useState<boolean>(false)

    useEffect(() => {
        const token = localStorage.getItem('token') ? true : false
        if(token === false ) {
            Router.push('/login')
        } else {
            setToken(token)
        }
    }, [children])

}