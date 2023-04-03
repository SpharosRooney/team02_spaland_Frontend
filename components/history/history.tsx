import { Keyword } from '@/types/search/searchKeywords';
import axios from 'axios';
import React, { useState } from 'react';


const History = () => {
  const [keywords, setKeywords] = useState<Keyword[]>(JSON.parse(
    typeof window !== 'undefined' && window.localStorage.getItem('keyword') || '[]'
  ));

  const handleRemoveKeyword = (id: number) => {
    const updatedKeywords = keywords.filter((keyword) => keyword.id !== id);
    setKeywords(updatedKeywords);
    localStorage.setItem('keyword', JSON.stringify(updatedKeywords));
  };

  const handleAllRemoveKeyword = () => {
    setKeywords([]);
    localStorage.removeItem('keyword');
  };
  
  // const handleresult = async () => {

  //   axios.get(`http://localhost:8080/api/v1/product/get?query=${keywords.keyword}`)
  //     // 검색 결과 페이지로 이동
  //     window.location.href = `/searchresult?query=${keywords.keyword}`;
  // }

  return (
    <>
      { keywords.length > 0 ?
        (
          <section>
            <div className="search-words-box">
              <div style={{ marginTop: 70 }}>
                <p>최근 검색어</p>
              </div>
              <div className="search-words-box2">
                {keywords.sort((a: Keyword, b: Keyword) => a.id - b.id).map((keyword) => (
                  <div className="search-words">
                    <div className="search-word" key={keyword.id}>
                      <p>{keyword.keyword}</p>
                      <img src="assets/images/icons/close.png" onClick={() => handleRemoveKeyword(keyword.id)} />
                    </div>
                  </div>
                ))}
              </div>
              <div className="total-delete">
                <button onClick={handleAllRemoveKeyword}><p>전체 삭제</p></button>
              </div>
            </div>
          </section>
        ) :
        (
          <section id="recommand-md">
            <div className="search-result">
              <h4>최근 검색어가 없습니다.</h4>
            </div>
          </section>
        )
      }
    </>
  );
};

export default History;