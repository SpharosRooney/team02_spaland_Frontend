import { cartListState } from '@/state/cartListState';
import React from 'react'
import { useRecoilState } from 'recoil';

export default function CartInfo() {
    
    const [cartItems, setCartItems] = useRecoilState(cartListState);
    
    let price = 0;

        
    
    return (
        <>
        <section className="cart-result">
                <div className="cart-result-detail">
                    <p className="cart-result-detail-price">상품 1건 55,000원 + 배송비 0원=총 55,000원</p>
                    <p className="cart-result-detail-tax">무료배송</p>
                </div>
                <a href="">
                    <p className="cart-result-detail-more">더 담으러 가기</p>
                </a>
            </section>

        <section id="total-cart-price">
            <div>
                <div className="title-total-price">
                    총 주문 금액
                </div>
                <div className="prices">
                    <div className="cart-price">
                        <p>상품 금액</p>
                        <p className="price">33,000원</p>
                    </div>
                    <div className="cart-price">
                        <p>할인 금액</p>
                        <p className="price">0원</p>
                    </div>
                    <div className="cart-price">
                        <p>배송비</p>
                        <p className="price">3,000원</p>
                    </div>
                </div>
                <div className="total-price">
                    <p>최종 결제 금액</p>
                    <p className="price">36,000원</p>
                </div>
                <div className="notice">
                    <div className="notice-box">
                        장바구니에는 최대 20개까지 담을 수 있으며, 담긴 상품은 최대 2개월간 보관됩니다.<br />
                        가격, 옵션 등 정보가 변경된 경우 주문이 불가할 수 있습니다.
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
