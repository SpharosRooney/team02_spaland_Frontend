import Config from '@/configs/config.export'
import { ProductListCardType, eventProductType } from '@/types/fetchDataType'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function ProductListCard(props: { productId: number }) {

    const router = useRouter()
    const [productData, setProductData] = useState<eventProductType[]>()
    const { baseUrl } = Config();


    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get/${props.productId}`)
            .then(res => res.data)
            .then(data => setProductData(data))
    }, [props.productId])

    return (
        <>
            {/* {
                productData &&
                <div onClick={()=>router.push(`/products/${productData.id}`)}className="recommand-product-item">
                    <div className="recommand-product-item__img">
                        <img src={productData.imgUrl} alt={productData.title} />
                    </div>
                    <div className="recommand-product-item__info">
                        {productData.isNew ? <p className="item-new">New</p> : null}
                        <p className="item-title">{productData.title}</p>
                        <p className="item-price"><span>{productData.price}</span>원</p>
                    </div>
                </div>
            } */}
        </>
    )
}
