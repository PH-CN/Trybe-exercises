function FirstComponent (name, age) {
  const elementName = <h1>{name}</h1>;
  const elementDesc = <p>Tenho {age} anos.</p>;
  return <div>{elementName} {elementDesc}</div>
}

export default FirstComponent;