import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const CHANGE_INPUT_PERSON = 'person/CHANGE_INPUT_PERSON';
const RESET_INPUT_PERSON = 'person/RESET_INPUT_PERSON';
export const changeInputPerson = createAction(
  CHANGE_INPUT_PERSON,
  (name, value) => ({
    name,
    value,
  }),
);

export const resetInputPerson = createAction(RESET_INPUT_PERSON);

//initial State
const initialState = {
  name: '',
  gender: '',
  birth: '',
  email: '',
  personInfoError: null,
};

const person = handleActions(
  {
    [CHANGE_INPUT_PERSON]: (state, { payload }) => {
      console.log(payload);
      return produce(state, (draft) => {
        draft[payload.name] = payload.value;
      });
    },
    [RESET_INPUT_PERSON]: () => ({
      ...initialState,
    }),
  },
  initialState,
);

export default person;
