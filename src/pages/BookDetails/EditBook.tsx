import React from "react";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();

  return <div>This is the edit book page. {id}</div>;
};

export default EditBook;
