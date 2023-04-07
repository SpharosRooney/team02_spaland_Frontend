import Config from '@/configs/config.export';
import { eventProductType } from '@/types/fetchDataType';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function BestProductListCard(props: { categoryLarge: string }) {

    const { baseUrl } = Config()
    const [productData, setProductData] = useState<eventProductType[]>()
    const router = useRouter();

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/product/get?categoryLarge=${props.categoryLarge}`, {timeout: 10000})
            .then(res => res.data.data)
            .then(data => setProductData(data))
    }, [props.categoryLarge, baseUrl])

    const handleProductClick = (id: number) => {
        router.push(`/products/${id}`)
    }

    return (
        <>
            {productData && productData.map((res,index) =>
                <div className="searchresult-product-item" onClick={() => handleProductClick(res.id)} key={res.id}>
                    <p className="count">{index+1}</p>
                    <div className="searchresult-product-item__img">
                        <Image src={res.titleImg} alt={res.description} width={150} height={150}/>
                    </div>
                    <div className="recommand-product-item__info">
                        {res.isNew ? <p className="item-new">new</p> : null}
                        <p className="item-title">{res.name}</p>
                        <p className="item-price">{res.price}원</p>
                    </div>
                </div>
            )}
        </>
    )
}
