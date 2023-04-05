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

//import{ bottomNavData } from 'assets/../datas/navData'
//import SignupModal from '../modals/SignupModal'


export default function MainLayout(props: { children: React.ReactNode }) {

  const [isMenuModalOpen,setIsMenuModalOpen] = useState<boolean>(false);
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

    if(myLogin && !isLogin.isLogin){
      console.log("로그인 되어있음")
      setIsLogin({
        userNickname: localStorage.getItem("userNickname") || "",
        accessToken: localStorage.getItem("accessToken") || "",
        // refreshToken 사용할때 주석 해제
        // refreshToken: localStorage.getItem("refreshToken") || "",
        isLogin: true
      })
    }
  }, [])

  const [isactive, setIsactive] = useState<boolean>(false)

  // useEffect(() => {
  //   fetch('http://localhost:3001/nav')
  //     .then(res => res.json())
  //     .then(data => setNavBottomData(data))
  // }, [])



  //logout handler 추가
  // const logout = async () => {
  //   const confirmed = window.confirm('로그아웃 하시겠습니까?');
  //   if (!isLogin.accessToken) {
  //     // 로그인하지 않은 상태에서 로그아웃 버튼을 클릭한 경우
  //     Swal.fire({
  //       icon: "warning",
  //       title: "로그인 상태가 아닙니다",
  //       text: "로그인 후 다시 시도해주세요",
  //       customClass: {
  //         confirmButton: 'swal-confirm-button'
  //       }
  //     });
  //     return;
  //   }
  //   if (confirmed) {
  //     try {
  //       await axios.get(`${baseUrl}/api/v1/users/logout`, {
  //         headers: {
  //           Authorization: `${isLogin.accessToken}`
  //         }
  //       });
  //       setIsLogin({
  //         userNickname: "",
  //         accessToken: "",
  //         isLogin: false
  //       });
  //       localStorage.removeItem("accessToken");
  //       localStorage.removeItem("userNickname");
  //       let timerInterval: string | number | NodeJS.Timer | undefined;
  //       Swal.fire({
  //         html: '로그아웃 중...',
  //         timer: 1000,
  //         timerProgressBar: true,
  //         didOpen: () => {
  //           Swal.showLoading();
  //         },
  //         willClose: () => { 
  //           clearInterval(Number(timerInterval));
  //         },
  //       }).then(() => {
  //         // logout after the timer ends
  //         setIsLogin({
  //           userNickname: "",
  //           accessToken: "",
  //           isLogin: false,
  //         });
  //         localStorage.removeItem("accessToken");
  //         localStorage.removeItem("userNickname");
  //         location.reload();
  //       });
  //     } catch (error) {
  //       Swal.fire({
  //         icon: "error",
  //         title: "Oops...",
  //         text: "로그아웃에 실패하였습니다.",
  //         customClass: {
  //           confirmButton: 'swal-confirm-button'
  //         }
  //       });
  //     }
  //   }
  // }

  const logout = async () => {
    const confirmed = window.confirm('로그아웃 하시겠습니까?');
    if (!isLogin.accessToken) {
      // 로그인하지 않은 상태에서 로그아웃 버튼을 클릭한 경우
      Swal.fire({
        icon: "warning",
        title: "로그인 상태가 아닙니다",
        text: "로그인 후 다시 시도해주세요",
        customClass: {
          confirmButton: 'swal-confirm-button'
        }
      });
      return;
    }
    if (confirmed) {
      try {
        await axios.get(`${baseUrl}/api/v1/users/logout`, {
          headers: {
            Authorization: `${isLogin.accessToken}`
          }
        });
        setIsLogin({
          userNickname: "",
          accessToken: "",
          isLogin: false
        });
        localStorage.removeItem("accessToken");
        localStorage.removeItem("userNickname");
        let timerInterval: string | number | NodeJS.Timer | undefined;
        Swal.fire({
          html: '로그아웃 중...',
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => { 
            clearInterval(Number(timerInterval));
          },
        }).then(() => {
          // logout after the timer ends
          setIsLogin({
            userNickname: "",
            accessToken: "",
            isLogin: false,
          });
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userNickname");
          location.reload();
        });
      } catch (error : any) {
        // 고치기 나중에
        if (error.response && error.response.status === 401) {
          // 엑세스 토큰이 만료된 경우 자동으로 로그아웃 처리
          setIsLogin({
            userNickname: "",
            accessToken: "",
            isLogin: false,
          });
          localStorage.removeItem("accessToken");
          localStorage.removeItem("userNickname");
          location.reload();
        } else {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "로그아웃에 실패하였습니다.",
            customClass: {
              confirmButton: 'swal-confirm-button'
            }
          });
        }
      }
    }
  }

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
            <div className="menu-icon" onClick={()=> setIsMenuModalOpen(true)}>
            <Image
              src="/assets/images/icons/menu.svg"
              width={20}
              height={20}
              alt= "menu"
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
                              alt= "logout"
                              onClick={logout}
                            />
                          )
                          :
                          (<Link href={"/login"}>
                            <Image
                              src={icon.icon}
                              width={20}
                              height={20}
                              alt= "login"
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
                              alt= "cart"
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
                                alt= "search"
                              />
                            </Link>
                          </li>
                          : ""
                  ))}
              </ul>
            </nav>
          </div>
          {/* {pathname === "/product" ? (
            <div className="header-bottom">
              <nav>
                <ul>
                  {
                    headerMenus.map((menu) => (
                      <li
                        key={menu.id}
                        className={pathname === menu.link ? "active" : ""}
                      >
                        <Link href={menu.link}>{menu.name}</Link>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          ) : ""
          }

          {pathname === "/searchreult" ?
            <div className="header-bottom">

              <nav>
                <ul>
                  {categoryList.map((menu) => (
                    <li
                      key={menu.id}
                      onClick={() => handleFilter(menu.name)}
                    >
                      {menu.name}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            : ""
          }
          {
            subCategory &&

            <div className="header-bottom">
              <nav>
                <ul>
                  {
                    subCategory.map((menu, idx) => (
                      <li key={idx}>
                        <input type='checkbox' name="subCategory" value={`${menu.name}`} onChange={handleSubFilter} />
                        <label>{menu.name}</label>
                      </li>
                    ))
                  }
                </ul>
              </nav>
            </div>
          }
          {
            sizeList && (query.category === "머그/컵" || query.category === "텀블러/보온병") ?

              <div className="header-bottom">
                <nav>
                  <ul>
                    {
                      sizeList.map((menu, idx) => (
                        <li key={idx}>
                          <input type='checkbox' name="size" value={`${menu.name}`} onChange={handleSubFilter} />
                          <label>{menu.name}</label>
                        </li>
                      ))
                    }

                  </ul>
                </nav>
              </div>
              : ""
          } */}
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
