import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
//components
import Card from "../../elements/Card";
import Button from "../../elements/Button";
import AddComments from "./AddComments";
//redux
import {
  editCheckDisabled,
  editCommentValue,
} from "../../../redux/modules/commentsReducer";
import { commentsAction } from "../../../redux/actions/commentsAction";
import { useDispatch, useSelector } from "react-redux";

const Comments = () => {
  const dispatch = useDispatch();
  const { paramsId } = useParams();

  //전체 comments 데이터 추출
  const { comments } = useSelector((state) => state.comments);
  console.log("comments :", comments);

  //commnet State
  const [editcommentValue, setEditCommentValue] = useState();
  console.log();

  //해당 댓글 등록하기 -> get 요청하는 함수 생성
  const GetComments = () => {
    dispatch(commentsAction.getComments(paramsId));
  };
  //fetchComments를 mount됐을 때 실행하기 위해
  useEffect(() => {
    GetComments();
  }, []);

  //해당 댓글 삭제하기
  const onClickDeleteButtonHandler = (commentId) => {
    dispatch(commentsAction.deleteComment(commentId));
  };

  //버튼 클릭 시, editCheck Boolean
  const onClickEditButtonHandler = (commentIndex) => {
    dispatch(editCheckDisabled(commentIndex));
  };

  //해당 댓글 수정하기
  //textarea value state
  const onChangeTextareaCommentHandler = (event, commentIndex) => {
    dispatch(editCommentValue(event, commentIndex));
  };

  return (
    <div>
      <AddComments />
      {comments.map((comment, index) => {
        return (
          <Card className={classes.comment_wrap} key={comment.id}>
            <form
              className={classes.comment_box}
              onSubmit={(e) => e.preventDefault()}
            >
              <div className={classes.comment_header}>
                <label>
                  👤 {comment.username} 님의 코멘트
                  <span className={classes.date}>{comment.createDate}</span>
                </label>
                <div className={classes.btn}>
                  <Button onClick={() => onClickEditButtonHandler(index)}>
                    {comment.editCheck ? "완료" : "수정"}
                  </Button>
                  <Button
                    onClick={() => onClickDeleteButtonHandler(comment.id)}
                  >
                    삭제
                  </Button>
                </div>
              </div>
              <textarea
                className={classes.comment}
                name="comment"
                type="text"
                value={comment.comment}
                disabled={!comment.editCheck}
                onChange={(event) =>
                  onChangeTextareaCommentHandler(event, index)
                }
              />
            </form>
          </Card>
        );
      })}
    </div>
  );
};

export default Comments;
