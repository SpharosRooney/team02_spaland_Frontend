import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { eventProductType } from '@/types/fetchDataType';
import Config from '@/configs/config.export';
import Image from 'next/image';

export default function AllSearchResult() {

    const router = useRouter();
    const { baseUrl } = Config();
    const [allproductData, setAllProductData] = useState<eventProductType[]>();

    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get/all`)
            .then(res => {
                console.log(res.data.data);
                setAllProductData(res.data.data)
            })
    }, [baseUrl, router.pathname])

    const handleProductClick = (id: number) => {
        router.push(`/products/${id}`)
    }

    return (
        <>
            {allproductData &&
                <>
                    <div className="searchresult-product-list">
                        {allproductData && allproductData.map((product) => (
                            <div className="searchresult-product-item" onClick={() => handleProductClick(product.id)} key={product.id}>
                                <div className="searchresult-product-item__img">
                                    <Image
                                        src={product.titleImg} width={150}
                                        height={150}
                                        alt={product.description}
                                    />
                                </div>
                                <div className="recommand-product-item__info">
                                    <p className="item-new">{product.isNew}</p>
                                    <p className="item-title">{product.name}</p>
                                    <p className="item-price">{product.price}원</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            }
        </>
    )
}
