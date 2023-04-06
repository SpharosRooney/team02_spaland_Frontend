import { bottomNavMenuType } from '@/types/navMenuType'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie';

import { filterType, sizeType, smallCategoryType } from "@/types/header/filterType";
import { headerIcons } from "@/datas/starbucksStaticDatas";

//recoil
import { useRecoilValue } from "recoil";
import { useRecoilState } from 'recoil'
import { cartState } from "../../state/cartState";


import { LoginRes } from '@/types/UserRequest/Response'
import { userLoginState } from '@/state/user/atom/userLoginState'
import axios from 'axios'
import Swal from 'sweetalert2'
import ProductCategory from '../widgets/ProductCategory'
import Menu from '../modal/Menu'
import Config from '@/configs/config.export'
import Image from 'next/image';
import { error } from 'console';

//import{ bottomNavData } from 'assets/../datas/navData'
//import SignupModal from '../modals/SignupModal'


export default function MainLayout(props: { children: React.ReactNode }) {

  const [isMenuModalOpen, setIsMenuModalOpen] = useState<boolean>(false);
  // const setIsMenuModalOpen = useSetRecoilState(menuModalState);
  const [cookies, removecookie] = useCookies(["id"]);
  const router = useRouter();
  console.log(router.pathname)
  console.log()

  const { pathname, query } = useRouter();
  const productPath = pathname.split("/")[1];
  const cartCnt = useRecoilValue(cartState)

  const [navBottomData, setNavBottomData] = useState<bottomNavMenuType[]>()

  // const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [filterList, setFilterList] = useState<filterType[]>([])
  const [isLogin, setIsLogin] = useRecoilState<LoginRes>(userLoginState);
  const { baseUrl } = Config();

  console.log(isLogin)


  //[[...""]] => 파일명 : 데이터 값이 없어도 나타나게 함.
  //비교 해야할 값이 숫자면 Number()로 감싸주기

  // 각자의 백엔드 카테고리 url을 적기.
  // useEffect(() => {
  //   axios.get("카테고리-url")
  //   .then((res) =>{
  //     let myData: MenuDataType[] = []
  //     res.data.data.subCategories.forEach((item : headerMenu) => {
  //       myData.push({
  //         id: item.id,
  //         name: item.name,
  //         key:"category"
  //       })
  //     })
  //     setFilterData(myData)
  //   })
  // },[])

  useEffect(() => {
    const myLogin = localStorage.getItem("accessToken");

    if (myLogin && !isLogin.isLogin) {
      console.log("로그인 되어있음")
      setIsLogin({
        userNickname: localStorage.getItem("userNickname") || "",
        accessToken: localStorage.getItem("accessToken") || "",
        isLogin: true
      })
    }
  }, [isLogin.isLogin, setIsLogin])

  const [isactive, setIsactive] = useState<boolean>(false)

  useEffect(() => {
    fetch(`${baseUrl}/api/v1/naviMenu/all`)
      .then(res => res.json())
      .then(data => setNavBottomData(data.data))
  }, [baseUrl])



  //logout handler 추가
  const logout = async () => {
    Swal.fire({
      title: '로그아웃 하시겠습니까?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#067040',
      cancelButtonColor: '#d33',
      confirmButtonText: '로그아웃',
      cancelButtonText: '취소'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.get(`${baseUrl}/api/v1/users/logout`, {
            headers: {
              Authorization: `Bearer ${isLogin.accessToken}`
            }
          }).then(res => {
            console.log(res)
            res.status === 200 && 
            localStorage.removeItem("accessToken");
            localStorage.removeItem("userNickname");
            setIsLogin({
              userNickname: "",
              accessToken: "",
              isLogin: false
            });
            Swal.fire({
              toast: true,
              text: "로그아웃 되었습니다.",
              position: "top",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              color: "#067040",
            })
          });
        } catch (error: any) {
          Swal.fire({
              toast: true,
              text: "로그아웃 되었습니다.",
              position: "top",
              showConfirmButton: false,
              timer: 2000,
              timerProgressBar: true,
              color: "#067040",
            })
            localStorage.removeItem("accessToken");
            localStorage.removeItem("userNickname");
            setIsLogin({
              userNickname: "",
              accessToken: "",
              isLogin: false
            });
        }
      }
    });
  };

  // useEffect(() => {
  //   console.log("filterList", filterList)
  //   let url = ''

  //   filterList.map((filter) => (
  //     filter.checked ? url += `&${filter.name}=${filter.value}` : ''
  //   ))
  //   router.push(`/listview?category=${query.category}${url}`, undefined, { shallow: true })
  // }, [filterList])

  // const handleFilter = (name: String) => {
  //   setFilterList([])
  //   router.push(`/listview?category=${name}`)
  // }

  const handleSubFilter = (event: ChangeEvent<HTMLInputElement>) => {
    let checker = filterList.find((filter) => filter.value === event.target.value)
    if (checker?.checked === true && event.target.checked === false) {
      let newList = filterList.filter((filter) => filter.value !== event.target.value)
      setFilterList(newList)
    } else {
      setFilterList([...filterList, { name: event.target.name, value: event.target.value, checked: event.target.checked }])
    }
  }

  return (
    <>
      <Menu
        isMenuModalOpen={isMenuModalOpen}
        setIsMenuModalOpen={setIsMenuModalOpen}
      />
      <div className="container">
        <header>
          <div className="header-top">
            <div className="menu-icon" onClick={() => setIsMenuModalOpen(true)}>
              <Image
                src="/assets/images/icons/menu.svg"
                width={20}
                height={20}
                alt="menu"
              />
            </div>
            <h1><Link href="/">온라인 스토어</Link></h1>
            <nav>
              <ul>
                {
                  headerIcons.map((icon) => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                    icon.name === 'mypage' ?
                      <li key={icon.id}>
                        {isLogin.isLogin ? // boolean으로 처리하려면 변수명을 IS"" 추가한다.
                          (
                            <Image
                              src="/assets/images/icons/logout.png"
                              width={20}
                              height={20}
                              alt="logout"
                              onClick={logout}
                            />
                          )
                          :
                          (<Link href={"/login"}>
                            <Image
                              src={icon.icon}
                              width={20}
                              height={20}
                              alt="login"
                            />
                          </Link>)
                        }
                      </li>
                      :
                      icon.name === 'cart' ?
                        <li key={icon.id}>
                          <Link href={icon.link}>
                            <Image
                              src={icon.icon}
                              width={20}
                              height={20}
                              alt="cart"
                            />
                          </Link>
                        </li>
                        :
                        icon.name === 'search' ?
                          <li key={icon.id}>
                            <Link href={icon.link}>
                              <Image
                                src={icon.icon}
                                width={20}
                                height={20}
                                alt="search"
                              />
                            </Link>
                          </li>
                          : ""
                  ))}
              </ul>
            </nav>
          </div>
          {
            navBottomData && navBottomData.map(nav => (
              router.pathname === nav.link ? (
                <div className="header-bottom" key={nav.id}>
                  <nav>
                    <ul>
                      {
                        navBottomData.map(item => (  // && 있으면 해라 라는 뜻 그러면 안정적으로 받아들임
                          <li
                            key={item.id}
                            className={router.pathname === item.link ? "active" : ""}
                          >
                            <Link href={item.link}>{item.name}</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </nav>
                </div>
              ) : ""))
          }
          {
            router.pathname === '/listview' ? (
              <ProductCategory />
            ) : ""
          }
        </header>
      </div >
      <div className="container">
        {props.children}
      </div>
    </>
  )
}
