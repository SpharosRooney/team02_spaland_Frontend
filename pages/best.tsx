import { useEffect, useState } from 'react'
import { subNavMenuType } from '@/types/navMenuType'
import SwiperCore, { Pagination } from 'swiper'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/pagination";
import Config from '@/configs/config.export';
import axios from 'axios';
import BestProductListCard from '@/components/ui/BestProductListCard';

export default function Best() {

    const [swiper, setSwiper] = useState<SwiperCore>();
    const [bestsubnav, setBestSubNav] = useState<subNavMenuType[]>();
    const [slideindex, setSlideIndex] = useState<number>(0)
    const { baseUrl } = Config();

    useEffect(() => {
        axios(`${baseUrl}/api/v1/categoryLarge/all`)
            .then(res => res.data.data)
            .then(data => setBestSubNav(data))
    }, [bestsubnav])
    console.log('bestsubnav', bestsubnav)

    // useEffect(()=> {
    //     axios.get(`${baseUrl}/api/v1/get/all`)
    //     .then((res) => res.data.data)
    //     .then((data) => setBestSubNav(data))
    // }, [slideindex])

    return (
        <>
            {/* {
                bestListData && bestListData.map(best => (
                    <BestWidget
                        key={best.id}
                        bestId={best.bestId}
                    />
                ))
            } */}
            <div className='header-top' />
            <div style={{ marginTop: '50px', position: 'fixed', width: '100%', zIndex: '2', background: 'white' }}>
                <div className="header-sub">
                    <nav>
                        <ul>
                            {bestsubnav && bestsubnav.map((best) => (
                                <li
                                    key={best.id}
                                    className={slideindex === best.id - 1 ? "active" : ""}
                                    onClick={() => swiper ? swiper.slideTo(best.id - 1) : ""}
                                >
                                    {best.name}
                                </li>
                            ))
                            }
                        </ul>
                    </nav>
                </div>
            </div>

            <Swiper
                modules={[Pagination]}
                slidesPerView={1}
                onSlideChange={(swiper) => (setSlideIndex(swiper.activeIndex))}
                onSlideChangeTransitionStart={() => (scrollTo(0, 0))}
                onSwiper={setSwiper}
                style={{ marginTop: '107px' }}
                autoHeight={true}
            >
                {
                    bestsubnav && bestsubnav.map((best) => (
                        <>
                            <SwiperSlide>
                                <section className="best-product">
                                    <div className="best-product-list">
                                        <BestProductListCard categoryLarge={best.name} sort={best.name} />
                                    </div>
                                </section>
                            </SwiperSlide>
                        </>
                    ))
                }
            </Swiper>
        </>
    )
}
