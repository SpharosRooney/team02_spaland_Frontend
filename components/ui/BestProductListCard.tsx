import Config from '@/configs/config.export';
import { eventProductListCardType } from '@/types/fetchDataType';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

export default function BestProductListCard(props: { categoryLarge: string, sort: string }) {

    const { baseUrl } = Config()
    const [productData, setProductData] = useState<eventProductListCardType[]>()

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/product/get?categoryLarge=${props.categoryLarge}&sort=${props.sort}`)
            .then(res => res.data.data)
            .then(data => setProductData(data))
    }, [props.categoryLarge, props.sort])

    return (
        <>
            {productData && productData.map((res) =>
                <div className="searchresult-product-item" key={res.id}>
                    <p className="count">{res.id}</p>
                    <div className="searchresult-product-item__img">
                        <Image src={res.titleImg} alt={res.description} width={170} height={170}/>
                    </div>
                    <div className="recommand-product-item__info">
                        <p className="item-new">new</p>
                        <p className="item-title">{res.name}</p>
                        <p className="item-price">{res.price}원</p>
                    </div>
                </div>
            )}
        </>
    )
}
