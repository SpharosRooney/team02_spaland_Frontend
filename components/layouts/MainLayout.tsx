import { bottomNavMenuType } from '@/types/navMenuType'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
//import{ bottomNavData } from 'assets/../datas/navData'

export default function MainLayout(props: { children: React.ReactNode }) {

    const router = useRouter()
    console.log(router.pathname)

    const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()

    useEffect(() => {
        fetch('http://10.10.10.42:3001/nav')
            .then(res => res.json())
            .then(data => setNavBottomData(data))
    }, [])


    return (
        <>
            <Head>
                <meta name="description" content="StarBucks Clone Site" />
                <meta name="keywords" content="StarBucks, Clone, Site" />
                <meta name="author" content="SpaLand" />
                <link rel="stylesheet" href="assets/css/style.css" />
                <title>StarBucks Clone Site</title>
            </Head>
            <div className="container">
                <header>
                    <div className="header-top">
                        <div className="menu-icon">
                            <a href="menu.html"><img src="assets/images/icons/menu.svg" alt="" /></a>
                        </div>
                        <h1><a href="index.html">온라인 스토어</a></h1>
                        <nav>
                            <ul>
                                <li><a href="search.html"><img src="assets/images/icons/search.svg" /></a></li>
                                <li><a href="cart.html"><img src="assets/images/icons/shopping-cart.svg" /></a></li>
                                <li><a href="mypage.html"><img src="assets/images/icons/user.svg" /></a></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="header-bottom">
                        <nav>
                            <ul>
                                {
                                    navBottomData && navBottomData.map(nav => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                                        <li
                                            key={nav.id}
                                            className={router.pathname === nav.link ? "active" : ""}
                                        >
                                            <Link href={nav.link}>{nav.name}</Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        </nav>
                    </div>
                </header>
            </div>
            <div className="container">
                {props.children}
            </div>
        </>
    )
}
