import {
  POST_USERS_SUCCESS, POST_USERS_ERROR,
  CLEAR_POST,
  GET_PAGE_SUCCESS, GET_PAGE_ERROR,
} from '../constants';

const initialState = {
  post: {
    users: [],
    error: '',
  },
  page: {
    current: 0,
    result: [],
    total: 0,
  },
};

function users(state = initialState, action) {
  switch (action.type) {

    case POST_USERS_SUCCESS: {
      return {
        ...state,
        post: {
          users: action.body,
          error: '',
        },
      };
    }

    case POST_USERS_ERROR: {
      return {
        ...state,
        post: {
          users: [],
          error: action.error,
        },
      };
    }

    case CLEAR_POST: {
      return {
        ...state,
        post: {
          users: [],
          error: '',
        },
      };
    }

    case GET_PAGE_SUCCESS: {
      return {
        ...state,
        page: {
          current: action.body.current,
          result: action.body.result,
          total: action.body.totalPageCount,
        },
      };
    }

    default: return state;
  }
}

export default users;
