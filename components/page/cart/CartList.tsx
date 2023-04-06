import CartListSubject from '@/components/ui/CartListSubject';
import { cartListType } from '@/types/cart/cartListType';
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import CartInfo from './CartInfo';

export default function CartList(props: { data: cartListType[] }) {

    const [Items, setItems] = useState<cartListType[]>([])
    const [FrozenItems, setFrozenItems] = useState<cartListType[]>([])

    useEffect(() => {
        props.data.map(item => {
            if (item.fronzen == 0) {
                setItems(prev => [...prev, item])
            } else {
                setFrozenItems(Fprev => [...Fprev, item])
            }
        })
    }, [])

    console.log('Items', Items)
    console.log('FrozenItems', FrozenItems)

    // const [cartItems, setCartItems] = useRecoilState(cartListState);
    // const [listAllCheck, setListAllCheck] = useState(false);
    // const [listFreezeAllCheck, setListFreezeAllCheck] = useState(false);
    // console.log('cartItems',cartItems)

    // useEffect(() => {
    //     let check = true
    //     let freezeCheck = true
    //     cartItems.cartList.find(item => item.check === false) ? check = false : check = true
    //     cartItems.cartListFreeze.find(item => item.check === false) ? freezeCheck = false : freezeCheck = true
    //     setListAllCheck(check)
    //     setListFreezeAllCheck(freezeCheck)
    // }, [cartItems])

    // const handleCartListAllCheck = (check: boolean) => {
    //     setListAllCheck(!check)
    //     setCartItems({
    //         ...cartItems,
    //         cartList: cartItems.cartList.map((item: cartListType) => {
    //             return { ...item, check: !check }
    //         })
    //     })
    // }

    // const handleFreezeCartListAllCheck = (check: boolean) => {
    //     setListFreezeAllCheck(!check)
    //     setCartItems({
    //         ...cartItems,
    //         cartListFreeze: cartItems.cartListFreeze.map((item: cartListType) => {
    //             return { ...item, check: !check }
    //         })
    //     })
    // }

    return (
        <>
            <section id="cart-list">
                {
                    Items.length > 0 ? (
                        <>
                            <CartListSubject title='일반상품' />
                            {
                                Items.map((item: cartListType) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                            }
                            <CartInfo />
                        </>
                    ) : null}

                {
                    FrozenItems.length > 0 ? (
                        <>
                            <CartListSubject title='냉동상품' />
                            {
                                FrozenItems.map((item: cartListType) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                    />
                                ))
                            }
                            <CartInfo />
                        </>
                    ) : null}


                {/* <div className="select">
                <div className="select-items">
                    <div className={listAllCheck ? 'sbCheckBoxOn' : 'sbCheckBox'} onClick={() => handleCartListAllCheck(listAllCheck)}></div>
                    <p className='cart-select-btn'>일반상품</p>
                </div>
            </div> */}

                {/* {
                cartItems.cartList.length > 0 ? (
                    <div>
                        <div className="cart-product-category">
                            <div className="cart-product-category-detail">
                                <input checked={listAllCheck ? true : false} type="checkbox" id="section-cb" onClick={() => handleCartListAllCheck(listAllCheck)} /><span>일반 상품</span>
                            </div>
                        </div>
                        {
                            cartItems.cartList.map((item: cartListType) => (
                                <CartItem
                                    key={item.cartId}
                                    data={item}
                                />
                            ))
                        }
                    </div>
                ) : null
            } */}

                {/* {
                cartItems.cartListFreeze.length > 0 ? (
                    <>
                        <div className="select">
                        <div className="select-items">
                            <div className={listFreezeAllCheck ? 'sbCheckBoxOn' : 'sbCheckBox'} onClick={() => handleFreezeCartListAllCheck(listFreezeAllCheck)}></div>
                            <p className='cart-select-btn'>냉동상품</p>
                        </div>
                    </div>
                        <div>
                            <div className="cart-product-category">
                                <div className="cart-product-category-detail">
                                    <input checked={listFreezeAllCheck ? true : false} type="checkbox" id="section-cb" onClick={() => handleFreezeCartListAllCheck(listFreezeAllCheck)} /><span>냉동 상품</span>
                                </div>
                            </div>
                            {
                                cartItems.cartListFreeze.map((item: cartListType) => (
                                    <CartItem
                                        key={item.cartId}
                                        data={item}
                                    />
                                ))
                            }
                        </div>
                    </>
                )
                    : null
            } */}
                            
            </section>
        </>
    )
}
