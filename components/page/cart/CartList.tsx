import CartListSubject from '@/components/ui/CartListSubject';
import { cartListType } from '@/types/cart/cartListType';
import React, { useEffect, useState } from 'react'
import CartItem from './CartItem';
import CartInfo from './CartInfo';
import CartFooter from './CartFooter';

export default function CartList(props: { data: cartListType[], checker: boolean, setChecker: React.Dispatch<React.SetStateAction<boolean>> }) {

    const [Items, setItems] = useState<cartListType[]>([])
    const [FrozenItems, setFrozenItems] = useState<cartListType[]>([])

    const [itemAllPrice, setAllPrice] = useState<number>(0)
    const [itemAllCount, setAllCount] = useState<number>(0)

    const [frozenAllPrice, setAllfrozenPrice] = useState<number>(0)
    const [frozenAllCount, setAllfrozenCount] = useState<number>(0)

    useEffect(() => {
        let myItems: cartListType[] = []
        let myFrozenItems: cartListType[] = []
        props.data.map(item => {
            if (item.frozen === 0) {
                myItems.push(item)
            } else {
                myFrozenItems.push(item)
            }
        })
        setItems(myItems)
        setFrozenItems(myFrozenItems)
    }, [props.data])

    useEffect(() => {
        let price = 0
        let amount = 0
        Items.map(item => {
            price += item.price * item.productAmount
        })
        amount = Items.length
        setAllPrice(price)
        setAllCount(amount)
    }, [Items])

    useEffect(() => {
        let price = 0
        let amount = 0
        FrozenItems.map(item => {
            price += item.price * item.productAmount
        })
        amount = FrozenItems.length
        setAllfrozenPrice(price)
        setAllfrozenCount(amount)
    }, [FrozenItems])

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
                                        checker={props.checker}
                                        setChecker={props.setChecker}
                                    />
                                ))
                            }
                            <CartInfo price={itemAllPrice} count={itemAllCount} />
                        </>
                    ) : null
                }

                {
                    FrozenItems.length > 0 ? (
                        <>
                            <CartListSubject title='냉동상품' />
                            {
                                FrozenItems.map((item: cartListType) => (
                                    <CartItem
                                        key={item.id}
                                        data={item}
                                        checker={props.checker}
                                        setChecker={props.setChecker}
                                    />
                                ))
                            }
                            <CartInfo price={frozenAllPrice} count={frozenAllCount} />
                        </>
                    ) : null
                }

            <CartFooter itemprice={itemAllPrice} frozenprice={frozenAllPrice} itemcount={props.data.length}/>

            </section>
        </>
    )
}
