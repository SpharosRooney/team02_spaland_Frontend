import React, { useEffect, useState } from 'react'
import ProductListCard from '../ui/ProductListCard'
import TagListCard from '../ui/TagListCard'
import { eventProductListType } from '@/types/fetchDataType'
import { tagListCardType } from '@/types/fetchDataType'
import Config from '@/configs/config.export'
import axios from 'axios'

export default function RecommandWidget(props: { title: string }) {

    const [eventItemList, setEventItemList] = useState<eventProductListType[]>()

    const { baseUrl } = Config();

    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get?event=${props.title}`)
            .then(res => console.log('asdi', res))
    }, [])

    return (
        <section id="recommand-md">
            <div className="recommand-md-products">
                <h2>{props.title}</h2>
                <div className="recommand-product-list">
                    {
                        eventItemList && eventItemList.map(item => (
                            <ProductListCard
                                key={item.id}
                                productId={item.productId}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
