import React from "react";
import "../styles/BookItem.css";
import ReadDate from "./ReadDate";

const BookItem = (props) => {
  return (
    <div className="book">
      <h2>{props.title}</h2>
      <p>{props.company}</p>
      <ReadDate date={props.release} />
      <p>{props.hours}</p>
    </div>
  );
};

export default BookItem;
