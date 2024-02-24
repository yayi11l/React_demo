
function List(props) {

  const catagory = props.catagory;
  const itemList = props.items;

  const listItems = itemList.map(item => <li key={item.id}>
                                          {item.name}: &nbsp;
                                          <b>{item.calories}</b></li>);

  return(
  <>
    <h3 className="list-catagory">{catagory}</h3>
    <ol className="list-items">{listItems}</ol>
  </>);
}

export default List;