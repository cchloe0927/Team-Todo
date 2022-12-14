import axios from "axios";

const postComment = (paramsId, newComment) => {
  return async (dispatch, getState) => {
    console.log(getState);
    await axios.post(
      `https://wild-insidious-parsnip.glitch.me/comments`,
      newComment
    );
    dispatch({ type: "POST_COMMENT", payload: newComment });
  };
};

const getComments = (paramsId) => {
  return async (dispatch, getState) => {
    const { data } = await axios.get(
      `https://wild-insidious-parsnip.glitch.me/comments?todoId=${paramsId}`
    );
    //console.log("getDate :", data);
    dispatch({ type: "GET_COMMENTS", payload: { data } });
  };
};

const deleteComment = (commentId) => {
  return async (dispatch, getState) => {
    console.log(getState);
    await axios.delete(
      `https://wild-insidious-parsnip.glitch.me/comments/${commentId}`
    );
    //console.log("deleteDate :", data);
    dispatch({ type: "DELETE_COMMENT", payload: commentId });
  };
};

export const commentsAction = { postComment, getComments, deleteComment };
