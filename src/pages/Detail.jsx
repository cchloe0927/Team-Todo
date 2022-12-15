//components
import Layout from "../components/Layout";
import Todo from "../components/todo/Todo";
import Comments from "../components/detail/comments/Comments";

//test 용도 -> 추후 삭제 예정
import CommentsTest from "../components/detail/comments/Comments";
import CommentsTest2 from "../components/detail/comments/Comments";

const Detail = () => {
  return (
    <Layout>
      <Todo />
      <Comments />
    </Layout>
  );
};

export default Detail;
