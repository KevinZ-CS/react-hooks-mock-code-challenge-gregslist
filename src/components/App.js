import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listItem, setListItem] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('http://localhost:6001/listings')
    .then((r) => r.json())
    .then((data) => setListItem(data))
  }, []);

  function onDelete(item) {
    const newList = listItem.filter((listItem) => listItem.id !== item.id )
    setListItem(newList)
  }

  const displayList = listItem.filter((item) =>
   item.description.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingsContainer listings={displayList} onDelete={onDelete} />
    </div>
  );
}

export default App;
