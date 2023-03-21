import { bottomNavMenuType, subNavMenuType } from '@/types/navMenuType'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { headerNavMenus, headerIcons, categoryList } from "@/datas/starbucksStaticDatas";
import { headerMenu } from '@/types/starbucksTypes'
import SignupModal from '../modals/SignupModal'
import LoginModal from '../modals/LoginModal'
//import{ bottomNavData } from 'assets/../datas/navData'
//import SignupModal from '../modals/SignupModal'


export default function MainLayout(props: { children: React.ReactNode }) {

  const router = useRouter()
  console.log(router.pathname)

  const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()

  const [bestSubNavData, setBestSubNottomNavData] = useState<subNavMenuType[]>()
  const [eventSubNavData, setsubNavBottomData] = useState<subNavMenuType[]>()
  const [headerMenus, setHeaderMenus] = useState<headerMenu[]>(headerNavMenus);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isSignupModalOpen, setIsSignupModalOpen] = useState<boolean>(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);


  useEffect(() => {
    fetch('http://localhost:3001/nav')
      .then(res => res.json())
      .then(data => setNavBottomData(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/bestsubnav')
      .then(res => res.json())
      .then(data => setBestSubNottomNavData(data))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3001/eventsubnav')
      .then(res => res.json())
      .then(data => setsubNavBottomData(data))
  }, [])


  return (
    <>
      <LoginModal
        isLoginModalOpen={isLoginModalOpen}
        setIsLoginModalOpen={setIsLoginModalOpen}
      />
      <SignupModal
        isSignupModalOpen={isSignupModalOpen}
        setIsSignupModalOpen={setIsSignupModalOpen}
      />
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
            <div className="menu-icon" onClick={() => setIsSignupModalOpen(true)}>
              {
                <img src='assets/images/icons/menu.svg' />
              }
            </div>
            <h1><Link href="/">온라인 스토어</Link></h1>
            <nav>
              <ul>
                {
                  headerIcons.map((icon) => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                    icon.name === 'mypage' ?
                      <li
                        onClick={() => setIsLoginModalOpen(true)}
                        key={icon.id}
                      >
                        <img src={icon.icon} />
                      </li>
                      :
                      icon.name === 'cart' ?
                        <li key={icon.id}>
                          <Link href={icon.link}>
                            <img src={icon.icon} />
                          </Link>
                        </li>
                        :
                        icon.name === 'search' ?
                        <li key={icon.id}>
                          <Link href={icon.link}>
                            <img src={icon.icon} />
                          </Link>
                        </li>
                        : ""
                    ))
                  }
              </ul>
            </nav>
          </div>
          {
            navBottomData && navBottomData.map(nav => (
              router.pathname === nav.link ? (
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
              ) : ""))
          }
          {
            router.pathname === '/best' ? (
              <div className="header-sub">
                <nav>
                  <ul>
                    {
                      bestSubNavData && bestSubNavData.map(bestsubnav => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                        <li
                          key={bestsubnav.id}
                          className={router.pathname === bestsubnav.link ? "active" : ""}
                        >
                          <Link href={bestsubnav.link}>{bestsubnav.name}</Link>
                        </li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            ) :
              ""
          }
          {
            router.pathname === '/event' ? (
              <div className="header-sub">
                <nav>
                  <ul>
                    {
                      eventSubNavData && eventSubNavData.map(eventsubnav => (
                        <li
                          key={eventsubnav.id}
                          className={router.pathname === eventsubnav.link ? "active" : ""}
                        >{eventsubnav.name}</li>
                      ))
                    }
                  </ul>
                </nav>
              </div>
            ) :
              ""
          }
        </header>
      </div >
      <div className="container">
        {props.children}
      </div>
    </>
  )
}
