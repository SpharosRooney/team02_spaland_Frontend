import { menuModalState } from '@/state/atom/menuModalState';
import { ProductDetailType } from '@/types/fetchDataType';
import axios from 'axios';
import { AppPropsType } from 'next/dist/shared/lib/utils';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil';

function Menu(props: {isMenuModalOpen:boolean, setIsMenuModalOpen:Function}) {
    const router = useRouter();
    const [allmenu, setAllmenu] = useState<ProductDetailType[]>([]);

    useEffect(() => {
        axios.get("http://10.10.10.51/api/v1/product/get/all")
          .then((response) => response.data)
          .then((data) => setAllmenu(data))
          .catch((error) => console.error(error));
      }, []);

      const handleClose = () => {
        props.setIsMenuModalOpen(false)
      };

      const handlePushClose = async () => {
        try {
            const response = await axios.get(`http://10.10.10.51/api/v1/product/get/all`);
            const products = response.data;
            // 전체 상품 정보를 가져온 후, 새로운 페이지로 이동
            
            window.location.href = `/searchresult?query=${products}`;
            // router.push({
            //     pathname: `/searchresult`,
            //     query: { query: products }, // 검색어(query)를 포함
            // });
            
            props.setIsMenuModalOpen(false);
        } catch (error) {
            console.error(error);
        }
        
        // router.push("/searchresult");
        // props.setIsMenuModalOpen(false);
    };

    if (!props.isMenuModalOpen) return <></>;
    return (
        <>
            <div className="menu-box">
                <header className="menu-header">
                    <div className="menu-header-top" onClick={handleClose}>
                        <img src="https://cdn-icons-png.flaticon.com/512/864/864393.png" />
                    </div>
                    <div className="menu-header-bottom">
                        <a>Welcome!</a>
                    </div>
                    <div className="menu-header-sub">
                        <a>온라인 스토어에 오신 것을 환영합니다.</a>
                    </div>
                </header>

                <section className="menu-section">
                    <section className="menu-section-top">
                        <div onClick={handlePushClose}>
                            <a href="">전체 상품 보기 {">"}</a>
                        </div>
                    </section>
                    <section className="menu-section-mid">
                        <div className="menu-product-list">
                            <div className="menu-product-item">
                                <div className="product-img">
                                    <img src="assets/images/double_cake.jpg" />
                                </div>
                                <div className="product-info">
                                    <p>케이크</p>
                                </div>
                            </div>
                            <div className="menu-product-item">
                                <div className="product-img">
                                    <img src="assets/images/double_cake.jpg" />
                                </div>
                                <div className="product-info">
                                    <p>텀블러/보온병</p>
                                </div>
                            </div>
                            <div className="menu-product-item">
                                <div className="product-img">
                                    <img src="assets/images/double_cake.jpg" />
                                </div>
                                <div className="product-info">
                                    <p>머그/컵</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="menu-section-bot">
                        <div className="menu-product-list">
                            <div className="menu-product-item">
                                <div className="product-img">
                                    <img src="assets/images/double_cake.jpg" />
                                </div>
                                <div className="product-info">
                                    <p>라이프스타일</p>
                                </div>
                            </div>
                            <div className="menu-product-item">
                                <div className="product-img">
                                    <img src="assets/images/double_cake.jpg" />
                                </div>
                                <div className="product-info">
                                    <p>티/커피용품</p>
                                </div>
                            </div>
                            <div className="menu-product-item">
                                <div className="product-img">
                                    <img src="assets/images/double_cake.jpg" />
                                </div>
                                <div className="product-info">
                                    <p>세트</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                <footer className="menu-footer">
                    <div className="menu-footer-top">
                        <a href="special.html">
                            <div className="menu-footer-top-button">
                                <div className="menu-footer-top-button-description">
                                    <span>기획전</span>
                                    <p>진행중인 기획전을 만나보세요.</p>
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/512/892/892528.png" />
                            </div>
                        </a>
                        <a href="best.html">
                            <div className="menu-footer-top-button2">
                                <div className="menu-footer-top-button2-description">
                                    <span>베스트</span>
                                    <p>스타벅스의 베스트 상품을 만나보세요.</p>
                                </div>
                                <img src="https://cdn-icons-png.flaticon.com/512/892/892528.png" />
                            </div>
                        </a>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Menu;