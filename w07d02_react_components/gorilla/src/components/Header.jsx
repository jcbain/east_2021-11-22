const Header = (props) => {
  console.log("props", props)
  const text = "Gorilla Sara's Glamorous Gargoyle Gymnasium";

  return (
    <header>{props.message}</header>
  )
};

export default Header;