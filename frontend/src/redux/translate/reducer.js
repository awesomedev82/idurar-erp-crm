import * as actionTypes from './types';
import en_us from '@/lang/en_us';
import storePersist from '../storePersist';

const LANG_INITIAL_STATE = {
  result: en_us,
  langCode: 'en_us',
  isLoading: false,
  isSuccess: false,
};

const INITIAL_STATE = storePersist.get('translate')
  ? storePersist.get('translate')
  : LANG_INITIAL_STATE;

console.log(
  "🚀 ~ file: reducer.js:17 ~ storePersist.get('translate');:",
  storePersist.get('translate')
);
const translateReducer = (state = INITIAL_STATE, action) => {
  const { payload = null, langCode } = action;
  switch (action.type) {
    case actionTypes.RESET_STATE:
      return INITIAL_STATE;
    case actionTypes.REQUEST_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case actionTypes.REQUEST_FAILED:
      return {
        ...state,
        isLoading: false,
        isSuccess: false,
      };

    case actionTypes.REQUEST_SUCCESS:
      return {
        result: { ...state.result, ...payload },
        langCode: langCode.toLowerCase(),
        isLoading: false,
        isSuccess: true,
      };
    default:
      return state;
  }
};

export default translateReducer;
