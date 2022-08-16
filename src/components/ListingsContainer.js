import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {

  // const [listItem, setListItem] = useState([]);
  // const [search, setSearch] = useState('');

  // useEffect(() => {
  //   fetch('http://localhost:6001/listings')
  //   .then((r) => r.json())
  //   .then((data) => setListItem(data))
  // }, []);

  // function onDelete(item) {
  //   const newList = listItem.filter((listItem) => listItem.id !== item.id )
  //   setListItem(newList)
  // }

  // const displayList = listItem.filter((item) =>
  //  item.description.toLowerCase().includes(search.toLocaleLowerCase())
  // );

  return (
    <main>
      <ul className="cards">
        {listings.map((item) => <ListingCard key={item.id} item={item} onDelete={onDelete}/>)}
        {/* use the ListingCard component to display listings */}
      </ul>
    </main>
  );
}

export default ListingsContainer;
