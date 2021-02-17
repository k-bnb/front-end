import { call, put, delay } from 'redux-saga/effects';
import { startLoading, finishLoading } from '../modules/loading';
import BootPay from 'bootpay-js';

//  request : 백엔드 api
export default function bootPayRequestSaga(type, request) {
  const SUCCESS = `${type}_SUCCESS`;
  const FAILURE = `${type}_FAILURE`;

  return function* (action) {
    yield put(startLoading(type)); // 로딩 시작, type: 요청 작업 종류
    try {
      const data = yield call(
        BootPay.request({
          price: '1000', //실제 결제되는 가격
          application_id: '6024e5ee5b2948001d52037b',
          name: '블링블링 마스카라', //결제창에서 보여질 이름
          pg: 'nicepay',
          method: 'card', //결제수단, 입력하지 않으면 결제수단 선택부터 화면이 시작합니다.
          show_agree_window: 0, // 부트페이 정보 동의 창 보이기 여부
          items: [],
          user_info: {
            username: '사용자 이름',
            email: '사용자 이메일',
            addr: '사용자 주소',
            phone: '010-1234-4567',
          },
          order_id: '고유order_id_1234', //고유 주문번호로, 생성하신 값을 보내주셔야 합니다.
          params: {},
          account_expire_at: '', // 가상계좌 입금기간 제한 ( yyyy-mm-dd 포멧으로 입력해주세요. 가상계좌만 적용됩니다. )
          extra: {
            start_at: '2019-05-10', // 정기 결제 시작일 - 시작일을 지정하지 않으면 그 날 당일로부터 결제가 가능한 Billing key 지급
            end_at: '2022-05-10', // 정기결제 만료일 -  기간 없음 - 무제한
            vbank_result: 0, // 가상계좌 사용시 사용, 가상계좌 결과창을 볼지(1), 말지(0), 미설정시 봄(1)
            quota: '0', // 결제금액이 5만원 이상시 할부개월 허용범위를 설정할 수 있음, [0(일시불), 2개월, 3개월] 허용, 미설정시 12개월까지 허용,
            theme: 'purple', // [ red, purple(기본), custom ]
            custom_background: '#00a086', // [ theme가 custom 일 때 background 색상 지정 가능 ]
            custom_font_color: '#ffffff', // [ theme가 custom 일 때 font color 색상 지정 가능 ]
          },
        }),
      ).done((data) => {
        console.log(data);
      });

      console.log(data);
      // .error((data) => {
      //   console.log(data);
      // })

      // const response = yield call(request, action.payload);
      // console.log(response);
      // yield put({
      //   type: SUCCESS,
      //   payload: response.data,
      // });
    } catch (error) {
      // yield put({
      //   type: FAILURE,
      //   payload: error,
      // });
    }
    yield delay(1000);
    yield put(finishLoading(type)); // 로딩 종료, type: 요청 작업 종류
  };
}
