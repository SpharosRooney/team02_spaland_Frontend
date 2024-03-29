import FooterButton from '@/components/footer/FooterButton'
import ModalHeader from '@/components/header/ModalTopHeader'
import React from 'react'

export default function exchangereturn() {
    return (
        <>
            <ModalHeader subject='교환/반품 안내' />
            <div className='itemModal-notice'>
                <p>온라인 스토어에서 판매된 모든 상품은 모바일 애플리케이션 상으로만 교 환/반품 신청 가능하며, 매장 방문을 통한 교환/반품은 불가합니다.</p>
                <p>교환/반품 신청은 배송완료 후 7일 이내에 신청 가능합니다. 단, 고객님께서 받으신 상품의 내용이 표시광고 및 계약 내용과 다른 경우 상품을 수령하신 날로부터 3개월 이내 또는 그 사실을 안 날(알 수 있었던 날)로부터 30일 이 내 신청이 가능합니다.</p>
                <p>단, 냉동배송 상품의 경우, 단순 변심 교환/반품 신청이 불가합니다. 단, 고 객님께서 받으신 냉동 배송 상품의 내용이 표시광고 및 계약 내용과 다른 경 우, 상품의 상태를 확인할 수 있는 3장 이상의 사진과 함께 스타벅스 고객센 터(1522-3232) 또는 스타벅스 홈페이지/모바일 APP 내 고객의 소리 게시 판에 문의 부탁드립니다.</p>
                <p>교환 또는 반품을 위해 상품 회수 시 스타벅스 코리아에서 지정한 택배사를 통해 회수됩니다. 회수지 변경은 불가하며, 상품을 수령하신 배송지에서만 회수 가능합니다.</p>
                <p>구매자는 복수로 구매한 상품에 대하여 부분 반품을 신청할 수 있습니다. 단, 2가지 이상의 상품을 함께 판매하는 세트상품은 부분 교환 또는 부분 반품이 불가하며 교환, 반품 신청 시 전체 교환/전체 반품으로 처리됩니다.</p>
                <p>구매자는 교환과 반품 신청이 모두 가능하나, 선물 수신자는 교환 신청만 가 능합니다. 또한, 스타벅스 홈페이지 회원으로서 모바일 애플리케이션을 통 해 선물을 수신한 경우 직접 교환신청을 하실 수 있으나, 비회원으로 선물을 수신하신 경우에는 직접 교환신청이 불가합니다.</p>
                <p>상품의 불량/하자/오발송 및 표시광고 및 계약 내용과 다른 경우 해당상품 회수 및 재배송 비용은 무료이나, 고객의 단순 변심 및 색상/사이즈 불만에 관련된 반품의 경우 택배비는 고객 부담입니다. 또한, 구매자의 사유로 인한 부분 반품으로 기존 무료 배송 조건이 충족되지 않을 경우는 최초 배송비가 발생됩니다.</p>
                <p>ㆍ반품 배송비 3,000원</p>
                <p>ㆍ최초 배송비 3,000원</p>
                <p>하기의 경우 청약철회 불가합니다.</p>
                <p>1. 상품 포장을 개봉하여 사용하여 상품의 가치가 훼손된 경우(단, 내용 확인을 위한 포장 개봉의 경우는 예외)</p>
                <p>2. 단순 변심으로 인한 청약철회 신청시기가 상품을 수령한 날로부터 7일이 경과된 경우</p>
                <p>3. 고객님의 사용 또는 일부 소비에 의해 상품의 가치가 훼손된 경우</p>
                <p>4. 시간 경과에 따라 상품 등의 가치가 현저히 감소하여 재판매가 불가능한 경우</p>
                <p>5. 고객님의 요청에 따라 개별적으로 주문 제작되는 상품으로 재판매가 불가능한 경우(이니셜 표시 등)</p>
                <p>6. 구매한 상품의 구성품이 누락된 경우(부착 악세서리, 부속품, 사은품 등)</p>
                <p>7. 기타 전자상거래 등에서의 소비자보호에 관한 법률 시행령 등에서 정하는 청약철회 제한 사유에 해당할 경우</p>
                <p>8. ​기타 상품의 교환, 환불 및 상품 결함 등의 보상은 소비자분쟁해결기준(공정거래위원회 고시)에 의함.</p>
                <p>문의 : 스타벅스 고객센터 (1522-3232)</p>
                <p>- 온라인 스토어 상담 가능시간 : 평일 오전 9시 ~ 오후 6시 (주말, 공휴일 제외)</p>
            </div>
            <FooterButton inputvalue='확인' />
        </>
    )
}
