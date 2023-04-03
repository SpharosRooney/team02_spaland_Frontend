import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import SearchBar from '@/components/ui/Searchbar';
import { seacrchKeyword } from '@/types/search/searchKeywords';
import { useRouter } from 'next/router';
import History from '@/components/history/history';

export default function search() {


    // const [keywords, setKeyWords] = useState<searchKeyword[]>([])
    // const router = useRouter()
    // const [searchvalue, setSearchValue] = useState<string>('')

    // useEffect(() => {
    //     const result = localStorage.getItem('keywords') || '[]'
    //     setKeyWords(JSON.parse(result))
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('keywords', JSON.stringify(keywords))
    // }, [keywords])


    // const HandleAddWord = (keyword: string) => {
    //     const newKeyword = {
    //         id: Date.now(),
    //         keyword: "",
    //     }
    //     setKeyWords([newKeyword, ...keywords])
    // }

    // const HandleDeleteWord = (id: number) => {
    //     const nextKeyword = keywords.filter((keywords) => {
    //         return keywords.id != id
    //     })
    //     setKeyWords(nextKeyword)
    // }

    // const HandleAllDeleteWord = () => {
    //     setKeyWords([])
    // }

    return (
        <>
            <div className="container">
                <SearchBar/>
                <History/>
            </div>
            {/* <section>
                        <div className="search-words-box">
                            <div>
                                <p>최근 검색어</p>
                            </div>
                            <div className="search-words">
                                <div className="search-word">
                                    <div className="word-p">
                                        <p>텀블러</p>
                                    </div>
                                    <img src="assets/images/icons/close.png" onClick={ } />
                                </div>
                            </div>
                            <div className="total-delete">
                                <button onClick={HandleAllDeleteWord}><p>전체 삭제</p></button>
                            </div>
                        </div>
                    </section>
                <section id="recommand-md">
                    <div className="search-result">
                        <h4>최근 검색어가 없습니다.</h4>
                    </div> */}
        </>
    )
}