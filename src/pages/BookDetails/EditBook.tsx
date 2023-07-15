import React, { useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import {
  usePostEditBookMutation,
  useSingleBooksQuery,
} from "../../redux/features/books/bookApi";

const EditBook = () => {
  const { id } = useParams();
  const { data } = useSingleBooksQuery(id);
  const booksData = data?.data;

  const [book, setBook] = useState({
    image: booksData?.image || "",
    title: booksData?.title || "",
    author: booksData?.author || "",
    genre: booksData?.genre || "",
    publicationDate: booksData?.publicationDate || "",
  });

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    setBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };
  const [postEditBook, { isLoading }] = usePostEditBookMutation();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const options = {
      id: id,
      data: book,
    };
    postEditBook(options)
      .unwrap()
      .then(() => {
        toast.success("Book Edited");
      })
      .catch((error) => {
        toast.error("Failed to add review");
        console.error(error);
      });
    setBook({
      image: "",
      title: "",
      author: "",
      genre: "",
      publicationDate: "",
    });
  };
  console.log("book", book);
  return (
    <div className="mx-auto max-w-lg">
      <div className="bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-xl mb-4">Edit The Book</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="image" className="block font-medium mb-1">
              Image URL:
            </label>
            <input
              type="text"
              id="image"
              name="image"
              defaultValue={booksData?.image}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium mb-1">
              Title:
            </label>
            <input
              defaultValue={booksData?.title}
              type="text"
              id="title"
              name="title"
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block font-medium mb-1">
              Author:
            </label>
            <input
              type="text"
              id="author"
              name="author"
              defaultValue={booksData?.author}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="genre" className="block font-medium mb-1">
              Genre:
            </label>

            <select
              id="genre"
              name="genre"
              defaultValue={booksData?.genre}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            >
              <option value="Fantasy">Fantasy</option>
              <option value="Mystery">Mystery</option>
              <option value="Romance">Romance</option>
              <option value="comic">Comic</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="publicationDate" className="block font-medium mb-1">
              Publication Date:
            </label>
            <input
              type="date"
              id="publicationDate"
              name="publicationDate"
              defaultValue={booksData?.publicationDate}
              onChange={handleChange}
              className="border-gray-300 border p-2 rounded-md w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditBook;
