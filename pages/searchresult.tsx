import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { eventProductType } from '@/types/fetchDataType';
import Config from '@/configs/config.export';
import Image from 'next/image';
import { subNavMenuType } from '@/types/navMenuType';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
    const router = useRouter();
    const { query } = useRouter();
    const keyword = router.query.query || '';
    const [searchresults, setSearchResults] = useState<eventProductType[]>([]);
    const { baseUrl } = Config();
    const [productData, setProductData] = useState<eventProductType[]>();
    const [allproductData, setAllProductData] = useState<eventProductType[]>();

    useEffect(() => {
        const fetchSearchResults = () => {
            axios.get(`${baseUrl}/api/v1/product/get?keyword=${keyword}`, { timeout: 10000 })
                .then((res) => {
                    console.log(res.data.data);
                    const data = res.data.data;
                    setSearchResults(data);
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        };

        if (keyword) {
            fetchSearchResults();
        }
    }, [keyword, baseUrl]);

    useEffect(() => {
        axios(`${baseUrl}/api/v1/product/get?categoryLarge=${query.categoryLarge}`)
            .then(res => {
                console.log(res.data.data);
                setProductData(res.data.data)
            })
    }, [baseUrl, query.categoryLarge])

    const handleProductClick = (id: number) => {
        router.push(`/products/${id}`)
    }

    useEffect(() => {
        if (router.pathname === '/searchresult') {
            axios(`${baseUrl}/api/v1/product/get/all`)
                .then(res => {
                    console.log(res.data.data);
                    setAllProductData(res.data.data)
                })
        }
    }, [baseUrl, router.pathname])

    return (
        <>
            {keyword.length !== 0 ? (
                <>
                    <header />
                    <div className="header-top" />
                    <div className="header-bottom">
                        <div className="ft-top">
                            <p className="ft-information">&quot;{keyword}&quot;의 검색결과</p>
                        </div>
                    </div>
                    <div className="searchresult-product-list">
                        {Array.isArray(searchresults) && searchresults.map((res) => (
                            <div className="searchresult-product-item" onClick={() => handleProductClick(res.id)} key={res.id}>
                                <div className="searchresult-product-item__img">
                                    <Image
                                        src={res.titleImg} width={150}
                                        height={150}
                                        alt={res.description}
                                    />
                                </div>
                                <div className="recommand-product-item__info">
                                    <p className="item-new">{res.isNew}</p>
                                    <p className="item-title">{res.name}</p>
                                    <p className="item-price">{res.price}원</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            ) : (
                <></>
            )
            }
            {productData &&
                <>
                    <div className="searchresult-product-list2">
                        {productData && productData.map((product) => (
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
    );
}

export default SearchResult;
