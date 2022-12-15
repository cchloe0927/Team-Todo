// src/redux/modules/commentsReducer.js

// Action Value
const POST_COMMENT = "POST_COMMENT";
const GET_COMMENTS = "GET_COMMENTS";
const DELETE_COMMENT = "DELETE_COMMENT";
const PATCH_COMMENT = "PATCH_COMMENT";
const EDIT_COMMENT_DISABLED = "EDIT_COMMENT_DISABLED";
const EDIT_COMMENT_VALUE = "EDIT_COMMENT_VALUE";

// Action Creator
//수정 / 완료 Boolean 상태
export const editCheckDisabled = (commentIndex) => {
  return { type: "EDIT_COMMENT_DISABLED", payload: commentIndex };
};
//수정 시, 변경 코멘트
export const editCommentValue = (event, commentIndex) => {
  return { type: "EDIT_COMMENT_VALUE", payload: event, commentIndex };
};

// Initial State
const initialState = {
  comments: [],
};

// Reducer 기본형태
const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_COMMENT:
      return { comments: [...state.comments, action.payload] };
    case GET_COMMENTS:
      return { ...state, comments: action.payload.data };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments.filter(
          (comment) => comment.id !== action.payload
        ),
      };
    case PATCH_COMMENT:
      return { ...state };
    case EDIT_COMMENT_DISABLED:
      const newArr = [...state.comments];
      newArr[action.payload].editCheck = !newArr[action.payload].editCheck;
      return {
        ...state,
        comments: newArr,
      };
    case EDIT_COMMENT_VALUE:
      console.log(state.comments);
      console.log(action.payload);
      return { ...state };
    default:
      return { ...state };
  }
};

// export default reducer
export default commentsReducer;
