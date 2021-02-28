import produce from '../util/produce';
const initialState = {
  signInLoading: false,
  signInError: null,
  signInDone: false,
  signUpLoading: false,
  signUpError: null,
  signUpDone: false,
  me: null,
};

export const SIGN_IN_REQUEST = 'SIGN_IN_REQUEST';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';
export const SIGN_IN_FAILURE = 'SIGN_IN_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const SIGN_OUT_REQUEST = 'SIGN_OUT_REQUEST';
export const SIGN_OUT_SUCCESS = 'SIGN_OUT_SUCCESS';
export const SIGN_OUT_FAILURE = 'SIGN_OUT_FAILURE';

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SIGN_IN_REQUEST:
        draft.signInLoading = true;
        draft.signInError = null;
        draft.signInDone = false;
        return;
      case SIGN_IN_SUCCESS:
        draft.signInLoading = false;
        draft.me = action.data;
        draft.signInDone = true;
        return;
      case SIGN_IN_FAILURE:
        draft.signInLoading = false;
        draft.signInError = action.error;
        return;
      case SIGN_UP_REQUEST:
        draft.signUpLoading = true;
        draft.signUpError = null;
        draft.signUpDone = false;
        return;
      case SIGN_UP_SUCCESS:
        draft.signUpLoading = false;
        draft.signUpDone = true;
        return;
      case SIGN_UP_FAILURE:
        draft.signUpLoading = false;
        draft.signUpError = action.error;
        return;
      case SIGN_OUT_REQUEST:
        draft.signOutLoading = true;
        draft.signOutError = null;
        draft.signOutDone = false;
        return;
      case SIGN_OUT_SUCCESS:
        draft.signOutLoading = false;
        draft.signOutDone = true;
        draft.me = null;
        return;
      case SIGN_OUT_FAILURE:
        draft.signOutLoading = false;
        draft.signOutError = action.error;
        return;
      default:
        break;
    }
  });

export default reducer;
