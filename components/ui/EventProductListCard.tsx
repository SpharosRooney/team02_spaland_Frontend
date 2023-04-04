import React, { useEffect, useState } from 'react'
import { eventProductListCardType } from '@/types/fetchDataType'
import Image from 'next/image'
import Config from '@/configs/config.export';
import axios from 'axios';



export default function EventProductListCard(props: { productTitle: string }) {

    const { baseUrl } = Config();
    const [productData, setProductData] = useState<eventProductListCardType[]>()

    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get?event=${props.productTitle}`)
            .then(res => res.data.data)
            .then(data => setProductData(data))
    }, [props.productTitle])

    console.log('123', productData)
    return (
        <>
            {
                productData &&  productData.map ( (item) =>
                    <div className="recommand-product-item">
                        <div className="special-recommand-product-item__img">
                            <Image src={item.titleImg} alt={item.description} width={170} height={170} />
                        </div>
                        <div className="recommand-product-item__info">
                            {/* {productData. ? <p className="item-new">New</p> : null} */}
                            <p className="item-title">{item.name}</p>
                            <p className="item-price"><span>{item.price}</span>원</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
