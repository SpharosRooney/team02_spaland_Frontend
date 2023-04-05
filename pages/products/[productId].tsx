
import FooterButton from '@/components/footer/FooterButton'
import Separator_large from '@/components/ui/Separator_large'
import ItemNoticeWidget from '@/components/widgets/ItemNoticeWidget'
import { eventProductType } from '@/types/fetchDataType'
import { useEffect, useState } from 'react'

import { useRouter } from 'next/router'
import Config from '@/configs/config.export'
import axios from 'axios'
import ImageSizeReturn from '@/components/ui/ImageSizeReturn'
import Image from 'next/image'

export default function Products() {

    const { query } = useRouter();
    const { baseUrl } = Config();

    console.log(query)
    const [productData, setProductData] = useState<eventProductType>()


    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/product/get/${query.productId}`)
            .then(res => {
                console.log(res.data)
                setProductData(res.data.data)
            })
    }, [query])

    console.log('123', query)
    console.log('asd', productData)

    
    return (
        <>
            {
                productData && (
                    <div className="container">
                        <section id="item-event-banner">
                            <div className="event-banner">
                                <div className="event-banner__item">
                                    <div className="event-banner__item__img">
                                        <ImageSizeReturn imgUrl={productData.titleImg} imgAlt={productData.description} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section id="recommand-md">
                            <div>
                                <div className="item-info">
                                    <div>
                                        <p className="item-info-1"><b>{productData.name} </b>
                                            {
                                                productData.isNew && <span className="item-new"> New</span>
                                            }
                                        </p>
                                    </div>
                                    <div>
                                        <button className="openBtn">
                                            <Image
                                                src="/assets/images/icons/share.svg"
                                                width={20}
                                                height={20}
                                                alt="share"
                                            />
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="item-info-2">{productData.description}</p>
                                </div>
                                <div>
                                    <p className="item-info-1"><b>{productData.price}원</b></p>
                                </div>
                            </div>
                        </section>
                        <Separator_large color='#f7f7f7' height={10} />
                        <section id="recommand-md2">
                            <div>
                                <p className="item-product-info">상품 정보</p>
                            </div>
                            {
                                productData.productImageList && productData.productImageList.map((img) => (
                                    <div className="border-color" key={img.id}>
                                        <ImageSizeReturn imgUrl={img.imgUrl} imgAlt={img.imgAlt} />
                                    </div>
                                ))
                            }
                        </section>
                        <ItemNoticeWidget />
                        <FooterButton inputvalue='구매하기' />
                    </div >
                )
            }
        </>
    )
}