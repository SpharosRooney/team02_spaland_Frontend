import React, { useEffect, useState } from 'react'
import { eventProductType } from '@/types/fetchDataType'
import Image from 'next/image'
import Config from '@/configs/config.export';
import axios from 'axios';
import { useRouter } from 'next/router';



export default function EventProductListCard(props: { productTitle: string }) {

    const { baseUrl } = Config();
    const router = useRouter()
    const [productData, setProductData] = useState<eventProductType[]>()

    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get?event=${props.productTitle}`, {timeout: 10000})
            .then(res => res.data.data)
            .then(data => setProductData(data))
    }, [props.productTitle, baseUrl])

    const handleProductClick = (id: number) => {
        router.push(`/products/${id}`)
    }

    return (
        <>
            {
                productData &&  productData.map ( (item) =>
                    <div className="recommand-product-item" onClick={() => handleProductClick(item.id)} key={item.id}>
                        <div className="special-recommand-product-item__img">
                            <Image src={item.titleImg} alt={item.description} width={150} height={150} />
                        </div>
                        <div className="recommand-product-item__info">
                            {item.isNew ? <p className="item-new">New</p> : null}
                            <p className="item-title">{item.name}</p>
                            <p className="item-price"><span>{item.price}</span>원</p>
                        </div>
                    </div>
                )
            }
        </>
    )
}
