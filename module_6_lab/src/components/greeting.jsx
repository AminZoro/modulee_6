function Greeting(props) {
  let name;
  props.name ? (name = props.name) : (name = "World");

  return (
    <>
      <p>Exercise 1</p>
      <div className="Greeting componentBox">
        <p>Hello {name}</p>
        {props.children}
      </div>
    </>
  );
}

export default Greeting;
