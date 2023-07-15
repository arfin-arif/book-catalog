import React, { useState, ChangeEvent, FormEvent } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

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
  const { id } = useParams<{ id: string }>();
  const { data } = useSingleBooksQuery(id, {
    refetchOnMountOrArgChange: true,
  });
  const book: Book | undefined = data?.data;

  const handleDelete = (): void => {
    // if (window.confirm("Are you sure you want to delete this book?")) {
    // }
  };

  const [postReviews, { isLoading }] = usePostReviewsMutation();
  const [inputValue, setInputValue] = useState<string>("");

  const handleReviewSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    const options = {
      id: id,
      data: { reviews: inputValue },
    };
    postReviews(options)
      .unwrap()
      .then(() => {
        toast.success("Review Added");
        setInputValue("");
      })
      .catch((error) => {
        toast.error("Failed to add review");
        console.error(error);
      });

    setInputValue("");
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="mx-auto max-w-[400px]">
      <h2 className="text-xl font-bold">Title: {book?.title}</h2>
      <p>Author: {book?.author}</p>
      <p>Genre: {book?.genre}</p>
      <p>Publication Date: {book?.publicationDate}</p>

      <div className="mt-4">
        <Link to={`/edit-book/${id}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
            Edit Book
          </button>
        </Link>
        <button
          onClick={handleDelete}
          className="bg-red-500 text-white px-4 py-2 rounded-md"
        >
          Delete Book
        </button>
      </div>

      <form onSubmit={handleReviewSubmit} className="my-4">
        <input
          type="text"
          onChange={handleChange}
          value={inputValue}
          className="border border-gray-300 rounded-md p-2 w-full"
          placeholder="Write your review"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
        >
          Submit Review
        </button>
      </form>

      <h3 className="font-bold mb-2">Reviews:</h3>
      {book?.reviews?.map((review, index) => (
        <p key={index}>{review}</p>
      ))}
    </div>
  );
};

export default BookDetailsPage;
