import React, { useState } from "react";

function ListingCard({ item, onDelete }) {

  const [like, setLike] = useState(false)

  function handleClick() {
    setLike(!like);
  }

  function handleDelete() {
    fetch(`http://localhost:6001/listings/${item.id}`, {
      method: 'DELETE'
    })
    .then((r) => r.json())
    .then(() => onDelete(item))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={item.image} alt={item.description} />
      </div>
      <div className="details">
        {like ? (
          <button className="emoji-button favorite active" onClick={handleClick}>★</button>
        ) : (
          <button className="emoji-button favorite" onClick={handleClick}>☆</button>
        )}
        <strong>{item.description}</strong>
        <span> · {item.location}</span>
        <button className="emoji-button delete" onClick={handleDelete}>🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
