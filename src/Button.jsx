
function Button() {
  const handleClick = (e) => console.log(e);

  return (<button onDoubleClick={(e) => handleClick(e)}>Click me</button>)

}