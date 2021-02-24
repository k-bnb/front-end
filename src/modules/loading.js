import { createAction, handleActions } from 'redux-actions';

const START_LOADING = 'loading/START_LOADING';
const PENDING_LOADING = 'loading/PENDING_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const startLoading = createAction(
  START_LOADING,
  (requestType) => requestType,
);
export const pendingLoading = createAction(
  PENDING_LOADING,
  (requestType) => requestType,
);
export const finishLoading = createAction(
  FINISH_LOADING,
  (requestType) => requestType,
);

const initialState = {};
// reducer

const loading = handleActions(
  {
    [START_LOADING]: (state, { payload }) => ({
      ...state,
      [payload]: true, // 내가 보낸 요청이 로딩시작
    }),
    [PENDING_LOADING]: (state, { payload }) => ({
      ...state,
      [payload]: true, // 내가 보낸 요청이 로딩시작
    }),
    [FINISH_LOADING]: (state, { payload }) => ({
      ...state,
      [payload]: false, // 로딩 종료
    }),
  },
  initialState,
);

export default loading;
