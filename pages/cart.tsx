import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import CartHeader from '@/components/page/cart/CartHeader'
import CartFooter from '@/components/page/cart/CartFooter'
import CartInfo from '@/components/page/cart/CartInfo'
import CartMenu from '@/components/page/cart/CartMenu'
import { cartListType } from '@/types/cart/cartListType'
import axios from 'axios'
import CartList from '@/components/page/cart/CartList'
import { userLoginState } from '@/state/user/atom/userLoginState'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import Config from '@/configs/config.export'

export default function Cart() {

    const router = useRouter();
    const { baseUrl } = Config();
    const { isLogin, accessToken } = useRecoilValue(userLoginState)

    const [cartList, setCartList] = useState<cartListType[]>();

    if (!isLogin) {
        Swal.fire({
            icon: 'error',
            text: '로그인이 필요한 서비스 입니다.',
            customClass: {
                confirmButton: 'swal-confirm-button'
            }
        }).then(
            res => res.isConfirmed && router.push('/login')
        )
        return;
    }

    useEffect(() => {
        axios.get(`${baseUrl}/api/v1/cart?isDelete=false`, {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        }).then(res => {
            console.log(res)
            setCartList(res.data.data)
        })
    }, [])

    console.log('cartlist', cartList)

    return (
        <>
            {/* <section className="empty-cart">
            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" />
            <p>장바구니가 비어있습니다.</p>
            </section>  */}

            <CartHeader />
            <CartMenu />
            {cartList ? (
                <>
                    <CartList data={cartList} />
                    <CartFooter data={cartList} />
                </>
            ) :
                <section className="empty-cart">
                    <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" />
                    <p>장바구니가 비어있습니다.</p>
                </section>}
        </>
    )
}
