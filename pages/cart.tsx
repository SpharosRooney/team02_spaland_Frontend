import { useEffect, useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import CartHeader from '@/components/page/cart/CartHeader'
import CartFooter from '@/components/page/cart/CartFooter'
import CartInfo from '@/components/page/cart/CartInfo'
import CartMenu from '@/components/page/cart/CartMenu'
import { cartListState } from '@/state/cartListState'
import { cartType, cartListType } from '@/types/cart/cartListType'
import axios from 'axios'
import CartList from '@/components/page/cart/CartList'
import { userLoginState } from '@/state/user/atom/userLoginState'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'



export default function Cart() {

    const router = useRouter();
    const { isLogin } = useRecoilValue(userLoginState)

    const [cartList, setCartList] = useState();

    if( !isLogin) {
        Swal.fire({
            icon: 'error',
            text: '로그인이 필요한 서비스 입니다.',
            customClass: {
                confirmButton: 'swal-confirm-button'
            }
        }).then(
            res=> res.isConfirmed && router.push('/login')
        )
            
        return null;
    }
    
    return (
        <>
            {/* <section className="empty-cart">
            <img src="https://cdn-icons-png.flaticon.com/512/2838/2838895.png" />
            <p>장바구니가 비어있습니다.</p>
            </section>  */}

            <CartHeader />
            <CartMenu />
            <CartList />
            <CartInfo />
            <CartFooter />
            
        </>
    )
}
