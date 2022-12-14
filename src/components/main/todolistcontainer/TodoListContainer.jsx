import classes from "./TodoListContainer.module.css";
import CustomButton from "../custombutton/CustomButton";
import { useNavigate } from "react-router-dom";
import TodoCardList from "../todocardlist/TodoCardList";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getTodos } from "../../../redux/modules/todosSlice";

const TodoListContainer = () => {
  const classname = "addbtn";
  const navigate = useNavigate();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(__getTodos());
  }, []);

  return (
    <div className={classes.layout}>
      <div className={classes.header}>
        <span>TodoList</span>
      </div>
      <div className={classes.btnbox}>
        <CustomButton
          className={classname}
          value=" Todo 등록!"
          onClick={() => navigate("/add")}
        />
        <div></div>
      </div>
      <div className={classes.box}>
        <TodoCardList progressName="plan" />
        <TodoCardList progressName="working" />
        <TodoCardList progressName="done" />
      </div>
      <div className={classes.footer}>
        <span>copyright @항해99</span>
      </div>
    </div>
  );
};

export default TodoListContainer;
