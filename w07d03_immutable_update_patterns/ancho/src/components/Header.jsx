const Header = (props) => {
  console.log("props:", props);

  return (
    <header>
      <h1>{props.title}</h1>
      <p>{props.slogan}</p>
    </header>
  )
};

export default Header;