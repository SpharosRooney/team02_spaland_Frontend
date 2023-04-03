import React, { useEffect, useState } from 'react'
import ProductListCard from '../ui/ProductListCard'
import TagListCard from '../ui/TagListCard'
import { eventListType, eventProductListType } from '@/types/fetchDataType'
import { tagListCardType } from '@/types/fetchDataType'
import Config from '@/configs/config.export'
import axios from 'axios'

export default function RecommandWidget(props: { title: string }) {

    const [eventItemList, setEventItemList] = useState<eventListType[]>()

    const { baseUrl } = Config();

    const preTitle = props.title;
    const encodedTitle = encodeURIComponent(preTitle);
    console.log('props.title', props.title)
    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get?event=${encodedTitle}`)
            .then(res => setEventItemList(res.data.data))
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
                                productId={item.id}
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
