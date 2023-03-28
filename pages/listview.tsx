import { productType } from '@/types/header/filterType';
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

export default function listview() {

    const { query } = useRouter();
    const [productList, setProductList] = useState<productType[]>([])

    useEffect(() => {
        axios.get(`http://localhost:3001/product`)
            .then((res) => {
                console.log(res.data.find((product: productType) => product.bigCategory === query.category))
                console.log(res.data.filter((product: productType) =>
                    product.bigCategory === query.category
                ))
                setProductList(res.data)
            }).catch((err) => {
                console.log(err)
            })
    }, [query.category])


    return (
        <>
            {
                productList.map((product, idx) => (
                    <div key={idx}>
                        <p>{product.productName}</p>
                        <p>{product.bigCategory}</p>
                    </div>
                ))
            }
        </>
    )
}
