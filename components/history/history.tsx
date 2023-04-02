import { useState } from 'react';

const History = () => {
  const [keyword, setKeyword] = useState(localStorage.getItem('keyword') || '');

  const handleRemoveKeyword = () => {
    setKeyword('');
    localStorage.removeItem('keyword');
  };

  return (
    <>
      {keyword.length > 0 ?
        (
          <section>
            <div className="search-words-box">
              <div style={{ marginTop: 70 }}>
                <p>최근 검색어</p>
              </div>
              <div className="search-words">
                <div className="search-word">
                  <div className="word-p">
                    <p>{keyword}</p>
                  </div>
                  <img src="assets/images/icons/close.png" onClick={handleRemoveKeyword} />
                </div>
              </div>
              <div className="total-delete">
                <button onClick={handleRemoveKeyword}><p>전체 삭제</p></button>
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