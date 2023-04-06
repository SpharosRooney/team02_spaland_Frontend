import { cartListType } from '@/types/cart/cartListType'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import CartInfo from './CartInfo'


export default function CartFooter(props:{data:cartListType[]}) {
    const [allPrice, setAllPrice] = useState<number>(0)
    const [allCount, setAllCount] = useState<number>(0)

    useEffect(() => {
        let price = 0
        props.data.map(item => {
            price += item.price * item.productAmount
        })
        setAllPrice(price)
        setAllCount(props.data.length)
    }, [props.data])

    return (
        <>

        <footer className="cart-footer">
            <div className="submit-box">
                <div className="cart-footer-top">
                    <p className="cart-footer-top-left">총 <span className="cart-footer-top-count"> {allCount}</span>건 / 20건</p>
                    <p className="cart-footer-top-right"><span className="cart-footer-top-total">{allPrice}</span>원</p>
                </div>
                <div className="cart-footer-bot">
                    <button className="cart-gift"><Link href = 'giftcard'>선물하기 </Link></button>
                    <button className="cart-buy"><Link href = 'buypage'>구매하기</Link></button>
                </div>
            </div>
        </footer>
        </>
    )
}
