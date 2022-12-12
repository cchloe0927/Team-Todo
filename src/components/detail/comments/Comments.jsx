import React, { useEffect, useState } from "react";
import axios from "axios";
//style
import classes from "./Comments.module.css";
//components
import AddComments from "./AddComments";
import Card from "../../elements/Card";
import Button from "../../elements/Button";

const Comments = () => {
  //state로 관리 -> 리덕스로 전역 상태 관리할 예정
  //해당 todo와 todo안에 있는 comments 데이터 추출 -> 하나는 AddComments에 넘겨줄 용도
  const [commentsData, setCommentsData] = useState([]);

  //axios를 통해서 get 요청하는 함수 생성
  const fetchComments = async () => {
    const { data } = await axios.get("http://localhost:3001/todos/1/comments");
    setCommentsData(data);
  };
  //fetchComments를 mount 됐을 때 실행하기 위해 useEffect 사용
  useEffect(() => {
    fetchComments();
  }, []);
  //console.log("commentsData :", commentsData);

  return (
    <div>
      <AddComments commentsData={commentsData} />
      {commentsData.map((comment) => {
        return (
          <Card className={classes.comment_wrap} key={comment.id}>
            <form className={classes.comment_box}>
              <div className={classes.comment_header}>
                <label>
                  👤 {comment.username} 님의 코멘트
                  <span className={classes.date}>{comment.createDate}</span>
                </label>
                <div className={classes.btn}>
                  <Button>수정</Button>
                  <Button>삭제</Button>
                </div>
              </div>
              <textarea
                name="comment"
                type="text"
                value={comment.comment}
                className={classes.comment}
                disabled
              />
            </form>
          </Card>
        );
      })}
    </div>
  );
};

export default Comments;
