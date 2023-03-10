import React from 'react'

export default function searchresult() {
    return (
        <div className="container">
            <header>
                <div className="header-top">
                    <div className="back-icon">
                        <a href="index.html"><img src="assets/images/icons/back.png" alt=""/></a>
                    </div>
                    <h1>온라인 스토어</h1>
                    <nav>
                        <ul>
                            <li><a href="search.html"><img src="assets/images/icons/search.svg"/></a></li>
                            <li><img src="assets/images/icons/shopping-cart.svg"/></li>
                            <li><a href="mypage.html"></a><img src="assets/images/icons/user.svg"/></li>
                        </ul>
                    </nav>
                </div>
                <div className="header-bottom">
                    <div className="ft-top">
                        <p className="ft-information">"텀블러"의 검색결과</p>
                    </div>
                </div>
            </header>
            <section id="category">
                <div className="category-box">
                    <nav>
                        <ul>
                            <li><b className='category-b'>전체</b></li>
                            <li>텀블러/보온병(28)</li>
                            <li>티/커피용품(5)</li>
                            <li>세트(3)</li>
                        </ul>
                    </nav>
                </div>
                <nav>
                    <ul>
                        <li><b>가격</b></li>
                        <ul className="bar2">
                            <li>1만원미만</li>
                            <li>1만원대</li>
                            <li>2만원대</li>
                            <li>3만원대</li>
                            <li>4만원대</li>
                            <li>5만원이상</li>
                        </ul>
                    </ul>
                </nav>
            </section>
            <section id="category2">
                <details>
                    <summary style="text-align: center;">필터 더보기</summary>
                    <nav>
                        <ul>
                            <li><b>시즌</b></li>
                            <ul className="bar2">
                                <li>3.1절</li>
                                <li>체리블라썸</li>
                                <li>밸런타인데이</li>
                                <li>New Year</li>
                                <li>데스크 컬렉션</li>
                                <li>Christmas</li>
                                <li>여주자유CC</li>
                                <li>Autumn</li>
                                <li>시럽</li>
                                <li>테이블웨어 컬렉션</li>
                                <li>홈앤피크</li>
                            </ul>
                        </ul>
                    </nav>
                </details>
            </section>
            <section className="special_section_product">
                <div className="special-recommand-product-list">
                    <div className="recommand-product-item">
                        <div className="special-recommand-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20210914_1/16315986291206EJHr_JPEG/32734471814575345_1923131179.jpg?type=m510"
                                style="height: 156px; width: 161px;" alt="[4+1] SS 그린 사이렌 원핸드 텀블러 473ml"/>
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">[4+1] SS 그린 사이렌 원핸드 텀블러 473ml</p>
                            <p className="item-price"><span>132,000</span>원</p>
                        </div>
                    </div>
                    <div className="recommand-product-item2">
                        <div className="special-recommand-product-item__img">
                            <img
                                src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/08/[9300000004104]_20220810152652583.jpg"
                                style="height: 156px; width: 161px;" alt="[4+1] 파스텔 블루 텀블러 473ml"/>
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-new">New</p>
                            <p className="item-title">[4+1] 파스텔 블루 텀블러 473ml</p>
                            <p className="item-price"><span>64,000</span>원</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="special_section_product2">
                <div className="special-recommand-product-list">
                    <div className="recommand-product-item">
                        <div className="special-recommand-product-item__img">
                            <img
                                src="https://image.istarbucks.co.kr/upload/store/skuimg/2022/08/[9300000004105]_20220810152839570.jpg"
                                style="height: 156px; width: 161px;" alt="[4+1] 파스텔 핑크 텀블러 473ml"/>
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">[4+1] 파스텔 핑크 텀블러 473ml</p>
                            <p className="item-price"><span>64,000</span>원</p>
                        </div>
                    </div>
                    <div className="recommand-product-item2">
                        <div className="special-recommand-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20230213_195/1676251036143rKN01_JPEG/77386819855230701_560737894.jpg?type=m510"
                                style="height: 156px; width: 161px;" alt="23 체리 아이코닉 글리터 텀블러 473ml"/>
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">23 체리 아이코닉 글리터 텀블러 473ml</p>
                            <p className="item-price"><span>23,000</span>원</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="special_section_product3">
                <div className="special-recommand-product-list">
                    <div className="recommand-product-item">
                        <div className="special-recommand-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20230213_200/1676251009069F0Yc8_JPEG/77386792779074247_671977658.jpg?type=m510"
                                style="height: 156px; width: 161px;" alt="23 체리 플로런스 로맨틱 텀블러 473ml"/>
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">23 체리 플로런스 로맨틱 텀블러 473ml</p>
                            <p className="item-price"><span>19,000</span>원</p>
                        </div>
                    </div>

                    <div className="recommand-product-item2">
                        <div className="special-recommand-product-item__img">
                            <img
                                src="https://shop-phinf.pstatic.net/20230213_151/1676250911506rREHP_JPEG/77386739308987584_401162669.jpg?type=f140"
                                style="height: 156px; width: 161px;" alt="23 SS 체리 밸류 로맨틱 텀블러 355ml"/>
                        </div>
                        <div className="recommand-product-item__info">
                            <p className="item-title">23 SS 체리 밸류 로맨틱 텀블러 355ml</p>
                            <p className="item-price"><span>32,000</span>원</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
