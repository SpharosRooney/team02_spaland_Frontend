import { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { seacrchKeyword } from '@/types/search/searchKeywords';
import { ProductDetailType } from '@/types/fetchDataType';
import SearchProductCategory from '@/components/widgets/SearchProductCategory';
import Config from '@/configs/config.export';
import Image from 'next/image';
import ProductCategory from '@/components/widgets/ProductCategory';

export default function SearchResult () {
    const router = useRouter();
    const query = router.query.query || '';
    const [searchresults, setSearchResults] = useState<seacrchKeyword[]>([]);
    const { baseUrl } = Config();

    const [allmenu, setAllmenu] = useState<ProductDetailType[]>([]);

    useEffect(() => {
        const fetchSearchResults = () => {
                axios.get(`${baseUrl}/api/v1/product/get?keyword=${query}`)
                .then((res) => {
                    const data = res.data.data;
                    setSearchResults(data);
                    console.log(data)
                })
                .catch((err) => {
                    console.log(err)
                })
        };

        if (query) {
            fetchSearchResults();
        }
    }, [query]);

    // useEffect(() => {
    //     axios.get('http://10.10.10.51:8080/api/v1/product/get')
    //         .then((res) => {
    //             console.log(res.data)
    //             setAllmenu(res.data)
    //         }).catch((err) => {
    //             console.log(err)
    //         })
    // }, []);

    return (
        <>
            {query.length > 0 ? (
                <>
                    <header />
                    <div className="header-top"/>
                        <div className="header-bottom">
                            <div className="ft-top">
                                <p className="ft-information">&quot;{query}&quot;의 검색결과</p>
                            </div>
                            {/* <SearchProductCategory /> */}
                        </div>
                            <div style={{display:'flex', justifyContent:"end"}}>
                            <select style={{display:"flex",}}>
                                <option value="1">신상품순</option>
                                <option value="2">추천순</option>
                                <option value="3">낮은가격순</option>
                                <option value="4">높은가격순</option>
                            </select>
                            </div>
                                    <div className="searchresult-product-list">
                                        {Array.isArray(searchresults) && searchresults.map((res) => (
                                            <div className="searchresult-product-item" key={res.id}>
                                                <div className="searchresult-product-item__img">
                                                <Image
                                                    src={res.titleImg}
                                                    width={170}
                                                    height={170}
                                                    alt= {res.description}
                                                />
                                                </div>
                                                <div className="recommand-product-item__info">
                                                    <p className="item-new">new</p>
                                                    <p className="item-title">{res.name}</p>
                                                    <p className="item-price">{res.price}원</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                </>
            ) : (
                <>
                    {/* <header />
                    <div className="header-top"/>
                        <ProductCategory />
                            <div style={{display:'flex', justifyContent:"end"}}>
                            <select style={{display:"flex",}}>
                                <option value="1">신상품순</option>
                                <option value="2">추천순</option>
                                <option value="3">낮은가격순</option>
                                <option value="4">높은가격순</option>
                            </select>
                            </div>
                                    <div className="searchresult-product-list">
                                        {Array.isArray(allmenu) && allmenu.map((res) => (
                                            <div className="searchresult-product-item" key={res.id}>
                                                <div className="searchresult-product-item__img">
                                                <Image
                                                    src={res.titleImg}
                                                    width={170}
                                                    height={170}
                                                    alt= {res.description}
                                                />
                                                </div>
                                                <div className="recommand-product-item__info">
                                                    <p className="item-new">new</p>
                                                    <p className="item-title">{res.name}</p>
                                                    <p className="item-price">{res.price}원</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div> */}
                </>
            )}
        </>
    );
};