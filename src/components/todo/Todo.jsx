import React, { useState, useEffect } from "react";
import classes from "./Todo.module.css";
import axios from "axios";
import Button from "../elements/Button";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const Todo = () => {
  const navigate = useNavigate();
  const { paramsId } = useParams();
  const [todos, setTodos] = useState([]);
  const [targetId, setTargetId] = useState([]);
  const [editTodo, setEditTodo] = useState({
    content: "",
  });

  const fetchTodos = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_DB_URL}/todos/${paramsId}`
    );
    setTodos(data);
  };

  const onClickDelteButtonhandler = (todoId) => {
    axios.delete(`${process.env.REACT_APP_DB_URL}/todos/${todoId}`);
    setTodos([...todos, todos]);
  };

  const onClickEditButtonHandler = (todoId, edit) => {
    axios.patch(`${process.env.REACT_APP_DB_URL}/todos/${todoId}`, edit);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  // const onClickEditButtonHandler = (todosContent, edit) => {
  //   const newArr = [...todosData]
  //   const index = newArr.findIndex((el) => el.content === todosContent)
  //   newArr[index].edit = !edit
  //   setTodosData(newArr)
  //   if (newArr[index].edit === )
  //   axios.patch(`http://localhost:3001/todos/${todoContent}`, edit)
  // };
  // console.log(todos.content);

  const setContentsData = () => {};

  return (
    <div className={classes.card}>
      <div className={classes.wrap}>
        <div className={classes.h1}>
          <h1>상세보기</h1>
          <Button
            onClick={() => {
              navigate("/");
            }}
            className={classes.btn1}
          >
            이전으로
          </Button>
        </div>
        <div className={classes.maintitle}>
          <div className={classes.title}>{todos.title}</div>
        </div>
        <div className={classes.content}>
          {}
          <textarea
            className={classes.remove}
            type="text"
            value={todos.content}
            placeholder="수정값 입력"
            onChange={(ev) => {
              setEditTodo({
                ...editTodo,
                title: ev.target.value,
              });
            }}
          />
        </div>

        <div className={classes.when}>
          <div className={classes.btn}>
            <Button
              type="button"
              onClick={() => onClickDelteButtonhandler(todos.id)}
              className={classes.btn2}
            >
              삭제
            </Button>

            <Button
              // onClick={() =>
              //   onClickEditButtonHandler(targetId, content.editTodo)
              // }
              className={classes.btn3}
            >
              완료
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
