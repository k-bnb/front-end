import { createAction, handleActions } from 'redux-actions';

// Action Type
const SEARCH_TO_DETAIL = 'detail/SEARCH_TO_DETAIL';

// Action Creator
export const searchToDetail = createAction(
  SEARCH_TO_DETAIL,
  ({ roomId, startDate, endDate, numOfAdult, numOfKid, numOfInfant }) => ({
    roomId,
    startDate,
    endDate,
    numOfAdult,
    numOfKid,
    numOfInfant,
  }),
);

// initial state
const initialStates = {
  roomId: '',
  startDate: '',
  endDate: '',
  numOfAdult: '',
  numOfKid: '',
  numOfInfant: '',
};

// reducer
const detail = handleActions(
  { [SEARCH_TO_DETAIL]: (state, { payload }) => ({ ...state, ...payload }) },
  initialStates,
);

export default detail;
