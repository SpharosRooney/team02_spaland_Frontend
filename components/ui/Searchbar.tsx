import { useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const SearchBar = () => {
    const [keyword, setKeyword] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await axios.get(`http://192.168.35.226:8080/api/v1/product/get?query=${keyword}`);
            // 검색 결과 페이지로 이동
            window.location.href = `/searchresult?query=${keyword}`;
            localStorage.setItem("keyword", keyword);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <header>
            <form onSubmit={handleSubmit}>
                <div className="header-top">
                    <div className="search">
                        <input
                            type="text"
                            placeholder="검색어를 입력하세요."
                            value={keyword}
                            onChange={(event) => setKeyword(event.target.value)}
                        />
                        <button type="submit">
                            <img src="assets/images/icons/search.svg" />
                        </button>
                    </div>
                    <nav className="search-close">
                        <Link href="/">
                            <img src="assets/images/icons/close.png" />
                        </Link>
                    </nav>
                </div>
            </form>
        </header>
    );
};

export default SearchBar;
