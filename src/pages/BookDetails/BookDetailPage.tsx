import React, { useState, ChangeEvent } from "react";
import { Link, useParams } from "react-router-dom";
import {
  usePostReviewsMutation,
  useSingleBooksQuery,
} from "../../redux/features/books/bookApi";

interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}

const BookDetailsPage: React.FC = () => {
  const { id } = useParams();
  const { data } = useSingleBooksQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const book = data?.data;

  const handleDelete = (): void => {
    // if (window.confirm("Are you sure you want to delete this book?")) {
    // }
  };

  const [postReviews, { isLoading }] = usePostReviewsMutation();
  const [inputValue, setInputValue] = useState<string>("");

  const handleReviewSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    postReviews(options);
    setInputValue("");
  };
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };
  console.log(inputValue);
  return (
    <div className="mx-auto max-w-[400px]">
      <h2>Title: {book?.title}</h2>
      <p>Author: {book?.author}</p>
      <p>Genre: {book?.genre}</p>
      <p>Publication Date: {book?.publicationDate}</p>

      <form onSubmit={handleReviewSubmit}>
        <input
          onChange={handleChange}
          value={inputValue}
          className=""
          placeholder="Write your review"
        />
        <button type="submit">Submit Review</button>
      </form>

      <h3>Reviews:</h3>
      {book?.reviews?.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
      <div>
        <Link to={`/edit-book/${id}`}>
          {" "}
          <button>Edit Book</button>
        </Link>
        <button onClick={handleDelete}>Delete Book</button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
