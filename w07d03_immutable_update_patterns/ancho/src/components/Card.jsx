const Card = (props) => {

  return (
    <div>
      {props.children}
      <h2>{props.title}</h2>
    </div>
  )
};

export default Card;