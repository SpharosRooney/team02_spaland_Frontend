import React, { useEffect, useState } from 'react'
import { eventProductListCardType } from '@/types/fetchDataType'
import Image from 'next/image'



export default function EventProductListCard(props: { productId: number }) {
    const [productData, setProductData] = useState<eventProductListCardType[]>()

    useEffect(() => {
        fetch(`http://10.10.10.51:8080/api/v1/product/categoryList/category/event/${props.productId}`)
            .then(res => res.json())
            .then(data => setProductData(data))
    }, [props.productId])

    return (
        <>
            {
                productData &&  productData.map ( (item) =>
                    <div className="recommand-product-item">
                        <div className="special-recommand-product-item__img">
                            <Image src={item.titleImg} alt={item.discription} width={170} height={170} />
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
