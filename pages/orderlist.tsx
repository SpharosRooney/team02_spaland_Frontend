import ModalBotHeader from '@/components/header/ModalBotHeader'
import Accordion from '@/components/widgets/Accordion'
import React from 'react'




export default function orderlist() {

    return (
        <>
            <ModalBotHeader subject='주문 내역' />
            <Accordion title="전체" content='hello' />
        </>
    )
}
