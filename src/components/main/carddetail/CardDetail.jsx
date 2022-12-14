import classes from "./CardDetail.module.css";
import CustomButton from "../custombutton/CustomButton";

const CardDetail = ({
  icon,
  title,
  onClickDetail,
  onClickProgress,
  className,
}) => {
  const btnclassName = {
    detail: "detailbtn",
    arrow: "arrowbtn",
  };

  return (
    <div className={classes[className]}>
      <CustomButton
        className={btnclassName.detail}
        value="상세보기"
        onClick={onClickDetail}
      />
      <h2>{title}</h2>
      <CustomButton
        className={btnclassName.arrow}
        value={icon}
        onClick={onClickProgress}
      />
    </div>
  );
};

export default CardDetail;
