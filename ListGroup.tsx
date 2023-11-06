import { useState } from "react";

function ListGroup() {
  let items = ["Nwe York", "Tokyo", "San Francisco", "Paris", "London"];

  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;

// items = [];
// if (items.length === 0)
//  return (
//   <>
//   <h1>List</h1>
//   <p>No item found</p>;
//   </>
//  );

//const getMessage = () => {
// return items.length === 0 ? <p>No item found</p> : null;
//};
