import "./Card.css";

const Card = (props) => {
    const {image,title,desc} = props;

  return (
    <div className="card-container">
        <img src={image} alt="image" />

        <div className="card-title">
            <h2>{title}</h2>
            <p>{desc}</p>
        </div>
    </div>
  )
}

export default Card