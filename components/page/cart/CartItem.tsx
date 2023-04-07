import Config from '@/configs/config.export'
import { userLoginState } from '@/state/user/atom/userLoginState'
import { cartListType } from '@/types/cart/cartListType'
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRecoilValue } from 'recoil'

export default function CartItem(props: { data: cartListType, checker: boolean, setChecker: React.Dispatch<React.SetStateAction<boolean>> }) {

    const { baseUrl } = Config();
    const { accessToken } = useRecoilValue(userLoginState)

    const handleCartListDelete = () => {
        axios.delete(`${baseUrl}/api/v1/cart/delete/${props.data.id}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
        }).then(res => {
            console.log('ㅁㄴ암ㄴㅇ',res)
            console.log(props.data.id)
            props.setChecker(!props.checker)
        }).catch((error)=> {
            console.log("에러확인",error)
        })
    }

    return (
        <>
            <section className="cart-product">
                <div className="checkbox-border">
                    <div className="checkbox-border-left">
                        <input checked={!props.checker} className={props.checker ? 'checkboxOn' : 'checkbox'} type='checkbox' />
                        <Image
                            src={props.data.titleImg}
                            width={100}
                            height={100}
                            alt="productItem"
                        />
                    </div>
                    <div className="checkbox-border-right">
                        <p className="subject">{props.data.name}</p>
                        <p className="price">{(props.data.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</p>
                    </div>
                    <div className="cancel-button" onClick={handleCartListDelete}>
                        <Image
                            src="https://cdn-icons-png.flaticon.com/512/864/864393.png"
                            width={30}
                            height={30}
                            alt="cancelButton"
                        />
                    </div>
                </div>
                <div className="product-count">
                    <p>수량: {props.data.productAmount}개</p>
                </div>
                <div className="order-price">
                    <span>주문 금액</span>
                    <span>{(props.data.price * props.data.productAmount).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                </div>
                <div className="edit-buy">
                    <div className="cart-product-table">
                        <span>주문 수정</span>
                        <span><Link href='/buypage'>바로 구매</Link></span>
                    </div>
                </div>
            </section>
        </>
    )
}

