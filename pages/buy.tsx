export interface RequestPayAdditionalParams {
    digital?: boolean;
    vbank_due?: string;
    m_redirect_url?: string;
    app_scheme?: string;
    biz_num?: string;
}

export interface Display {
    card_quota?: number[];
}

export interface RequestPayParams extends RequestPayAdditionalParams {
    pg?: string;
    pay_method: string;
    escrow?: boolean;
    merchant_uid: string;
    name?: string;
    amount: number;
    custom_data?: any;
    tax_free?: number;
    currency?: string;
    language?: string;
    buyer_name?: string;
    buyer_tel: string;
    buyer_email?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    notice_url?: string | string[];
    display?: Display;
}

export interface RequestPayAdditionalResponse {
    apply_num?: string;
    vbank_num?: string;
    vbank_name?: string;
    vbank_holder?: string | null;
    vbank_date?: number;
}

export interface RequestPayResponse extends RequestPayAdditionalResponse {
    success: boolean;
    error_code: string;
    error_msg: string;
    imp_uid: string | null;
    merchant_uid: string;
    pay_method?: string;
    paid_amount?: number;
    status?: string;
    name?: string;
    pg_provider?: string;
    pg_tid?: string;
    buyer_name?: string;
    buyer_email?: string;
    buyer_tel?: string;
    buyer_addr?: string;
    buyer_postcode?: string;
    custom_data?: any;
    paid_at?: number;
    receipt_url?: string;
}

export type RequestPayResponseCallback = (response: RequestPayResponse) => void;

export interface Iamport {
    init: (accountID: string) => void;
    request_pay: (
        params: RequestPayParams,
        callback?: RequestPayResponseCallback
    ) => void;
}

declare global {
    interface Window {
        IMP?: Iamport;
    }
}

export default function test() {
    const onClickPayment = () => {
        
        if (!window.IMP) return;
        
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init('imp56698025'); // 가맹점 식별코드

        /* 2. 결제 데이터 정의하기 */
        const data: RequestPayParams = {
            pg: "html5_inicis.{INIpayTest}", // PG사 : https://portone.gitbook.io/docs/sdk/javascript-sdk/payrq#undefined-1 참고"
            pay_method: "card", // 결제수단
            merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
            amount: 100, // 결제금액
            name: "천만원", // 주문명
            buyer_name: "노홍기", // 구매자 이름
            buyer_tel: "01077416096", // 구매자 전화번호
            buyer_email: "example@example", // 구매자 이메일
            buyer_addr: "신사동 661-16", // 구매자 주소
            buyer_postcode: "06018", // 구매자 우편번호
        };

        /* 3. 콜백 함수 정의하기 */
        function callback(response: RequestPayResponse) {
            const { success, error_msg } = response;
            if (success) {
                alert("결제 성공");
                console.log(data.name);
                console.log("이 부분으로 데이터를 API로 전송할 예정입니다.");
                /*
                <history에 필수.>
                상품 ID => 클릭시 넘어가도록
                상품 이름
                주문 유형 : 내돈 내산 or 선물
                (선물일 경우) : 편지 내용
                주문 날짜
                (취소한 경우) 취소 날짜
                주문 상태
                결제 종류
                상품 금액
                개수
                주문 번호
                */
            } else {
                console.log(10000000);
                alert(`결제 실패: ${error_msg}`);
            }
        }

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    };

    return (
        <>
            <script src="https://cdn.iamport.kr/v1/iamport.js"></script>
            <div style={{ marginTop: "200px" }}></div>
            <button onClick={onClickPayment}>결제하기</button>
        </>
    );
}