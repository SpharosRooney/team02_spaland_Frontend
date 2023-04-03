import { Keyword } from "@/types/search/searchKeywords";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";


const SearchBar = () => {
    const [keyword, setKeyword] = useState<Keyword>({
        id: Date.now(),
        keyword: "",
    });

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await axios.get(`http://localhost:8080/api/v1/product/get?query=${keyword.keyword}`);
            // 검색 결과 페이지로 이동
            window.location.href = `/searchresult?query=${keyword.keyword}`;

            // 검색어를 localStorage에 저장
            const keywords = JSON.parse(localStorage.getItem('keyword') || '[]');
            keywords.unshift(keyword);
            localStorage.setItem('keyword', JSON.stringify(keywords));
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => {
        // 검색창 닫기
        window.location.href = '/';
    }

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <div className="header-top">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요."
                            value={keyword.keyword}
                            onChange={(event) =>
                                setKeyword({
                                    ...keyword,
                                    keyword: event.target.value,
                                })
                            }
                        />
                        <button type="submit">
                            <img src="assets/images/icons/search.svg" />
                        </button>
                    </div>
                    <nav className="search-close">
                        <img src="assets/images/icons/close.png" onClick={handleClose}/>
                    </nav>
                </div>
            </form>
        </header>
    );
}

export default SearchBar;