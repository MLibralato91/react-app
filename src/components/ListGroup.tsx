import { useState } from "react";

function ListGroup() {
  let items = ["New York", "Paris", "Rome", "Milan", "Turin"];

  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <div className="container">
        <h1>List Group</h1>
        {items.length === 0 && <p>No item fount</p>}
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
      </div>
    </>
  );
}

export default ListGroup;
