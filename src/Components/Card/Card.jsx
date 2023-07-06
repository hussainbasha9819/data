import "./Card.css";
const Card = ({ img, title, price }) => {
  return (
    <>
      <div className="Cards">
        <img src={img} alt="" />
        <span>{title}</span>
        <span>{price}</span>
      </div>
    </>
  );
};
export default Card;
