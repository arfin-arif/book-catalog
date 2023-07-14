import React, { useState } from "react";
import { useParams, useHistory } from "react-router-dom";

interface Book {
  //   id: string;
  title: string;
  author: string;
  genre: string;
  publicationDate: string;
  reviews: string[];
}

const BookDetailsPage: React.FC = () => {
  const history = useHistory();
  const { bookId } = useParams<{ bookId: string }>();

  // Simulated book data
  const [book] = useState<Book>({
    // id: bookId,
    title: "Book Title",
    author: "Author Name",
    genre: "Fiction",
    publicationDate: "2022-01-01",
    reviews: ["Review 1", "Review 2"],
  });

  const handleEdit = (): void => {
    history.push(`/edit-book/${book.id}`);
  };

  const handleDelete = (): void => {
    if (window.confirm("Are you sure you want to delete this book?")) {
      // Perform delete logic
      console.log("Book deleted:", book.id);
      // Redirect to book list or home page
      history.push("/books");
    }
  };

  const handleReviewSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    // Implement review submission logic
    console.log("Review submitted");
  };

  return (
    <div>
      <h2>Title: {book.title}</h2>
      <p>Author: {book.author}</p>
      <p>Genre: {book.genre}</p>
      <p>Publication Date: {book.publicationDate}</p>
      <h3>Reviews:</h3>
      {book.reviews.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
      <form onSubmit={handleReviewSubmit}>
        <textarea placeholder="Write your review" />
        <button type="submit">Submit Review</button>
      </form>
      <div>
        <button onClick={handleEdit}>Edit Book</button>
        <button onClick={handleDelete}>Delete Book</button>
      </div>
    </div>
  );
};

export default BookDetailsPage;
