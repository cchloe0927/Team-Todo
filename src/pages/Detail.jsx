import Todo from "../components/todo/Todo";
import Comments from "../components/detail/comments/Comments";

//test 용도 -> 추후 삭제 예정
import CommentsTest from "../components/detail/comments/Comments";
import CommentsStateTest from "../components/detail/comments/CommentsStateTest";

const Detail = () => {
  return (
    <>
      <Todo />
      <Comments />
    </>
  );
};

export default Detail;
